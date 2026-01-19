import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Card({ item }) {
  return (
    <div className="mb-12.5 grid grid-cols-1 items-center gap-12.5 xl:grid-cols-2">
      <div className="relative h-87 flex-1">
        {item.img && <Image className="object-cover" src={item.img} alt="" fill />}
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <span className="text-gray-500">{item.createdAt.substring(0, 10)} - </span>
          <span className="font-semibold text-red-800">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className="text-3xl font-bold sm:text-3xl">{item.title}</h1>
        </Link>
        <p className="text-softext text-xl font-light">{item.desc.substring(0, 60)}...</p>
        <Link
          className="text-softext w-max border-b border-b-red-800 py-0.5 font-bold"
          href={`/posts/${item.slug}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
