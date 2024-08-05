import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/graphql'],
};

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(
    new URL(`${process.env.API_URL}${request.nextUrl.pathname}${request.nextUrl.search}`),
    { request }
  );
}
