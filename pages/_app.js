import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "./../components/theme-provider"

function MyApp({ Component, pageProps }) {
  return (
    
   
            <Component{...pageProps}/>
          
        
  )
}

export default MyApp