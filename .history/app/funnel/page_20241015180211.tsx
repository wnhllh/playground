// @/app/funnel/page.tsx
'use client'
import React, { useEffect, useState } from 'react'
import { Editor, Frame, Element, useEditor } from '@craftjs/core'
import { useSearchParams } from 'next/navigation'
import { renderComponents } from '@/lib/componentRenderer'
import { Wrapper } from '@/components/wrapper'
import { SideMenu } from '@/components/side-menu'
import { Viewport } from '@/components/viewport'
import { componentsMap } from '@/components/node/components-map'
import { DynamicContent } from '@/components/dynamicContent'
import { componentMap } from '@/lib/component-map'
import { CodeGenerator } from '@/components/codeGenerator'
import { TextGenerator } from '@/components/textGenerator'
import { ResizableComponent } from '@/components/resizableComponent'
import { fetchEventSource } from '@microsoft/fetch-event-source'
import { CodeGenerationContext } from '@/contexts/CodeGenerationContext'
import { componentStrings, componentStrings2, componentStrings3 } from '@/lib/test-string'
import API from '@/services';

interface PageData {
  id: string
  componentStrings: string[]
}

// 模拟的页面数据
const pagesData: PageData[] = [
  { id: 'page1', componentStrings: componentStrings },
  { id: 'page2', componentStrings: componentStrings2 },
  { id: 'page3', componentStrings: componentStrings3 },
];

const createCraftElement = (component) => {
  if (typeof component !== 'object' || component === null) {
    return component
  }

  const { type, props } = component
  const Component = componentMap[type] || type

  if (!Component) {
    console.error(`Component type "${type}" not found in componentMap`)
    return null
  }

  const craftProps = { ...props }

  if (props && props.children) {
    craftProps.children = Array.isArray(props.children)
      ? props.children.map(createCraftElement)
      : createCraftElement(props.children)
  }

  return (
    <Element canvas is={Component} {...craftProps}>
      {craftProps.children}
    </Element>
  )
}

const ContentUpdater = ({ currentPage }) => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!enabled) return; // 等待编辑器启用
    // 其他代码
  }, [enabled]);

  const [stage, setStage] = useState(0)

  // 将 clearCurrentContent 移到 useEffect 外部
  const clearCurrentContent = () => {
    const nodes = query.getNodes()
    Object.keys(nodes).forEach((nodeId) => {
      if (nodeId !== 'ROOT' && nodes[nodeId].data.parent === 'ROOT') {
        actions.delete(nodeId)
      }
    })
  }

  // 当 currentPage 更改时重置 stage 并清除内容
  useEffect(() => {
    setStage(0)
    clearCurrentContent()
  }, [currentPage])

  useEffect(() => {
    const addComponent = () => {
      if (stage === currentPage.componentStrings.length) {
        console.log('All stages have been added.')
        return
      }

      console.log('Adding stage:', stage)

      try {
        const currentComponentString = currentPage.componentStrings[stage]
        const parsedComponents = renderComponents(currentComponentString)
        parsedComponents.forEach((parsedComponent) => {
          const craftElement = createCraftElement(parsedComponent)
          if (craftElement) {
            const nodeTree = query.parseReactElement(craftElement).toNodeTree()
            actions.addNodeTree(nodeTree, 'ROOT')
          }
        })

        setStage((prevStage) => prevStage + 1)

        if (stage === currentPage.componentStrings.length - 1) {
          console.log('All stages have been added!')
          return
        }
      } catch (error) {
        console.error('Error updating content:', error)
      }
    }

    if (stage < currentPage.componentStrings.length) {
      const timer = setTimeout(addComponent, 100)
      return () => clearTimeout(timer)
    }
  }, [actions, query, stage, currentPage.componentStrings])

  return null
}

