import '../styles/globals.scss'

import Layout from '../components/Layout/Layout'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
          <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
