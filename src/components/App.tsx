import React, { useContext, useEffect } from 'react'
import { FelaComponent } from 'react-fela'

import Editor from './editor/Editor'
import Toolbar from './tools/Toolbar'
import { Store, reducer, initialState } from './Store'
import sampleData from '../data.json'

const App: React.FC = () => {
  const [state, dispatch] = useContext(Store)

  useEffect(() => {
    dispatch({ type: 'SET_DATA', payload: sampleData })
  }, [])

  const style = {
    fontFamily: 'Consolas,monaco,monospace',
    display: 'flex',
    flexFlow: 'column',
    padding: '0.5em',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    color: 'white'
  }

  return (
    <div style={style}>
      <Editor />
      <Toolbar />
    </div>
  )
}

export default App