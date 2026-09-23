export const navigation = [
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Configuration', href: '/docs/configuration' },
      { title: 'Permissions', href: '/docs/permissions' },
    ],
  },
  {
    title: 'Trigger Framework',
    links: [
      { title: 'Overview', href: '/docs/trigger-framework' },
      {
        title: 'Creating a pipeline',
        href: '/docs/trigger-framework/pipeline',
      },
      {
        title: 'Creating a handler',
        href: '/docs/trigger-framework/handler',
      },
      {
        title: 'DML utility',
        href: '/docs/trigger-framework/dml-utility',
      },
    ],
  },
  {
    title: 'Error Logger',
    links: [{ title: 'Overview & usage', href: '/docs/error-logger' }],
  },
  {
    title: 'Flow Templates',
    links: [{ title: 'Overview', href: '/docs/flow-templates' }],
  },
  {
    title: 'Examples',
    links: [
      {
        title: 'Trigger pipeline (Account)',
        href: '/docs/examples/trigger-pipeline',
      },
      { title: 'Error logger', href: '/docs/examples/error-logger' },
    ],
  },
  {
    title: 'Contributing',
    links: [
      { title: 'How to contribute', href: '/docs/how-to-contribute' },
      { title: 'Change log', href: '/docs/change-log' },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Apex class reference',
        href: 'https://github.com/chiefpansancolt/salesforce-automation-framework/tree/main/documentation',
      },
      {
        title: 'License',
        href: 'https://github.com/chiefpansancolt/salesforce-automation-framework/blob/main/LICENSE',
      },
    ],
  },
]

// NOTE: src/app/sitemap.ts and src/app/robots.ts read this file directly to
// generate the sitemap and to build search-page metadata. Add every new
// internal doc page here (an `href` starting with "/") and it's picked up
// automatically. External links (http/https) are ignored by the sitemap.
