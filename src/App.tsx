import React, { useState, useEffect } from 'react'
import Editor from './components/Editor'
import { FelaComponent } from 'react-fela'
import sampleData from './data.json'

const App: React.FC = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    setData(sampleData)
  }, [])

  const style = {
    backgroundColor: '#252526',
    maxWidth: '100vw',
    maxHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    color: 'white'
  }

  return (
    <FelaComponent style={style}>
      <Editor data={data} />
    </FelaComponent>
  )
}

export default App
