'use client'
import { useEffect, useRef, useState } from 'react'
import Header from '../components/header'

const slides = [
  <div key={1} className='flex items-center justify-between w-1/2 border rounded p-4 h-1/2'>
    <div className='flex items-center flex-col w-1/2'>
      How you talk to your friends
    <form>
    <input value={`i'm really fun`} onChange={()=> {}} className='border rounded px-2 h-[30px] hover:bg-gray-100 hover:border-red-700'/>
    </form>
    </div>
    <div className='w-1/2 flex flex-col items-center'>
      <p>Translate to your date&apos;s Father</p>
      <p >I am an embodiment of delightful amusement.</p>
    </div>
  </div>,
  <div key={1} className='flex items-center justify-between w-1/2 border rounded p-4'>
  <div className='flex items-center flex-col w-1/2'>
    How you talk to your friends
  <form><input value={`i'm smart`} onChange={()=> {}} className='border rounded px-2 h-[30px] hover:bg-gray-100 hover:border-red-700'/></form>
  </div>
  <div className='w-1/2 flex flex-col items-center'>
    Translate to your future boss
    <p >I possess intellectual acumen.</p>
  </div>
</div>,
  <div key={1} className='flex items-center justify-between w-1/2 border rounded p-4'>
  <div className='flex items-center flex-col w-1/2'>
  How you talk to your friends
  <form><input value={`my bad`} onChange={()=> {}} className='border rounded px-2 h-[30px] hover:bg-gray-100 hover:border-red-700'/></form>
  </div>
  <div className='w-1/2 flex flex-col items-center'>
    Translate to your wife
    <p >I acknowledge my mistake and take responsibility for it.</p>
  </div>
</div>,
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const counterRef = useRef(0);
  let timer = useRef<any>(null)
  useEffect(() => {
    counterRef.current = index;
  })
  useEffect(() => {
     timer.current = setInterval(() => {
      if(counterRef.current < 2) {
        setIndex(counterRef.current + 1)
      } else {
        setIndex(0)
      }
    }, 10000)
  
    return () => {
      clearInterval(timer.current)
    }
  }, [])
  
  return (
    <main className="flex h-full flex-col items-center justify-center bg-white text-black">
      <h1 className='text-4xl'>Welcome to PrestigePal</h1>
      <p className='italic text-xl'>I can help you sound like a better version of you!</p>
      <p className='text-sm mb-4'>Makers of SwaggerMate</p>
      {slides[index]}
    </main>
  )
}
