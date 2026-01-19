'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        className="w-25 cursor-pointer bg-red-800 p-3 text-white disabled:cursor-not-allowed disabled:bg-red-800/50"
        onClick={() => router.push(`?page=${page - 1}`, { scroll: false })}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="w-25 cursor-pointer bg-red-800 p-3 text-white disabled:cursor-not-allowed disabled:bg-red-800/50"
        onClick={() => router.push(`?page=${page + 1}`, { scroll: false })}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}
