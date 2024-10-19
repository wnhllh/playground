// @/app/page.tsx
"use client";
import HostCard from '@/app/home/HostCard';
import CardList from './home/CardList';
import { Link } from '@nextui-org/react';
import { Navbar } from "@/components/navbar";
import AIInput from './home/AIInput';
import { useTheme } from 'next-themes';  // 导入 useTheme 钩子
import { useRouter } from 'next/navigation';  // 导入 useRouter

/**
 * 
 *  web-home
 */
export default function HomePage() {
  const { theme, setTheme } = useTheme();  // 获取当前主题和设置主题的函数
  const router = useRouter();  // 获取路由对象

  return (
    <div className="relative flex flex-col h-screen bg-white dark:bg-black text-black dark:text-white"> {/* 根据主题切换背景和文字颜色 */}
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <div>
          <h1 className='text-center text-[45px] font-bold bg-gradient-to-r from-orange-400 to-blue-700 bg-clip-text text-transparent'>
            Idea, Explore, Choose
          </h1>
          <h1 className='text-center text-[19px]'>
            Less operations, more creative. Let's make UI design easier!
          </h1>
          <HostCard />

          <div className='flex justify-center items-center gap-4 w-4/5 mx-auto mb-20 mt-4'>
            <div className='flex flex-wrap md:flex-nowrap mb-6 md:mb-0 w-[75%] gap-4 bg-black dark:bg-white bg-opacity-70'>
              <AIInput />
            </div>
          </div>
          <CardList />
        </div>
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          className="flex items-center gap-1 text-current"
          onClick={() => router.push('/funnel')}
          title="app"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">AIctopus</p>
        </Link>
        {/* 添加主题切换按钮 */}
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="ml-4 p-2 bg-gray-200 dark:bg-gray-800 rounded"
        >
          Theme
        </button>
      </footer>
    </div>
  );
}
