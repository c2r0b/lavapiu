import createIntlMiddleware from 'next-intl/middleware';
import { locales } from './i18n/config'
import { NextRequest } from 'next/server';

export function middleware(request:any) {
  const defaultLocale = request.headers.get('x-default-locale') || 'it';

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' http: https:;
    style-src 'self' 'nonce-${nonce}' 'unsafe-hashes';
`
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
  
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale
  });

  request = new NextRequest(request, { headers: requestHeaders })
  const response = handleI18nRouting(request);
  
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
  response.headers.set(
    'x-default-locale',
    defaultLocale
  )

  return response
}
 
export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ]
}