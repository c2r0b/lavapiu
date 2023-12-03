const withNextIntl = require('next-intl/plugin')(
    './src/i18n/i18n.ts'
)

const withPWA = require('next-pwa')({
    dest: 'public'
})

module.exports = withPWA(withNextIntl({
  // Other Next.js configuration ...
}))