import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');
  const protocol = request.headers.get('x-forwarded-proto') || 'http';

  // Force HTTPS and non-www
  let changed = false;

  // 1. Redirect HTTP to HTTPS
  if (protocol === 'http' && process.env.NODE_ENV === 'production') {
    url.protocol = 'https:';
    changed = true;
  }

  // 2. Redirect www to non-www
  if (hostname && hostname.startsWith('www.')) {
    const newHostname = hostname.replace(/^www\./, '');
    url.hostname = newHostname;
    changed = true;
  }

  if (changed) {
    const response = NextResponse.redirect(url, 301);
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    return response;
  }

  // Legacy WordPress Redirects
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith('/wp-') || 
    pathname.includes('index.php') || 
    pathname.includes('xmlrpc.php')
  ) {
    url.pathname = '/';
    const response = NextResponse.redirect(url, 301);
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    return response;
  }
  
  const response = NextResponse.next();
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  return response;
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
