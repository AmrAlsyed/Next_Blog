import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed ');
  }

  return res.json();
};

export default async function CategoryList() {
  const data = await getData();
  return (
    <div>
      <h1 className="my-12.5 text-center text-xl font-bold sm:text-left sm:text-3xl">
        Popular Categories
      </h1>
      <div className="grid grid-cols-1 justify-between gap-5 sm:grid-cols-2 md:grid-cols-6">
        {data.map((item) => (
          <Link
            className={`flex h-20 items-center justify-center gap-2.5 rounded-[10px] ${item.title} capitalize`}
            href={'/blog?cat=style'}
            key={item.id}
          >
            {item.img && (
              <Image
                className="h-8 w-8 rounded-full"
                src={item.img}
                alt=""
                width={32}
                height={32}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
