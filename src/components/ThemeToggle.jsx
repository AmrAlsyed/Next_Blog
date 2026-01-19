'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={`relative flex h-5 w-10 cursor-pointer items-center justify-between rounded-[50px] ${theme === 'light' ? ' bg-[#0f172a]' : ' bg-white'} `}
      onClick={toggle}
    >
      <Image src={'/moon.png'} alt="" width={14} height={14} />
      <div
        className={`absolute ${theme === 'light' ? 'right-px bg-white' : 'left-px bg-[#0f172a]'} h-4 w-4 rounded-[50%] transition-all duration-200`}
      ></div>
      <Image src={'/sun.png'} alt="" width={14} height={14} />
    </div>
  );
}
