'use client';

import { useEffect, useState } from 'react';

const defaultOptions = ['Mom', 'Mom', 'Mom', 'Mom', 'Mom'];

export default function Try() {
  const [input, setInput] = useState('');
  const [translateTo, setTranslateTo] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredTranslate, setFilteredTranslate] = useState(defaultOptions);

  useEffect(() => {
    if (translateTo.length > 0) {
      const result = defaultOptions.filter((w) => w.toLowerCase().includes(translateTo.toLowerCase()));
      setFilteredTranslate(result);
    } else {
      setFilteredTranslate(defaultOptions);
    }
  }, [translateTo]);

  const handleSubmit = () => {
    alert('submit');
  };
  return (
    <div className='flex flex-col items-center h-full w-full'>
      <div className='flex items-center h-full w-full'>
        <div className='flex items-center flex-col w-1/2'>
          <span className='text-xl'>How you talk to your friends</span>
          <form onSubmit={() => handleSubmit()}>
            <input value={input} onChange={(e) => setInput(e.target.value)} className='border-2 rounded mt-4 px-2 h-[30px] hover:bg-gray-200 hover:border-pink-200' />
          </form>
        </div>
        <div className='w-1/2 flex flex-col items-center'>
          {/* <span className='text-xl'>Translate to your wife</span> */}
          <div className='text-xl rounded w-52 relative bg-white' onClick={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <div>Here</div>
            <div className='absolute rounded bg-white shadow-lg shadow-indigo-500/50 w-full' style={{ top: '25px', borderTop: 'none', borderTopRightRadius: '0', borderTopLeftRadius: '0', display: dropdownOpen ? 'block' : 'none' }}>
              <input value={translateTo} onBlur={() => setDropdownOpen(false)} className='w-full border' style={{ borderLeft: '0', borderRight: '0' }} onChange={(e) => setTranslateTo(e.target.value)} />
              {filteredTranslate.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </div>
          </div>
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
