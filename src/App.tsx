import React, { useState, useEffect } from 'react'
import { FelaComponent } from 'react-fela'

import Editor from './components/Editor'
import Sidebar from './components/Sidebar'
import sampleData from './data.json'

const App: React.FC = () => {
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
    <FelaComponent style={style}>
      <Sidebar />
      <Editor data={sampleData} />
    </FelaComponent>
  )
}

export default App
