import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import TestOne from './testOne'
import { GlobalContext, GlobalContextProvider } from './globalState'
import './styles.css'

function App() {
  const { state, dispatch } = useContext(GlobalContext)
  const { vals } = state
  useEffect(() => {
    console.log('state change')
    console.log(state.vals)
  })
  return (
    <React.Fragment>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <TestOne />
      </div>
    </React.Fragment>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  rootElement
)
