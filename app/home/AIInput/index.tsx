import React, { useRef } from 'react';
import { Input, Textarea, Tabs, Tab } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { TbSend2 } from 'react-icons/tb';
import { useSet } from '@/utils/hooks';
import API from '@/services';

const tabs = [
  {
    id: 'app',
    label: 'Full UI',
  },
  {
    id: 'component',
    label: 'page',
  },
];

export default () => {
  const textareaRef: any = useRef(null);
  const inputRef: any = useRef(null);
  const router = useRouter();

  const [state, setState] = useSet({
    inputValue: '',
    visible: false,
    type: 'component'
  });

  const { inputValue, visible, type } = state;

  const handleSend = async () => {
    if (inputValue) {
      try {
        // 调用后端接口创建新项目，获取 projectcode
        const res = await API.project.create({ workType: "ASSET" });
        const projectcode = res?.data?.projectCode;

        // 将 inputValue 存储到 localStorage
        localStorage.setItem('inputValue', inputValue.trim());

        // 构建跳转的 URL，包含 projectcode 和 type
        const url = `/funnel?projectcode=${projectcode}&type=create`;

        // 跳转到新的页面
        router.push(url);
      } catch (error) {
        console.error('创建项目失败：', error);
        // 可以在此添加错误提示
      }
    }
  };

  const handleInputChange = (ev: any) => {
    setState({ visible: true });
    setTimeout(() => {
      textareaRef.current.focus();
      setState({ inputValue: ev.target.value });
    }, 0);
  };

  const handleTextareaChange = (ev: any) => {
    const value = ev.target.value;
    setState({ inputValue: value });
    if (!value) {
      setState({ visible: false });
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  };

  return (
    <>
      {!visible ? (
        <Input
          placeholder='Tell me what you want to build...'
          labelPlacement='outside'
          className='bg-black bg-opacity-70 text-white placeholder-gray-400'
          ref={inputRef}
          onChange={handleInputChange}
          // endContent={
          //   <Link href='#'>
          //     <svg
          //       xmlns='http://www.w3.org/2000/svg'
          //       width='24'
          //       height='24'
          //       viewBox='0 -960 960 960'
          //       className='shrink-0 h-4 w-4 text-gray-600'
          //       fill='currentColor'
          //     >
          //       <path d='M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h379q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H180v600h600v-378q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v378q0 24.75-17.62 42.37Q804.75-120 780-120zm520-579h-51q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h51v-51q0-12.75 8.68-21.37-8.67-8.62-21.5-8.62-12.82 0-21.32-8.62-8.5-8.62-8.5-21.37zM449-307l-82-108q-5-6-12-6t-12 6l-84 109q-6 8-1.5 16t13.5 8h419q8.5 0 12.75-8t-.75-16L588-458q-5-6-12-6t-12 6zm31-173'></path>
          //     </svg>
          //   </Link>
          // }
        />
      ) : (
        <div className='w-full relative'>
          <Tabs items={tabs} selectedKey={type} onSelectionChange={(type) => setState({ type })} size='sm'>
            {(item) => (
              <Tab key={item.id} title={item.label} />
            )}
          </Tabs>
          <Textarea
            className='w-full rounded-md shadow-lg mt-2 resize-none'
            ref={textareaRef}
            value={inputValue}
            size='lg'
            onChange={handleTextareaChange}
            minRows={8}
          />
          <div className='absolute bottom-2.5 right-2.5 z-10'>
            <TbSend2 style={{ fontSize: 20 }} onClick={handleSend}/>
          </div>
        </div>
      )}
    </>
  );
}
