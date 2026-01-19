'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Page() {
  const { data, status } = useSession();
  console.log(data, status);
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') return null;

  return (
    <div className="mt-15 flex items-center justify-center">
      <div className="bg-softbg flex flex-col gap-12.5 rounded-2xl p-7 sm:p-8 md:p-25">
        <div
          className="flex cursor-pointer items-center justify-center rounded-[5px] border-none bg-[#ff555f] p-5 font-bold text-white"
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </div>
        <div className="flex cursor-pointer items-center justify-center rounded-[5px] border-none bg-[#111] p-5 font-bold text-white">
          Sign in with Github
        </div>
        <div className="flex cursor-pointer items-center justify-center rounded-[5px] border-none bg-[#087bea] p-5 font-bold text-white">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
}
