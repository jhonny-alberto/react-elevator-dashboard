import { useEffect, useState } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import theme from './theme'
import { readString } from 'react-papaparse'
import './assets/scss/custom.scss'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    const abortController = new AbortController()

    fetch('data.csv')
      .then((r) => r.text())
      .then((text: any) => {
        const parsed: any = readString(text)
        setData(() => parsed.data)
      })

    return function cleanup() {
      abortController.abort()
    }
  }, [])

  return (
    // <Provider store={store}>
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path={'/'}>
            <Dashboard chartData={data || []} />
          </Route>
          <Route path={'/login'}>
            <Login />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
    // </Provider>
  )
}

export default App
