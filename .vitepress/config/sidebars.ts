import { DefaultTheme } from 'vitepress'

// English Sidebars
export const sidebarEn: DefaultTheme.Sidebar = {
  // Sidebar for /docs/guide/ path
  '/docs/guide/': [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/docs/guide/' },
        { text: 'Requirements', link: '/docs/guide/installation#requirements' }
      ]
    },
    {
      text: 'Installation',
      collapsed: false,
      items: [
        { text: 'Docker', link: '/docs/guide/docker' },
        { text: 'aaPanel (Docker)', link: '/docs/guide/docker-aapanel' },
        { text: 'Web Server', link: '/docs/guide/installation#web-servers' },
        { text: 'Shared Hosting', link: '/docs/guide/installation#shared-hosting' },
        { text: 'VPS & Cloud', link: '/docs/guide/installation#vps-cloud' },
        { text: 'Mobile & STB', link: '/docs/guide/installation#mobile-stb' }
      ]
    },
    {
      text: 'Configuration',
      items: [
        { text: 'Post-Installation', link: '/docs/guide/installation#post-installation' }
      ]
    },
    {
      text: 'Support',
      items: [
        { text: 'Contribution', link: 'https://github.com/dyzulk/mivo/blob/main/CONTRIBUTING.md' },
        { text: 'Donate', link: 'https://sociabuzz.com/dyzulkdev/tribe' }
      ]
    },
    {
      text: 'Development',
      items: [
        { text: 'Creating Plugins', link: '/docs/guide/plugin-development' }
      ]
    }
  ],

  // Sidebar for /docs/manual/ path
  '/docs/manual/': [
    {
      text: 'User Manual',
      items: [
        { text: 'Overview', link: '/docs/manual/' }
      ]
    },
    {
      text: 'Global Settings',
      items: [
        { text: 'Introduction', link: '/docs/manual/settings/' },
        { text: 'Plugins', link: '/docs/manual/settings/plugins' },
        { text: 'Routers', link: '/docs/manual/settings/routers' },
        { text: 'Templates', link: '/docs/manual/settings/templates' },
        { text: 'Logos', link: '/docs/manual/settings/logos' },
        { text: 'API & CORS', link: '/docs/manual/settings/api-cors' },
        { text: 'System', link: '/docs/manual/settings/system' }
      ]
    },
    {
      text: 'Router Operations',
      items: [
        { text: 'Introduction', link: '/docs/manual/router/' },
        { text: 'Dashboard', link: '/docs/manual/router/dashboard' },
        { text: 'Quick Print', link: '/docs/manual/router/quick-print' },
        { text: 'Hotspot Management', link: '/docs/manual/router/hotspot' },
        { text: 'Reports & Logs', link: '/docs/manual/router/reports' },
        { text: 'Network & System', link: '/docs/manual/router/tools' }
      ]
    }
  ]
}

// Indonesian Sidebars
export const sidebarId: DefaultTheme.Sidebar = {
  // Sidebar for /id/docs/guide/ path
  '/id/docs/guide/': [
    {
      text: 'Pengenalan',
      collapsed: false,
      items: [
        { text: 'Apa itu MIVO?', link: '/id/docs/guide/' },
        { text: 'Persyaratan', link: '/id/docs/guide/installation#persyaratan' }
      ]
    },
    {
      text: 'Instalasi',
      collapsed: false,
      items: [
        { text: 'Docker', link: '/id/docs/guide/docker' },
        { text: 'aaPanel (Docker)', link: '/id/docs/guide/docker-aapanel' },
        { text: 'Web Server', link: '/id/docs/guide/installation#web-server' },
        { text: 'Shared Hosting', link: '/id/docs/guide/installation#shared-hosting' },
        { text: 'VPS & Cloud', link: '/id/docs/guide/installation#vps-cloud' },
        { text: 'Mobile & STB', link: '/id/docs/guide/installation#mobile-stb' }
      ]
    },
    {
      text: 'Konfigurasi',
      items: [
        { text: 'Pasca-Instalasi', link: '/id/docs/guide/installation#pasca-instalasi' }
      ]
    },
    {
      text: 'Dukungan',
      items: [
        { text: 'Kontribusi', link: 'https://github.com/dyzulk/mivo/blob/main/CONTRIBUTING.md' },
        { text: 'Donasi', link: 'https://sociabuzz.com/dyzulkdev/tribe' }
      ]
    },
    {
      text: 'Pengembangan',
      items: [
        { text: 'Membuat Plugin', link: '/id/docs/guide/plugin-development' }
      ]
    }
  ],


  // Sidebar for /id/docs/manual/ path
  '/id/docs/manual/': [
    {
      text: 'Buku Manual',
      items: [
        { text: 'Ringkasan', link: '/id/docs/manual/' }
      ]
    },
    {
      text: 'Pengaturan Global',
      items: [
        { text: 'Pendahuluan', link: '/id/docs/manual/settings/' },
        { text: 'Plugins', link: '/id/docs/manual/settings/plugins' },
        { text: 'Router', link: '/id/docs/manual/settings/routers' },
        { text: 'Template', link: '/id/docs/manual/settings/templates' },
        { text: 'Logo', link: '/id/docs/manual/settings/logos' },
        { text: 'API & CORS', link: '/id/docs/manual/settings/api-cors' },
        { text: 'Sistem', link: '/id/docs/manual/settings/system' }
      ]
    },
    {
      text: 'Operasional Router',
      items: [
        { text: 'Pendahuluan', link: '/id/docs/manual/router/' },
        { text: 'Dashboard', link: '/id/docs/manual/router/dashboard' },
        { text: 'Cetak Cepat', link: '/id/docs/manual/router/quick-print' },
        { text: 'Manajemen Hotspot', link: '/id/docs/manual/router/hotspot' },
        { text: 'Laporan & Log', link: '/id/docs/manual/router/reports' },
        { text: 'Jaringan & Sistem', link: '/id/docs/manual/router/tools' }
      ]
    }
  ]
}
