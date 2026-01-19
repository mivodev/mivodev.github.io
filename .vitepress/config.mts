import { defineConfig } from 'vitepress'
import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { sidebarEn, sidebarId } from './config/sidebars'
import { navEn, navId } from './config/nav'

export default defineConfig({
  title: "MIVO",
  description: "Modern Mikrotik Voucher Management System",
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://mivodev.github.io'
  },
  buildEnd: ({ outDir }) => {
    const sitemap = createWriteStream(resolve(outDir, 'robots.txt'))
    sitemap.write('User-agent: *\n')
    sitemap.write('Allow: /\n')
    sitemap.write('Sitemap: https://mivodev.github.io/sitemap.xml\n')
    sitemap.end()
  },
  
  head: [
    ['link', { rel: 'icon', href: '/logo-m.svg' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'MIVO' }],
    ['meta', { property: 'og:image', content: 'https://mivodev.github.io/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://mivodev.github.io/og-image.png' }],
    ['meta', { name: 'twitter:site', content: '@dyzulkdev' }],
    ['meta', { name: 'google-site-verification', content: '4O3WAvbJ9_RwH-MmOznbAXnzTz_wEKzuIhmNjx3mXPs' }]
  ],

  transformHead: ({ pageData }) => {
    const title = pageData.title ? `${pageData.title} | MIVO` : 'MIVO'
    const description = pageData.description || "Modern Mikrotik Voucher Management System"
    const url = `https://mivodev.github.io/${pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2')}`

    return [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
    ]
  },

  // Shared theme config
  themeConfig: {
    logo: { 
      light: '/logo-m.svg', 
      dark: '/logo-m-dark.svg' 
    },
    siteTitle: 'MIVO',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dyzulk/mivo' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2026${new Date().getFullYear() > 2026 ? ' - ' + new Date().getFullYear() : ''} DyzulkDev`
    },

    search: {
      provider: 'local'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: navEn,
        sidebar: sidebarEn
      }
    },
    id: {
      label: 'Indonesia',
      lang: 'id',
      themeConfig: {
        nav: navId,
        sidebar: sidebarId
      }
    }
  }
})

