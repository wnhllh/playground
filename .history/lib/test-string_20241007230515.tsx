// @/lib/test-string.tsx
export const componentStrings1 = [
`
<ResizableComponent id="1" width="99%" height="25%" className="p-4">
  <CodeGenerator>
    import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
  </CodeGenerator>
</ResizableComponent>
`,
`
<ResizableComponent id="2" width="31%" height="50%" className="p-4">
  <CodeGenerator>
    import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
  </CodeGenerator>
</ResizableComponent>
`,
`
<ResizableComponent id="3" width="67%" height="50%" className="p-4">
  <CodeGenerator>
        import React from 'react'; const App = () => <div><h1>Device Showcase Section</h1></div>; export default App;
  </CodeGenerator>
</ResizableComponent>`,
`
<ResizableComponent id="5" width="99%" height="25%" className="p-4">
  <CodeGenerator>
        import React from 'react'; const App = () => <div><h1>Footer</h1></div>; export default App;
  </CodeGenerator>
</ResizableComponent>`
 ];
  
 export const componentStrings3 = [
  `
  <ResizableComponent id="1" width="45%" height="25%" className="p-4">
    <CodeGenerator>
      import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
    </CodeGenerator>
  </ResizableComponent>
  `,
  `
  <ResizableComponent id="2" width="55%" height="25%" className="p-4">
    <CodeGenerator>
      import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
    </CodeGenerator>
  </ResizableComponent>
  `,
  `
  <ResizableComponent id="4" width="99%" height="70%" className="p-4">
    <CodeGenerator>
          import React from 'react'; const App = () => <div><h1>Video Showcase</h1></div>; export default App;
    </CodeGenerator>
  </ResizableComponent>`,
  `
  <ResizableComponent id="5" width="99%" height="70%" className="p-4">
    <CodeGenerator>
          import React from 'react'; const App = () => <div><h1>Footer</h1></div>; export default App;
    </CodeGenerator>
  </ResizableComponent>`
   ];


   export const componentStrings2 = [
    `
    <ResizableComponent id="1" width="99%" height="25%" className="p-4">
      <CodeGenerator>
        import React from 'react'; const App = () => <div><h1>Header</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
      </CodeGenerator>
    </ResizableComponent>
    `,
    `
    <ResizableComponent id="2" width="75%" height="50%" className="p-4">
      <CodeGenerator>
        import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
      </CodeGenerator>
    </ResizableComponent>
    `,
    `
    <ResizableComponent id="3" width="22%" height="50%" className="p-4">
      <CodeGenerator>
            import React from 'react'; const App = () => <div><h1>Device Showcase Section</h1></div>; export default App;
      </CodeGenerator>
    </ResizableComponent>`,
    `
    <ResizableComponent id="5" width="99%" height="40%" className="p-4">
      <CodeGenerator>
            import React from 'react'; const App = () => <div><h1>Test</h1></div>; export default App;
      </CodeGenerator>
    </ResizableComponent>`
     ];

export const componentStrings = [
  `
  <ResizableComponent id="2" width="99%" height="99%" className="p-4">
  <CodeGenerator>
    import React from 'react'; const App = () => <div><h1>Sidebar</h1><p>This app showcases the power of AI in generating React code.</p></div>; export default App;
  </CodeGenerator>
</ResizableComponent>
`
]

export const componentStrings8 = [`
<ResizableComponent width="100%" height="auto" className="p-4">
  <NodeCard className="w-full">
    <NodeCardHeader>
      <NodeCardTitle>Welcome to Our Mixed Component Test</NodeCardTitle>
      <NodeCardDescription>This example demonstrates both custom components and raw HTML elements.</NodeCardDescription>
    </NodeCardHeader>
    <NodeCardContent>
      <div className="space-y-4">
        <NodeAccordion type="single" collapsible>
          <NodeAccordionItem value="item-1">
            <NodeAccordionTrigger>Custom Components Section</NodeAccordionTrigger>
            <NodeAccordionContent>
              <NodeButton className="mr-2">Click Me!</NodeButton>
              <NodeBadge variant="outline">New Feature</NodeBadge>
              <NodeAvatar src="https://github.com/shadcn.png" fallback="CN" />
            </NodeAccordionContent>
          </NodeAccordionItem>
        </NodeAccordion>
        
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Raw HTML Section</h3>
          <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
        
        <NodeAlert>
          <NodeAlertTitle>Heads up!</NodeAlertTitle>
          <NodeAlertDescription>
            This is an example of nested components with raw HTML.
          </NodeAlertDescription>
        </NodeAlert>
      </div>
    </NodeCardContent>
    <NodeCardFooter>
      <NodeButton variant="outline">Cancel</NodeButton>
      <NodeButton>Submit</NodeButton>
    </NodeCardFooter>
  </NodeCard>
</ResizableComponent>
`];

