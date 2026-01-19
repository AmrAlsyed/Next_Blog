import Link from 'next/link';
import React from 'react';

export default function MenuCategories() {
  return (
    <div className="mt-9 mb-14 grid grid-cols-1 justify-between gap-7 sm:grid-cols-3">
      <Link
        className={`flex h-12 items-center justify-center rounded-[10px] bg-[#57c4ff31] capitalize`}
        href={'/blog?cat=style'}
      >
        Style
      </Link>
      <Link
        className={`flex h-12 items-center justify-center rounded-[10px] bg-[#da85c731] capitalize`}
        href={'/blog?cat=fashion'}
      >
        Fashion
      </Link>
      <Link
        className={`flex h-12 items-center justify-center rounded-[10px] bg-[#7fb88133] capitalize`}
        href={'/blog?cat=food'}
      >
        Food
      </Link>
      <Link
        className={`flex h-12 items-center justify-center rounded-[10px] bg-[#ff795736] capitalize`}
        href={'/blog?cat=travel'}
      >
        Travel
      </Link>
      <Link
        className={`flex h-12 items-center justify-center rounded-[10px] bg-[#ffb04f45] capitalize`}
        href={'/blog?cat=culture'}
      >
        Culture
      </Link>
      <Link
        className={`flex h-12 items-center justify-center rounded-[10px] bg-[#5e4fff31] capitalize`}
        href={'/blog?cat=coding'}
      >
        Coding
      </Link>
    </div>
  );
}
