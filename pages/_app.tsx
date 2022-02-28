import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Micro from '../components/Micro'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
    <Micro />
  </Layout> 
}

export default MyApp
