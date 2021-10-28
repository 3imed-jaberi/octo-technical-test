import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'

import { store } from '../store'
import { routesConfig } from './config'
import Loader from './Loader'
import Layout from './Layout'
import ThemeWrapper from './Theme'
import FullScreenProgress from '../pages/FullScreenProgress'

function MainApp() {
  return (
    <ThemeWrapper>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<FullScreenProgress />}>
            <Layout>
              <Switch>
                <Loader routes={routesConfig.public} />
              </Switch>
            </Layout>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </ThemeWrapper>
  )
}

export default MainApp
