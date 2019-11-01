import React, { useContext, useCallback } from 'react'
import Dropzone from '../tools/Dropzone'
import FieldBlock from './FieldBlock'
import { Store } from '../Store'

const Editor = () => {
  const [state, dispatch] = useContext(Store)

  const handleFileSelect = useCallback(acceptedFiles => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader()

      reader.onload = (file => (e: any) => {
        // Set data and filename in store
        let data = JSON.parse(e.target.result)
        dispatch({ type: 'SET_NAME', payload: file.name })
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

  return (
    <div style={style}>
      {!state.data ? (
        <Dropzone onDrop={handleFileSelect} accept='application/json' />
      ) : (
        Object.keys(state.data).map((key, i) => {
          const field = state.data[key]
          return (
            <FieldBlock
              key={i}
              name={key}
              parentKeys={[key]}
              parentLength={Object.keys(state.data).length}
              isArrayItem={Array.isArray(field)}
              isLastItem={Object.keys(state.data).length - 1 === i}
              showBorder={false}
              field={field}
            />
          )
        })
      )}
    </div>
  )
}

export default Editor
