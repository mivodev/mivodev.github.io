import { DefaultTheme } from 'vitepress'

export const navEn: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/docs/guide/installation' },
  { text: 'Manual', link: '/docs/manual/' },
  { text: 'Plugins', link: '/plugins/' },
  { text: 'Releases', link: '/releases/' },
  { 
    text: 'Community', 
    items: [
      { text: 'Changelog', link: 'https://github.com/mivodev/mivo/releases' },
      { text: 'Contributing', link: 'https://github.com/mivodev/mivo/blob/main/CONTRIBUTING.md' },
      { text: 'Forum (Discussions)', link: 'https://github.com/mivodev/mivo/discussions' },
      { text: 'Star on GitHub', link: 'https://github.com/mivodev/mivo/stargazers' }
    ]
  }
]

export const navId: DefaultTheme.NavItem[] = [
  { text: 'Beranda', link: '/id/' },
  { text: 'Panduan', link: '/id/docs/guide/installation' },
  { text: 'Buku Manual', link: '/id/docs/manual/' },
  { text: 'Plugin', link: '/id/plugins/' },
  { text: 'Rilis', link: '/id/releases/' },
  { 
    text: 'Komunitas', 
    items: [
      { text: 'Catatan Rilis', link: 'https://github.com/mivodev/mivo/releases' },
      { text: 'Kontribusi', link: 'https://github.com/mivodev/mivo/blob/main/CONTRIBUTING.md' },
      { text: 'Forum (Diskusi)', link: 'https://github.com/mivodev/mivo/discussions' },
      { text: 'Beri Bintang', link: 'https://github.com/mivodev/mivo/stargazers' }
    ]
  }
]
