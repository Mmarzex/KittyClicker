import React, { createContext, useReducer } from 'react'

const GlobalContext = createContext()

const initialState = {
  vals: [],
  valsTwo: ['one', 'two'],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add:val':
      return { ...state, vals: [...state.vals, action.val] }
    default:
      return state
  }
}

const GlobalContextProvider = props => {
  console.log(props)
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  )
}

const GlobalContextConsumer = GlobalContext.Consumer

export { GlobalContext, GlobalContextConsumer, GlobalContextProvider }