const CodeGenerationHandler = () => {
  const { actions, query } = useEditor()
  const { newGeneratedCode, setGeneratedCodes } = React.useContext(
    CodeGenerationContext
  )

  useEffect(() => {
    const convertTextGeneratorsToCodeGenerators = async () => {
      const nodes = query.getNodes()

      for (const [nodeId, node] of Object.entries(nodes)) {
        if (node.data.type === TextGenerator) {
          const parentId = node.data.parent
          const currentIndex = query
            .node(parentId)
            .get()
            .data.nodes.indexOf(nodeId)

          try {
            const parsedComponents = renderComponents(newGeneratedCode)

            const processComponent = (component) => {
              const craftElement = createCraftElement({
                type: CodeGenerator,
                props: {
                  id: nodeId,
                  defaultCode: newGeneratedCode
                }
              })

              if (craftElement) {
                const nodeTree = query
                  .parseReactElement(craftElement)
                  .toNodeTree()
                actions.addNodeTree(nodeTree, parentId, currentIndex)
              }
            }

            if (Array.isArray(parsedComponents)) {
              parsedComponents.forEach(processComponent)
            } else {
              processComponent(parsedComponents)
            }

            actions.delete(nodeId)

            setGeneratedCodes((prevCodes) => ({
              ...prevCodes,
              [nodeId]: newGeneratedCode
            }))
          } catch (error) {
            console.error('Error updating content:', error)
          }
        }
      }
    }

    if (newGeneratedCode) {
      console.log('newGeneratedCode', newGeneratedCode)
      convertTextGeneratorsToCodeGenerators()
    }
  }, [newGeneratedCode, actions, query, setGeneratedCodes])

  return null
}

