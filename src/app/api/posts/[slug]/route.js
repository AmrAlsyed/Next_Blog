import { NextResponse } from 'next/server';
import prisma from '../../../../utils/connect';

// GET /api/posts/[slug]
export async function GET(req, { params }) {
  const { slug } = await params;

  if (!slug) {
    return new NextResponse(JSON.stringify({ message: 'Missing slug' }), { status: 400 });
  }

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), { status: 500 });
  }
}
