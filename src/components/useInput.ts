import React, { useState } from 'react'

const useInput = () => {
  const [input, setInput] = useState('')

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  return {
    input,
    handleInputChange
  }
}

export default useInput
