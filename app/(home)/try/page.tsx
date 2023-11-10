'use client';

export default function page() {
  return (
    <div className='flex flex-col items-center h-full w-full'>
      <div className='flex items-center h-full w-full'>
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
      </div>
      <div className='flex'>
        <button className='rounded-full bg-white px-4 py-2 mb-8 mr-4'>Reset</button>
        <button className='rounded-full bg-white px-4 py-2 mb-8'>Create Account</button>
      </div>
    </div>
  );
}
