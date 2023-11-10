'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const slides = [
  <>
    <div className='flex items-center flex-col w-1/2'>
      <span className='text-xl'>How you talk to your friends</span>
      <form>
        <input value={`i'm really fun`} onChange={() => {}} className='border rounded mt-4 px-2 h-[30px] hover:bg-gray-100 hover:border-red-700' />
      </form>
    </div>
    <div className='w-1/2 flex flex-col items-center'>
      <p className='text-xl'>Translate to your date&apos;s Father</p>
      <p className='mt-4'>I am an embodiment of delightful amusement.</p>
    </div>
  </>,
  <>
    <div className='flex items-center flex-col w-1/2'>
      <span className='text-xl'>How you talk to your friends</span>
      <form>
        <input value={`i'm smart`} onChange={() => {}} className='border rounded mt-4 px-2 h-[30px] hover:bg-gray-100 hover:border-red-700' />
      </form>
    </div>
    <div className='w-1/2 flex flex-col items-center'>
      <span className='text-xl'>Translate to your future boss</span>
      <p className='mt-4'>I possess intellectual acumen.</p>
    </div>
  </>,
  <>
    <div className='flex items-center flex-col w-1/2'>
      <span className='text-xl'>How you talk to your friends</span>
      <form>
        <input value={`my bad`} onChange={() => {}} className='border rounded mt-4 px-2 h-[30px] hover:bg-gray-100 hover:border-red-700' />
      </form>
    </div>
    <div className='w-1/2 flex flex-col items-center'>
      <span className='text-xl'>Translate to your wife</span>
      <p className='mt-4'>I acknowledge my mistake and take responsibility for it.</p>
    </div>
  </>,
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const counterRef = useRef(0);
  let timer = useRef<any>(null);

  useEffect(() => {
    counterRef.current = index;
  });
  useEffect(() => {
    timer.current = setInterval(() => {
      if (counterRef.current < 2) {
        setIndex(counterRef.current + 1);
      } else {
        setIndex(0);
      }
    }, 10000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <>
      <div className='flex items-center justify-between h-full w-full'>{slides[index]}</div>
      <Link className='rounded-full bg-white px-4 py-2 mb-8' href='/try'>
        Try now!
      </Link>
    </>
  );
}
