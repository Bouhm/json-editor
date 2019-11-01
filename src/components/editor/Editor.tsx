import React, { useState, useContext, useCallback } from 'react'
import Dropzone from '../tools/Dropzone'
import FieldBlock from './FieldBlock'
import { Store } from '../Store'

const Editor = () => {
  const [state, dispatch] = useContext(Store)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState('')

  const handleFileSelect = useCallback(acceptedFiles => {
    setErrors('')
    setIsLoading(true)

    acceptedFiles.map((file: any) => {
      const reader = new FileReader()

      reader.onload = (file => (e: any) => {
        try {
          // Set data and filename in store
          let data = JSON.parse(e.target.result)
          dispatch({ type: 'SET_NAME', payload: file.name })
          dispatch({ type: 'CHANGE_DATA', payload: data })
          setIsLoading(false)
        } catch (error) {
          console.error(error)
          setErrors(error.toString())
        }
      })(file)

      reader.readAsText(file)
    })
  }, [])

  const style = {
    padding: '1em',
    width: '70%',
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
        <Dropzone
          isLoading={isLoading}
          errors={errors}
          onDrop={handleFileSelect}
          accept='application/json'
        />
      ) : (
        Object.keys(state.data).map((key, i) => {
          const field = state.data[key]
          return (
            <FieldBlock
              key={i}
              name={key}
              parentKeys={[key]}
              parentLength={Object.keys(state.data).length}
              isArrayItem={false}
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
