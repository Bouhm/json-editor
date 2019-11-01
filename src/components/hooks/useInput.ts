import React, { useState, useContext } from 'react'
import { Store } from './Store'

export type ValueType = any

const useInput = (initialValue: ValueType, context: string[]) => {
  const [inputVal, setInputVal] = useState<ValueType>(initialValue)
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
