import React, { useState, useReducer } from 'react'

const useInput = () => {
  const [input, setInput] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
    dispatch({ type: 'DATA_CHANGE' })
  }

  return {
    input,
    handleInputChange
  }
}

export default useInput
