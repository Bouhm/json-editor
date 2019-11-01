import React, { useContext, useCallback } from 'react'
import Dropzone from '../tools/Dropzone'
import FieldBlock from './FieldBlock'
import { Store } from '../Store'

const Editor = (props: any) => {
  const [state, dispatch] = useContext(Store)

  const handleFileSelect = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    // Loop through accepted files
    acceptedFiles.map((file: Blob) => {
      // Initialize FileReader browser API
      const reader = new FileReader()
      // onload callback gets called after the reader reads the file data
      reader.onload = (file => (e: any) => {
        let data = JSON.parse(e.target.result)
        dispatch({ type: 'CHANGE_DATA', payload: data })
      })(file)

      reader.readAsText(file)
    })
  }, [])

  const style = {
    padding: '1em',
    width: '50%',
    minWidth: '30em',
    flex: '1 1 auto',
    overflow: 'auto',
    backgroundColor: '#1e1e1e',
    boxShadow: 'inset 0 0 5px #101010',
    borderRadius: '5px',
    fontSize: '16px',
    scrollbarColor: '#2e2e2e #1e1e1e'
  }

  const keys = Object.keys(state.data)

  return (
    <div style={style}>
      <Dropzone onDrop={handleFileSelect} accept='application/json' />
      {keys.map((key, i) => {
        const field = state.data[key]
        return (
          <FieldBlock
            key={i}
            name={key}
            parentKeys={[key]}
            parentLength={keys.length}
            isArrayItem={Array.isArray(field)}
            isLastItem={keys.length - 1 === i}
            showBorder={false}
            field={field}
          />
        )
      })}
    </div>
  )
}

export default Editor
