'use client';

import axios, { AxiosError } from 'axios';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import Spinner from '@/app/components/spinner';

const defaultOptions = ['Mom', 'Dad', 'Boss', 'Wife', 'Clergy'];

export default function Try() {
  const [input, setInput] = useState('');
  const [authority, setAuthority] = useState('');
  const [translateInput, setTranslateInput] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [filteredTranslate, setFilteredTranslate] = useState(defaultOptions);
  const [prestige, setPrestige] = useState('');

  useEffect(() => {
    document?.addEventListener('click', (e) => {
      handleClick(e);
    });
    return () => {
      document?.removeEventListener('click', () => {});
    };
  });

  useEffect(() => {
    if (translateInput.length > 0) {
      const result = defaultOptions.filter((w) => w.toLowerCase().includes(translateInput.toLowerCase()));
      setFilteredTranslate(result);
    } else {
      setFilteredTranslate(defaultOptions);
    }
  }, [translateInput]);

  const handleClick = (e: MouseEvent): void => {
    const path = e.composedPath();
    const dropdown = path.includes(document.getElementById('dropdown') as Node);
    const input = path.includes(document.getElementById('input') as Node);
    if (input || dropdown) {
      setDropdownOpen(true);
    } else if (dropdownOpen && !dropdown) {
      setDropdownOpen(false);
      if (translateInput.length > 0) {
        setAuthority(translateInput);
      }
    } else {
      setDropdownOpen(false);
    }
  };

  const handleSubmit = async () => {
    if (input.length > 0) {
      try {
        setIsSubmitting(true);
        const { data } = await axios.post('http://127.0.0.1:5000/generate', { speaker: input, authority });
        setPrestige(data.message);
        setIsSubmitting(false);
      } catch (e) {
        const err = e as AxiosError;
        alert(err?.response?.data);
        setIsSubmitting(false);
      }
    }
  };
  const handleRowClick = (e: SetStateAction<string>) => {
    setAuthority(e);
    setTimeout(() => {
      setDropdownOpen(false);
    }, 50);
  };

  return (
    <div className='flex flex-col items-center h-full w-full'>
      <div className='flex items-center h-full w-full'>
        <div className='flex items-center flex-col w-1/2 min-h-[100px]'>
          <span className='text-xl'>How you talk to your friends</span>
          <input value={input} onChange={(e) => setInput(e.target.value)} className='border-2 rounded mt-4 px-2 h-[30px] hover:bg-gray-200 hover:border-pink-200' />
        </div>
        <div className='w-1/2 flex flex-col items-center min-h-[100px]'>
          {/* <span className='text-xl'>Translate to your wife</span> */}
          <div id='input' className='text-xl rounded w-60 relative bg-white '>
            <div className='px-2 text-center whitespace-nowrap cursor-pointer text-ellipsis overflow-hidden'>{authority || 'Who are you talking to?'}</div>
            <div id='dropdown' className='absolute rounded bg-white shadow-lg shadow-indigo-500/50 w-full' style={{ top: '25px', borderTop: 'none', borderTopRightRadius: '0', borderTopLeftRadius: '0', display: dropdownOpen ? 'block' : 'none' }}>
              <input value={translateInput} className='w-full border' style={{ borderLeft: '0', borderRight: '0' }} onChange={(e) => setTranslateInput(e.target.value)} />
              {filteredTranslate.map((e, i) => (
                <div className='hover:bg-gray-100 cursor-pointer' key={i} onClick={() => handleRowClick(e)}>
                  {e}
                </div>
              ))}
            </div>
          </div>
          <p className='mt-4 min-h-[30px]'>{prestige}</p>
        </div>
      </div>
      <div className='flex'>
        <button
          className='rounded-full bg-white px-4 py-2 mb-8 mr-4'
          onClick={() => {
            setAuthority('');
            setInput('');
            setPrestige('');
          }}
        >
          Reset
        </button>
        <button disabled={authority.length === 0 || input.length === 0} className='rounded-full bg-white px-4 py-2 mb-8 disabled:opacity-50 disabled:cursor-not-allowed min-w-[216px] flex justify-center' onClick={() => handleSubmit()}>
          {isSubmitting ? <Spinner /> : 'Rewrite with PrestigePal'}
        </button>
      </div>
    </div>
  );
}
