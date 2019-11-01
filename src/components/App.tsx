import React, { useContext, useEffect } from 'react'

import Editor from './editor/Editor'
import { Store } from './Store'
import Toolbar from './tools/Toolbar'

const App: React.FC = () => {
  const [state, dispatch] = useContext(Store)

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
      {state.data && <Toolbar />}
    </div>
  )
}

export default App
