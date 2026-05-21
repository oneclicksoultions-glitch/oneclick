import { NextResponse } from 'next/server';

export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: 'https://oneclicksoultions.com.au/api/contact',
        'service-doc': [{ href: 'https://oneclicksoultions.com.au/contact/' }],
      },
    ],
  };

  return new NextResponse(JSON.stringify(catalog), {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
