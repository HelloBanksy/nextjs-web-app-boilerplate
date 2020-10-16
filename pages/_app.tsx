import React from 'react'
import type { AppProps } from 'next/app'
import Theme from '../theme'
import BasicLayout from '../layout/Basic'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../store/reducers'
import rootSaga from '../sagas'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Web app boilerplate</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="preload"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Provider store={store}>
        <Theme>
          <BasicLayout>
            <Component {...pageProps} />
          </BasicLayout>
        </Theme>
      </Provider>
    </>
  )
}

export default MyApp
