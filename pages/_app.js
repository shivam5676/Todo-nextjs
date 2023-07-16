import '../styles/globals.css'
import StoreContextProvider from '../components/StoreContextProvider'
function MyApp({ Component, pageProps }) {
  return(
    <StoreContextProvider><Component {...pageProps} /></StoreContextProvider>
    
  ) 
}


export default MyApp
