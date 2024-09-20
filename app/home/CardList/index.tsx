"use client";
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import { useSet } from '@/utils/hooks';
import { dataSource } from './mock';


const categroyList = [
    {
      label: 'UI',
      value: 'app',
      icon: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 -960 960 960'
            className='shrink-0 h-5 w-5 text-gray-300'
            fill='currentColor'
        >
            <path d='M480-80q-134 0-227-93t-93-227q0-116 71.5-225T428-811q17-11 34.5-.5T480-780v72q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658q8-9 18-12.5t19 2.5q66 45 103.5 116T800-400q0 134-93 227T480-80M220-400q0 63 28.5 118.5T328-189q-4-12-6-24.5t-2-24.5q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60q0 12-2 24.5t-6 24.5q51-37 79.5-92.5T740-400q0-54-23-105.5T651-600q-21 15-44 23.5t-46 8.5q-61 0-101-41.5T420-714v-20q-92 66-146 156.5T220-400m260 24-71 70q-14 14-21.5 31t-7.5 37q0 41 29 69.5t71 28.5 71-28.5 29-69.5q0-20-7.5-37T551-306z'></path>
        </svg>
      ),
    },
    {
      label: 'Components',
      value: 'compt',
      icon: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 -960 960 960'
            className='shrink-0 h-5 w-5 text-gray-300'
            fill='currentColor'
        >
            <path d='m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120zm157-24L294-157q-8 5-17 4.5t-16-5.5-10.5-13-1.5-18l49-212-164-143q-8-7-9.5-15.5t.5-16.5 9-13.5 17-6.5l217-19 84-200q4-9 12-13.5t16-4.5 16 4.5 12 13.5l84 200 217 19q10 1 17 6.5t9 13.5.5 16.5T826-544L662-401l49 212q2 10-1.5 18T699-158t-16 5.5-17-4.5zm0-206'></path>
        </svg>
      ),
    }
];

export default () => {
  const [state, setState] = useSet({
    category: 'app'
  });

  const { category } = state;


  return (
    <div>
      <div className='flex items-center mb-12'>
        {categroyList.map((item, index) => (
          <Button
            key={index}
            variant={item.value === category ? 'flat' : 'light'}
            startContent={item.icon}
            className='text-gray-300'
            onClick={() => setState({ category: item.value })}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div className='gap-4 grid grid-cols-2 sm:grid-cols-4'>
        {dataSource.map((item, index) => (
          <Card
            key={index}
            className='bg-transparent mb-8 rounded-lg'
            shadow='sm'
            isPressable
          >
            <CardBody className='overflow-visible p-0'>
              <div className='rounded-sm overflow-hidden h-[144px]'>
                <Image
                  src={item.img}
                  layout='fill'
                  alt={item.title}
                  objectFit='cover'
                />
              </div>
            </CardBody>
            <CardFooter className='text-small justify-between text-white px-3 pt-2 pb-0'>
              {item.title}
            </CardFooter>
            <CardFooter className='justify-left text-white px-3 py-2 text-xs'>
              {item.date}
              <p className='text-default-500 text-white'>by @{item.price}</p>
            </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
}
