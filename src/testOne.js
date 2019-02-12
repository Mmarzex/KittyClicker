import React, { useContext, useEffect } from 'react'
// import { GlobalContext } from './globalState'
import useGlobalState from './useGlobalState'

export default props => {
  const mapStateToProps = (state, props) => ({
    vals: state.vals,
  })
  const { state, dispatch } = useGlobalState(mapStateToProps, props)
  const addVal = () => dispatch({ type: 'add:val', val: 'asf' })
  useEffect(() => {
    console.log('This component only has access to state.vals ', state)
  })
  return (
    <div>
      <button onClick={addVal}>AddVal</button>
      {state.vals.map((v, i) => (
        <p key={i}>{v}</p>
      ))}
    </div>
  )
}
