import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MenuPosts from './MenuPosts';
import MenuCategories from './MenuCategories';

export default function Menu() {
  return (
    <div className="mt-15 hidden flex-2 lg:block">
      <h2 className="text-lg font-medium text-gray-500">{"What's hot"}</h2>
      <h1 className="text-2xl">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="text-lg font-medium text-gray-500">Discover by topic</h2>
      <h1 className="text-2xl">Categories</h1>

      <MenuCategories />
      <h2 className="text-lg font-medium text-gray-500">Chosen by the editor</h2>
      <h1 className="text-2xl">Editors Pick</h1>

      <MenuPosts withImage={true} />
    </div>
  );
}
