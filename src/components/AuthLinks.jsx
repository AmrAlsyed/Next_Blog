'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function AuthLinks() {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link className="hidden sm:block" href={'/login'}>
          Login
        </Link>
      ) : (
        <>
          <Link className="hidden sm:block" href={'/write'}>
            Write
          </Link>
          <span className="cursor-pointer" onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div
        className="flex h-4 w-5 cursor-pointer flex-col justify-between sm:hidden"
        onClick={() => setOpen(!open)}
      >
        <div className="bg-text h-0.5 w-full"></div>
        <div className="bg-text h-0.5 w-full"></div>
        <div className="bg-text h-0.5 w-full"></div>
      </div>

      {open && (
        <div className="bg-bg absolute top-25 left-0 flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center gap-12.5 text-4xl">
          <Link className="sm:hidden" href={'/'}>
            Home
          </Link>
          <Link className="sm:hidden" href={'/'}>
            Contact
          </Link>
          <Link className="sm:hidden" href={'/'}>
            About
          </Link>
          {status === 'notAuthenticated' ? (
            <Link href={'/login'}>Login</Link>
          ) : (
            <>
              <Link href={'/write'}>Write</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
