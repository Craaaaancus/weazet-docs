import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Weazet docs',
  description: 'A VitePress Site',
  srcDir: 'src',
  base: '/weazet-docs/docs',
  cleanUrls: true,
  outDir: '../../docs',
  themeConfig: {
    logo: {
      dark: 'https://ik.imagekit.io/79xdah2uoq/logo/weazet_logo_dark_8dGFkGvMD61.png',
      light: 'https://ik.imagekit.io/79xdah2uoq/logo/weazet_logo_light_GBXjBVOihJ6.png'
    },
    siteTitle: false,
    i18nRouting: true,
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'Games',
            link: '/games',
            items: [
              { text: 'MoonLander', link: '/moonlander' }
            ]
          }
        ],
    
        sidebar: [
          {
            text: 'Games',
            link: '/games',
            items: [
              { text: 'MoonLander', link: '/moonlander' },
            ]
          }
        ],
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
        nav: [
          { text: 'Главная страница', link: '.' },
          { text: 'Игры',
            link: './games',
            items: [
              { text: 'Посадка на луну', link: './moonlander' }
            ]
          }
        ],
    
        sidebar: [
          {
            text: 'Игры',
            link: './games',
            items: [
              { text: 'Посадка на луну', link: './moonlander' },
            ]
          }
        ],
      }
    },
    by: {
      label: 'Беларускі',
      lang: 'by',
      themeConfig: {
        nav: [
          { text: 'Галоўная старонка', link: './' },
          { text: 'Гульні',
            link: './games',
            items: [
              { text: 'Пасадка на месяц', link: './moonlander' }
            ]
          }
        ],
    
        sidebar:
        [
          {
            text: 'Гульні',
            link: './games',
            items: [
              { text: 'Пасадка на месяц', link: './moonlander' },
            ]
          }
        ],
      }
    },
  },
})
