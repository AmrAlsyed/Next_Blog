import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="text-softext mt-12.5 grid grid-cols-1 items-center justify-between gap-6 py-6 md:grid-cols-[1fr_auto]">
      <div className="flex flex-1 flex-col items-center gap-3.5 md:items-start">
        <div className="flex items-center gap-2.5">
          <Image
            src={'https://avatars.githubusercontent.com/u/52009792?v=4'}
            className="rounded-full"
            alt=""
            width={40}
            height={40}
          />
          <h1 className="text-2xl">Amr Blog</h1>
        </div>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, dolorem aspernatur
          odit soluta nesciunt dolorum id commodi sapiente, reprehenderit, expedita quasi totam
          neque. Molestiae dicta pariatur neque quis quibusdam quia.
        </p>
        <div className="mt-2.5 flex gap-2.5">
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className="flex flex-1 justify-center gap-25 md:justify-end">
        <div className="flex flex-col gap-1 font-light">
          <span className="font-bold">Links</span>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Blog</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Contact</Link>
        </div>
        <div className="flex flex-col gap-1 font-light">
          <span className="font-bold">Tags</span>
          <Link href={'/'}>Style</Link>
          <Link href={'/'}>Fashion</Link>
          <Link href={'/'}>Coding</Link>
          <Link href={'/'}>Travel</Link>
        </div>
        <div className="flex flex-col gap-1 font-light">
          <span className="font-bold">Social</span>
          <Link href={'/'}>Facebook</Link>
          <Link href={'/'}>Instagram</Link>
          <Link href={'/'}>Tiktok</Link>
          <Link href={'/'}>Youtube</Link>
        </div>
      </div>
    </div>
  );
}
