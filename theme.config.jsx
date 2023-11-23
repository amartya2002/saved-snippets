import { useRouter } from 'next/router'

// import { ThemeSwitch } from './components/Theme-toggle';
export default {

  logo: <span>Entropy UI</span>,

  project: {
    link: "https://amartya2002.github.io/entropyui/",
  
  },



   navbar: {
    extraContent: (
      <p>hello</p>
      // <ThemeSwitch/>
    )
    },
  //   )
  // },

  // useNextSeoProps() {
  //   return {
  //     title : 'This is my title',
  //     titleTemplate : '%s | Next SEO'
  //   }
  // },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Entropy" />
      <meta property="og:description" content="Tailwind Component Library." />
    </>
  ),

  // primaryHue:{ dark: 20, light: 200 },
  // primarySaturation:{ dark: 50, light: 50 },

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Docs Template'
      }
    }
  },


  darkMode: true,

  sidebar: {
    toggleButton: true,
  },

  

  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
       
          Entropy UI
      </span>
    )
  },

  // gitTimestamp: true,
};
