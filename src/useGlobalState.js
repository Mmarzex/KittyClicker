import React, { useContext } from 'react'
import { GlobalContext } from './globalState'

export default (mapState, props) => {
  let { state, dispatch } = useContext(GlobalContext)
  state = mapState(state, props)
  return { state, dispatch }
}
