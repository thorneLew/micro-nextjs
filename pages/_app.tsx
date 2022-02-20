import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Micro from '../components/Micro'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Component {...pageProps} />
    <Micro />
  </div> 
}

export default MyApp