export const componentStrings24 = [
  // Header
  `
  <ResizableComponent width="100%" height="10%" className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">

    <NodeCard className="w-full">
						<NodeCardHeader>
							<NodeCardTitle>Card Title</NodeCardTitle>
							<NodeCardDescription>Card Description</NodeCardDescription>
						</NodeCardHeader>
						<NodeCardContent></NodeCardContent>
						<NodeCardFooter>
							<NodeButton className="w-full">Footer button</NodeButton>
						</NodeCardFooter>
					</NodeCard>
  </ResizableComponent>
  `,

  // Interactive Elements
  `
  <ResizableComponent width="48%" height="35%" className="p-4">
    <NodeCard className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <NodeCardContent className="h-full p-6">
        <NodeAccordion type="single" collapsible className="h-full">
          <NodeAccordionItem value="item-1" className="h-full">
            <NodeAccordionTrigger>Interactive Elements</NodeAccordionTrigger>
            <NodeAccordionContent className="h-full">
              <div className="space-y-4 h-full flex flex-col justify-center">
                <NodeButton className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md hover:from-green-500 hover:to-blue-600 transition-all duration-300">
                  Gradient Button
                </NodeButton>
                <NodeCheckbox label="Check me!" className="text-indigo-600" />
    <Input id="input" type={type} placeholder={placeholder} {...props} />
              </div>
            </NodeAccordionContent>
          </NodeAccordionItem>
        </NodeAccordion>
      </NodeCardContent>
    </NodeCard>
  </ResizableComponent>
  `,

  // Visual Elements
  `
  <ResizableComponent width="48%" height="35%" className="p-4">
    <NodeCard className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <NodeCardContent className="h-full p-6">
        <NodeAccordion type="single" collapsible className="h-full">
          <NodeAccordionItem value="item-2" className="h-full">
            <NodeAccordionTrigger>Visual Elements</NodeAccordionTrigger>
            <NodeAccordionContent className="h-full">
              <div className="space-y-4 h-full flex flex-col justify-center">
                <NodeAvatar src="https://example.com/avatar.jpg" alt="User Avatar" className="w-16 h-16 rounded-full border-4 border-gradient-to-r from-yellow-400 to-orange-500" />
                <NodeBadge variant="outline" className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
                  Premium User
                </NodeBadge>
                <NodeAlert variant="info" className="bg-gradient-to-r from-green-100 to-blue-500">
                  <NodeAlertTitle>Info</NodeAlertTitle>
                  <NodeAlertDescription>This is an informational alert with a gradient background.</NodeAlertDescription>
                </NodeAlert>
              </div>
            </NodeAccordionContent>
          </NodeAccordionItem>
        </NodeAccordion>
      </NodeCardContent>
    </NodeCard>
  </ResizableComponent>
  `,

  // Calendar
  `
  <ResizableComponent width="48%" height="35%" className="p-4">
    <NodeCard className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <NodeCardContent className="h-full p-6">
        <NodeCollapsible className="h-full border border-gray-200 rounded-md">
          <NodeCollapsible.Trigger className="w-full p-4 text-left font-medium bg-gradient-to-r from-gray-50 to-gray-100">
            Toggle Calendar
          </NodeCollapsible.Trigger>
          <NodeCollapsibleContent className="p-4 h-[calc(100%-3rem)]">
            <NodeCalendar className="h-full bg-white shadow-md rounded-lg" />
          </NodeCollapsibleContent>
        </NodeCollapsible>
      </NodeCardContent>
    </NodeCard>
  </ResizableComponent>
  `,

  // Aspect Ratio Container
  `
  <ResizableComponent width="48%" height="35%" className="p-4">
    <NodeCard className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <NodeCardContent className="h-full p-6">
        <NodeAspectRatio ratio={16 / 9} className="h-full">
          <div className="w-full h-full bg-gradient-to-tl from-purple-400 via-pink-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
            16:9 Aspect Ratio Container
          </div>
        </NodeAspectRatio>
      </NodeCardContent>
    </NodeCard>
  </ResizableComponent>
  `,

  // Footer
  `
  <ResizableComponent width="100%" height="20%" className="bg-gradient-to-br from-gray-100 to-gray-200">
    <NodeCard className="h-full bg-blue-500 rounded-lg shadow-lg overflow-hidden">
      <NodeCardFooter className="h-full p-4 flex justify-between items-center">
        <NodeHoverCard>
          <NodeHoverCard.Trigger>
            <NodeButton variant="outline" className="text-gray-700 hover:text-gray-900">
              Hover for more info
            </NodeButton>
          </NodeHoverCard.Trigger>
          <NodeHoverCard.Content className="bg-white p-4 rounded-md shadow-lg">
            <h3 className="text-lg font-semibold">Additional Information</h3>
            <p className="text-sm text-gray-600">This complex component demonstrates various nested elements and gradient styles.</p>
          </NodeHoverCard.Content>
        </NodeHoverCard>
        <NodeDialog>
          <NodeDialog.Trigger asChild>
            <NodeButton className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
              Open Dialog
            </NodeButton>
          </NodeDialog.Trigger>
          <NodeDialog.Content className="bg-white rounded-lg shadow-xl p-6">
            <NodeDialog.Header>
              <NodeDialog.Title className="text-2xl font-bold text-gray-900">Dialog Title</NodeDialog.Title>
              <NodeDialog.Description className="text-sm text-gray-500">
                This is a description of the dialog content.
              </NodeDialog.Description>
            </NodeDialog.Header>
            <div className="mt-4">
              <p className="text-gray-700">Dialog content goes here...</p>
            </div>
            <NodeDialog.Footer className="mt-6 flex justify-end">
              <NodeDialog.Close asChild>
                <NodeButton variant="outline" className="mr-2">Cancel</NodeButton>
              </NodeDialog.Close>
              <NodeButton className="bg-blue-500 text-white">Confirm</NodeButton>
            </NodeDialog.Footer>
          </NodeDialog.Content>
        </NodeDialog>
      </NodeCardFooter>
    </NodeCard>
  </ResizableComponent>
  `
];
