'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import { storage } from '@/utils/appwrite';
import { ID } from 'appwrite';
import 'react-quill-new/dist/quill.bubble.css';

export default function Page() {
  const { status } = useSession();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);
  const [catSlug, setCatSlug] = useState('');

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  // Upload image when file changes
  useEffect(() => {
    if (!file) return;

    const uploadImage = async () => {
      try {
        setUploading(true);

        const uploaded = await storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
          ID.unique(),
          file,
        );

        const url = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID}/files/${uploaded.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;

        setImageUrl(url);
      } catch (err) {
        console.error('Upload failed:', err);
      } finally {
        setUploading(false);
        setFile(null);
      }
    };

    uploadImage();
  }, [file]);

  if (status === 'loading') return null;

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc: value,
        img: imageUrl,
        slug: slugify(title),
        catSlug: catSlug || 'style', // default category
      }),
    });

    if (res.ok) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div>
      {/* TITLE */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-12.5 text-6xl outline-none placeholder:text-[#b3b3b1]"
      />

      {/* CATEGORY SELECT */}
      <select
        value={catSlug}
        onChange={(e) => setCatSlug(e.target.value)}
        className="mx-12.5 mt-4 w-60 rounded-md border border-gray-300 p-2"
      >
        <option value="">Select category</option>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>

      {/* IMAGE PREVIEW */}
      {imageUrl && (
        <div className="relative mx-12.5 mt-6 h-96">
          <Image
            src={imageUrl}
            alt="Post cover"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      )}

      {uploading && <p className="mx-12.5 mt-2 text-sm text-gray-400">Uploading image...</p>}

      {/* EDITOR */}
      <div className="relative mt-10 flex h-175 gap-5">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="border-text flex h-9 w-9 items-center justify-center rounded-full border"
        >
          <Image src="/plus.png" alt="add" width={16} height={16} />
        </button>

        {open && (
          <div className="bg-bg absolute left-12.5 z-50 flex w-full gap-5">
            <input
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                setFile(e.target.files?.[0] || null);
                setOpen(false);
              }}
            />

            <label
              htmlFor="image"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#1a8917]"
            >
              <Image src="/image.png" alt="image" width={16} height={16} />
            </label>

            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a8917]">
              <Image src="/external.png" alt="external" width={16} height={16} />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a8917]">
              <Image src="/video.png" alt="video" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>

      {/* PUBLISH */}
      <button
        className="btn absolute top-8 right-5 bg-[#1a8917] text-white disabled:opacity-50"
        disabled={uploading}
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
}
