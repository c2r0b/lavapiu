const withNextIntl = require('next-intl/plugin')(
    './src/i18n/i18n.ts'
);
 
module.exports = withNextIntl({
  // Other Next.js configuration ...
});