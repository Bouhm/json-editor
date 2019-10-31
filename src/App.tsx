import React, { useContext, useEffect } from 'react'
import { FelaComponent } from 'react-fela'

import Editor from './components/Editor'
import Sidebar from './components/Sidebar'
import { Store, reducer, initialState } from './components/Store'
import sampleData from './data.json'

const App: React.FC = () => {
  const [state, dispatch] = useContext(Store)

  useEffect(() => {
    dispatch({ type: 'SET_DATA', payload: sampleData })
  }, [])

  const style = {
    fontFamily: 'sans-serif',
    padding: '0.5em',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    color: 'white'
  }

  return (
    <div style={style}>
      <Sidebar />
      <Editor />
    </div>
  )
}

export default App
