import { NextResponse, type NextRequest } from 'next/server';

const SITE_URL = 'https://www.keningfordpartners.com';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const { pathname, search } = request.nextUrl;

  // The production *.vercel.app alias serves the same content; send it to the real domain.
  if (process.env.VERCEL_ENV === 'production' && host.endsWith('.vercel.app')) {
    return NextResponse.redirect(`${SITE_URL}${pathname}${search}`, 308);
  }

  const response = NextResponse.next();
  response.headers.set('Link', `<${SITE_URL}${pathname === '/' ? '' : pathname}>; rel="canonical"`);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
};
