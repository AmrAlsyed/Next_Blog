import React from 'react';
import CardList from '../../components/CardList';
import Menu from '../../components/Menu';

export default async function page({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const { cat } = params;

  return (
    <div>
      <h1 className="bg-amber-500 px-2.5 py-1.5 text-center text-2xl font-bold text-white capitalize">
        {cat} Blog
      </h1>
      <div className="grid min-h-screen grid-cols-1 gap-24 lg:grid-cols-[1fr_350px]">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
}
