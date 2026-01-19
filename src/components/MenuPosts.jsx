import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MenuPosts({ withImage }) {
  return (
    <div className="mt-9 mb-14 flex flex-col gap-9">
      <Link href={'/'} className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src={'/p1.jpeg'}
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex flex-4 flex-col gap-1">
          <span className="w-max rounded-xl bg-[#ff7857] px-2 py-1 text-sm text-white">Travel</span>
          <h3 className="text-softext text-lg leading-6 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-400"> - 12.28.2025</span>
          </div>
        </div>
      </Link>

      <Link href={'/'} className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src={'/p1.jpeg'}
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex flex-4 flex-col gap-1">
          <span className="w-max rounded-xl bg-[#ffb14f] px-2 py-1 text-sm text-white">
            Culture
          </span>
          <h3 className="text-softext text-lg leading-6 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-400"> - 12.28.2025</span>
          </div>
        </div>
      </Link>

      <Link href={'/'} className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src={'/p1.jpeg'}
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex flex-4 flex-col gap-1">
          <span className="w-max rounded-xl bg-[#7fb881] px-2 py-1 text-sm text-white">Food</span>
          <h3 className="text-softext text-lg leading-6 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-400"> - 12.28.2025</span>
          </div>
        </div>
      </Link>

      <Link href={'/'} className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src={'/p1.jpeg'}
              alt=""
              fill
              className="rounded-full border-2 border-gray-300 object-cover"
            />
          </div>
        )}
        <div className="flex flex-4 flex-col gap-1">
          <span className="w-max rounded-xl bg-[#ff7887] px-2 py-1 text-sm text-white">
            Fashion
          </span>
          <h3 className="text-softext text-lg leading-6 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-400"> - 12.28.2025</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
