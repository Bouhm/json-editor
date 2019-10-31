import React, { useState, useContext } from 'react'
import { reducer, initialState } from './Store'
import { Store } from './Store'

const useInput = (initialValue: string, context: string[]) => {
  const [inputVal, setInputVal] = useState(initialValue)
  const [state, dispatch] = useContext(Store)

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value)
  }

  // Only update store on blur
  const handleInputBlur = () => {
    let newData = state.data
    let target = newData

    for (let i = 0; i < context.length - 1; i++) {
      target = target[context[i]]
    }

    target[context[context.length - 1]] = inputVal

    dispatch({ type: 'SET_DATA', payload: newData })
  }

  return {
    inputVal,
    handleInputChange,
    handleInputBlur
  }
}

export default useInput
