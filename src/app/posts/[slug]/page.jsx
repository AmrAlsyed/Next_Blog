import React from 'react';
import Menu from '../../../components/Menu';
import Image from 'next/image';
import Comments from '../../../components/Comments';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed ');
  }

  return res.json();
};

export default async function page({ params }) {
  const { slug } = await params;
  const data = await getData(slug);
  console.log(data);

  return (
    <div>
      <div className="flex items-center gap-12.5">
        <div className="flex-1">
          <h1 className="mb-12.5 text-4xl sm:text-5xl md:text-6xl">{data?.title}</h1>
          <div className="flex items-center gap-5">
            {data?.user?.image && (
              <div className="relative h-12.5 w-12.5">
                <Image src={data?.user?.image} alt="" fill className="rounded-full object-cover" />
              </div>
            )}
            <div className="text-softext flex flex-col gap-1.5">
              <span className="text-xl font-medium">{data?.user.name}</span>
              <span>{data.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="relative hidden h-85 flex-1 md:block">
            <Image src={data.img} alt="" fill className="rounded-2xl object-cover" />
          </div>
        )}
      </div>

      <div className="grid min-h-screen grid-cols-1 gap-24 lg:grid-cols-[1fr_350px]">
        <div className="mt-16">
          <div dangerouslySetInnerHTML={{ __html: data?.desc }} />

          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
