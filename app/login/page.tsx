'use client';
import React from 'react';
import { Button, Link, Input } from '@nextui-org/react';
import API from '@/services';
import { useSet } from '@/utils/hooks';
import MailIcon from '@/components/svg/MailIcon';
import LockIcon from '@/components/svg/LockIcon';
import Toast from '@/components/base/toast';


export default () => {
  const [state, setState] = useSet({
    username: '',
   password: ''
  });

  const { username, password } = state;

  const submitRegister = async () => {
    const res = await API.user.login({
      username,
      password
    });

    if (res?.suc) {
      location.href = './';
    }
  };


  return (
    <div className='flex flex-col flex-grow md:flex-row min-h-screen '>
      {/* 左半边，只在电脑屏幕宽超一半以上显示  left side, only show while width larger then half screen*/}
      <div className='hidden md:flex flex-col w-1/2   p-10 bg-[rgb(8,51,68)]'>
        <Link href='/' className='text-white text-lg justify-start'>
          AIctopus
        </Link>
        <div className='flex-grow flex flex-col justify-center'>
          <p className='text-white text-3xl   font-bold'>
            Don&apos;t have access yet?
            <br /> We onboard new users every week.
          </p>
        </div>
        <p className='text-white text-lg  mb-[2%]'>
          Build software products, using only a chat interface
        </p>
      </div>
      {/* 右半边 ，当电脑屏幕不足一半或者移动端单独显示这半  right side show individually, showing while less than half laptop screen or showing on mobile app*/}
      <div className='w-full md:w-1/2 flex justify-center items-center min-h-screen'>
        <div className='w-full max-w-md flex flex-col items-center'>
          <h1 className='text-white text-xl font-bold mb-4'>Login</h1>
          {/* --------------------google and github sign in 登录  START------------------ */}

          {/* <div className='flex max-w-[84%] justify-center items-center flex-wrap'>
            <Button
              variant='bordered'
              className='rounded w-[78%]  h-8  border-gray-600 border hover:bg-white hover:text-black  bg-white bg-opacity-10'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                <path d='M9 18c-4.51 2-5-2-7-2'></path>
              </svg>
              Sign in with GitHub
            </Button>

            <Button
              variant='bordered'
              className='rounded w-[78%]  h-8 mt-[4%] border-gray-600 border hover:bg-white hover:text-black bg-white bg-opacity-10'
            >
              <svg
                fill='#ffffff'
                height='14px'
                width='14px'
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 210 210'
                xmlSpace='preserve'
              >
                <path d='M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40 c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105 S0,162.897,0,105z' />
              </svg>
              Sign in with Google
            </Button>
          </div> */}
          {/* --------------------google and github sign in 登录  END------------------ */}
          {/* --------------------Line or line 分割线 START------------------ */}
          {/* <div className='flex w-full items-center pl-[18%] pr-[18%]'>
            <div className=' h-px w-full bg-gray-800 mt-[10%] mb-[9%] ' />
            <div className='absolate mt-1 text-xs text-gray-400'>
              &nbsp; OR &nbsp;
            </div>
            <div className=' h-px w-full bg-gray-800 mt-[10%] mb-[9%]' />
          </div> */}
          {/* --------------------Line or line 分割线  END------------------ */}
          {/* <p className='text-gray-400 text-[0.8rem] mb-4'>
            Enter your email and password below to login
          </p> */}
          {/* --------------------sign in By Email 邮箱登录 START------------------ */}
          <div className='flex justify-center items-center flex-wrap bg-black '>
            <Input
              type='email'
              variant='bordered'
              placeholder='name@example.com'
              radius='sm'
              className='w-[66%] h-7 mt-[1%] border-gray-300'
              endContent={
                <MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
              }
              onValueChange={value => setState({ username: value })}
            />
            <Input
              type='password'
              variant='bordered'
              placeholder='Password'
              radius='sm'
              className=' w-[66%] h-7 mt-[6%] border-gray-300 '
              endContent={
                <LockIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
              }
              onValueChange={value => setState({ password: value })}
            />
          </div>
          {/* --------------------sign in by Email 邮箱登录 END------------------ */}
          <Button className='bg-white text-black text-sm w-[64%] h-7 rounded-md mt-[8%]' onClick={submitRegister}>
            Sign in
          </Button>
          <div className='flex mt-4'>
            <span className='text-gray-300 text-sm'>
              Don&apos;t have an account?&nbsp;
            </span>
            <Link href='/signUp' className='text-gray-300 text-sm'>
              Sign up
            </Link>
          </div>
          <Link href='#' className='text-gray-300 text-sm mt-2'>
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