const App = () => {
  const [prompt, setPrompt] = useState('')
  const [selectedId, setSelectedId] = useState('1')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCodes, setGeneratedCodes] = useState({})
  const [error, setError] = useState(null)
  const [chatHistory, setChatHistory] = useState([])
  const [generatedTexts, setGeneratedTexts] = useState({})
  const [newGeneratedCode, setNewGeneratedCode] = useState('')

  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [currentPageData, setCurrentPageData] = useState<PageData | null>(pagesData[0])

  const [pageStages, setPageStages] = useState(pagesData.map(() => 0))
  
  const [functionList, setFunctionList] = useState<
    { id: string; content: string }[]
  >([])

  const [pagesState, setPagesState] = useState<{
    [pageId: string]: {
      generatedCodes: { [id: string]: string };
      functionList: { id: string; content: string }[];
    };
  }>({})

  const [sideMenuWidth, setSideMenuWidth] = useState(300)
  const [isResizing, setIsResizing] = useState(false)

  const searchParams = useSearchParams()

  useEffect(() => {
    const projectCodeParam = searchParams.get('projectcode');
    const typeParam = searchParams.get('type');

    if (projectCodeParam) {
      setProjectCode(projectCodeParam);
    }

    if (typeParam === 'create') {
      const initialInput = localStorage.getItem('inputValue');
      if (initialInput) {
        setPrompt(initialInput);
        handleGenerate();
        localStorage.removeItem('inputValue');
      }
    } else if (typeParam === 'edit') {
      fetchProjectData(projectCodeParam);
    }
  }, []);

  // 新增的 projectCode 状态
  const [projectCode, setProjectCode] = useState('')

  const fetchProjectData = async (projectCode: string) => {
    console.log('fetchProjectData called with projectCode:', projectCode);

    try {
      const params = { projectCode };
      const response = await API.project.getArtifacts(params);
      
      if (response && response.data && response.data.artifacts && response.data.artifacts.length > 0) {
        const artifact = response.data.artifacts[0];
        console.log('Artifact content:', artifact.content);

        // 使用一个统一的 key 来更新 generatedCodes
        setGeneratedCodes(prevCodes => ({
          ...prevCodes,
          'main': artifact.content || ''
        }));

        console.log('Updated generatedCodes:', {
          ...generatedCodes,
          'main': artifact.content || ''
        });
      } else {
        console.log('No artifacts found or invalid response structure');
      }
    } catch (error) {
      console.error('获取项目数据失败:', error);
      setError(error instanceof Error ? `获取项目数据失败：${error.message}` : '获取项目数据失败：未知错误');
    }
  };

  // 修改 handleGenerate 函数，使用 projectCode
  const handleGenerate = async () => {
    if (prompt.trim() === '') {
      setError('请在生成代码之前输入提示。')
      return
    }

    setIsGenerating(true)
    setError(null)

    // 将用户输入添加到聊天历史
    setChatHistory(prevHistory => [
      ...prevHistory,
      { id: Date.now().toString(), content: prompt, isUser: true }
    ])

    let generatedCode = ''

    try {
      await fetchEventSource(
        'https://api-dev.aictopusde.com/api/v1/projects/ai/assets',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 确保在请求头中加入正确的 Authorization
            Authorization: `Bearer ${localStorage.getItem('token') || ''}`
          },
          body: JSON.stringify({
            projectCode: projectCode || 'default_project_code', // 使用从 URL 获取的 projectCode
            prompt,
            payload: ''
          }),
          async onopen(response) {
            if (!response.ok || response.headers.get('content-type') !== 'text/event-stream') {
              throw new Error('建立连接失败')
            }
          },
          onmessage(event) {
            const line = event.data.replace(/data:\s*/g, '')
            generatedCode += line || ' '

            // 更新 generatedCodes 以实时显示
            setGeneratedCodes(prevCodes => ({
              ...prevCodes,
              [selectedId]: generatedCode
            }))
          },
          onerror(err) {
            throw err
          },
          onclose() {
            setIsGenerating(false)

            // 将最终生成的代码添加到聊天历史
            setChatHistory(prevHistory => [
              ...prevHistory,
              {
                id: Date.now().toString(),
                content: generatedCode,
                isUser: false
              }
            ])

            setNewGeneratedCode(generatedCode)

            // 更新 generatedCodes 和 pagesState
            setGeneratedCodes(prevCodes => {
              const newCodes = {
                ...prevCodes,
                [selectedId]: generatedCode
              }
              
              // 更新 pagesState
              const currentPageId = `page${currentPageIndex + 1}`
              setPagesState(prevState => ({
                ...prevState,
                [currentPageId]: {
                  ...prevState[currentPageId],
                  generatedCodes: newCodes
                }
              }))

              return newCodes
            })
          },
          openWhenHidden: true
        }
      )
    } catch (error) {
      console.error('生成代码时出错:', error)
      setError('生成代码时发生错误。请重试。')
      setIsGenerating(false)

      // 将错误消息添加到聊天历史
      setChatHistory(prevHistory => [
        ...prevHistory,
        {
          id: Date.now().toString(),
          content: '错误：生成代码失败。',
          isUser: false
        }
      ])
    }
  }

  const updateFunctionList = (newFunctionList: { id: string; content: string }[], pageId: string) => {
    setFunctionList(newFunctionList)
    setPagesState(prevState => ({
      ...prevState,
      [pageId]: {
        ...prevState[pageId],
        functionList: newFunctionList
      }
    }))
  }

  const handlePageChange = (index: number) => {
    setCurrentPageIndex(index);
    setCurrentPageData(pagesData[index]);
  }

  const updatePageStage = (pageIndex: number, newStage: number) => {
    setPageStages((prevStages) => {
      const newStages = [...prevStages]
      newStages[pageIndex] = newStage
      return newStages
    })
  }

  const sendCodeToBackend = async (id: string, code: string) => {
    console.log(`Sending code for id ${id} to backend:`, code)
    // 实现发送代码到后端的逻辑
  }

  const getAllGeneratedCodes = () => {
    return generatedCodes
  }

  const contextValue = {
    prompt,
    setPrompt,
    isGenerating,
    setIsGenerating,
    generatedCodes,
    setGeneratedCodes,
    error,
    setError,
    handleGenerate,
    selectedId,
    setSelectedId,
    sendCodeToBackend,
    getAllGeneratedCodes,
    generatedTexts,
    setGeneratedTexts,
    newGeneratedCode,
    setNewGeneratedCode,
    currentPage: pagesData[currentPageIndex],
    handlePageChange,
    pageStages,
    updatePageStage,
    functionList,
    setFunctionsList: updateFunctionList,
    currentPageId: `page${currentPageIndex + 1}`,
  }

  useEffect(() => {
    if (projectCode) {
      fetchProjectData(projectCode);
    }
  }, [projectCode]);

  return (
    <CodeGenerationContext.Provider value={contextValue}>
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          <Editor
            resolver={{
              ...componentMap,
              CodeGenerator,
              TextGenerator,
              ResizableComponent,
              Wrapper
            }}
          >
            <div className="flex flex-1 relative">
              <SideMenu
                componentsMap={componentsMap}
                pages={pagesData}
                currentPageIndex={currentPageIndex}
                onPageChange={handlePageChange}
                chatHistory={chatHistory}
                functionList={functionList}
                setFunctionsList={updateFunctionList}
                currentPageId={`page${currentPageIndex + 1}`}
                prompt={prompt}
                setPrompt={setPrompt}
                handleGenerate={handleGenerate}
              />
              <Viewport>
                <Frame>
                  <Element is={Wrapper} canvas id="root_wrapper">
                    <Element is={DynamicContent} id="dynamic_content">
                      {null}
                    </Element>
                  </Element>
                </Frame>
              </Viewport>
            </div>
            {currentPageData && (
              <>
                <CodeGenerationHandler />
                <ContentUpdater currentPage={currentPageData} />
              </>
            )}
          </Editor>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </CodeGenerationContext.Provider>
  )
}

export default App