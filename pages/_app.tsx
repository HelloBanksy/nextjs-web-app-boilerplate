import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import Theme from '../theme'
import BasicLayout from '../layout/Basic'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Gastro App</title>
      </Head>
      <Theme>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </Theme>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
