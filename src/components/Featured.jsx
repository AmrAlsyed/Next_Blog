import Image from 'next/image';
import React from 'react';

export default function Featured() {
  return (
    <div className="mt-12">
      <h1 className="text-2xl sm:text-4xl md:text-6xl">
        <b>Hey, Amr Elsyed here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-15 grid grid-cols-1 items-center gap-12.5 lg:grid-cols-2">
        <div className="relative h-125 flex-1">
          <Image className="object-cover" src={'/p1.jpeg'} alt="" fill />
        </div>
        <div className="flex flex-1 flex-col items-center gap-5">
          <h1 className="text-3xl sm:text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-softext text-xl font-light sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aut vitae
            excepturi veritatis pariatur, quae quia voluptatibus natus ipsam hic voluptatem, eos,
            odio sed voluptates iure magnam fugiat. Deserunt!
          </p>
          <button className="btn w-max">Read More</button>
        </div>
      </div>
    </div>
  );
}
