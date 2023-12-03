import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n/config'
 
export default createMiddleware({
  locales,
  defaultLocale: 'it'
})
 
export const config = {
  matcher: ['/', '/(it)/:path*']
}