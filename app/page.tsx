"use client";
import HostCard from '@/app/home/HostCard';
import CardList from './home/CardList';
import { Link } from '@nextui-org/react';
import { Navbar } from "@/components/navbar";
import AIInput from './home/AIInput';

/**
 * 
 *  web-home
 */
export default () => {

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <div>
        <h1 className='text-center text-[45px] font-bold bg-gradient-to-r from-orange-400 to-blue-700 bg-clip-text text-transparent'>
          Idea, Explore, Choose
        </h1>
        <h1 className='text-white text-center text-[19px] '>
          Less operations, more creative. Lets make UI design easier!
        </h1>
        <HostCard />
      
        <div className='flex justify-center items-center gap-4 w-4/5 mx-auto mb-20 mt-4'>
          <div className='flex flex-wrap md:flex-nowrap mb-6 md:mb-0 w-[75%] gap-4 bg-black bg-opacity-70'>
            <AIInput />
            
          </div>
        </div>
        <CardList />
      </div>
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        {/* <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="./"
          title="app"
        > */}
        <Link
          className="flex items-center gap-1 text-current"
          onClick={() => router.push('/funnel')} // 修改这行
          title="app"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">AIctopus</p>
        </Link>
      </footer>
    </div>
  );
}
