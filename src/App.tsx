import React, { useState, useEffect } from 'react'
import Editor from './components/Editor'
import sampleData from './data.json'

const App: React.FC = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    setData(sampleData)
  }, [])

  return (
    <div className='App'>
      <Editor data={data} />
    </div>
  )
}

export default App
