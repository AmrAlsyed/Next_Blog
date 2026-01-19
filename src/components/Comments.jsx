'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

export default function Comments({ postSlug }) {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher,
  );

  const [desc, setDesc] = useState('');

  const handleSumbit = async () => {
    await fetch('http://localhost:3000/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc('');
  };
  return (
    <div className="mt-12.5">
      <h1 className="text-softext mb-8 text-2xl font-bold">Comments</h1>
      {status === 'authenticated' ? (
        <div className="mb-2.5 flex flex-col items-center justify-between gap-8 sm:flex-row">
          <textarea
            className="w-full resize-none rounded-lg border border-gray-300 p-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="write a comment..."
            rows="4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="w-full cursor-pointer rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:w-max"
            onClick={handleSumbit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href={'/login'}>Login to write a comment</Link>
      )}
      {isLoading ? (
        <p className="mt-3.5">Loading...</p>
      ) : (
        <div className="flex flex-col-reverse">
          {data?.map((item) => (
            <div className="mt-12.5" key={item.id}>
              <div className="mb-6.5">
                <div className="mb-5 flex items-center gap-5">
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      className="h-12.5 w-12.5 rounded-full object-cover"
                      width={50}
                      height={50}
                    />
                  )}
                  <div className="text-softext flex flex-col gap-1.5">
                    <span className="font-medium">{item.user.name}</span>
                    <span className="text-[12px]">{item.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
                <p className="text-lg font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
