import React, { useState, useReducer } from 'react'
import { reducer, initialState } from './Store'
import { Store } from './Store'

const useInput = () => {
  const [input, setInput] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
    dispatch({ type: 'CHANGE_DATA', payload: e.currentTarget.value })
  }

  return {
    input,
    handleInputChange
  }
}

export default useInput
