import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');

  // Check if hostname starts with www.
  if (hostname && hostname.startsWith('www.')) {
    const newHostname = hostname.replace(/^www\./, '');
    url.hostname = newHostname;
    return NextResponse.redirect(url, 301);
  }

  // Legacy WordPress Redirects
  // This catches old WP paths that might still be in Google's index
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith('/wp-') || 
    pathname.includes('index.php') || 
    pathname.includes('xmlrpc.php')
  ) {
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
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
