import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AuthLinks from './AuthLinks';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <div className="flex h-25 items-center justify-between">
      <div className="hidden flex-1 gap-2.5 lg:flex">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-1 text-left text-2xl font-bold md:text-left md:text-3xl lg:text-center xl:text-4xl">
        Amr Blog
      </div>
      <div className="flex flex-1 items-center justify-end gap-5 text-[20px] xl:gap-3.75 xl:text-[18px]">
        <ThemeToggle />
        <Link className="hidden sm:block" href={'/'}>
          Home
        </Link>
        <Link className="hidden sm:block" href={'/'}>
          Contact
        </Link>
        <Link className="hidden sm:block" href={'/'}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}
