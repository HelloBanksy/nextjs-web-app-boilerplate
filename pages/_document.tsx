import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getColorModeInitScriptElement } from '@xstyled/styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="preload"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          {getColorModeInitScriptElement()}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
