import React, { useState } from 'react'

export type ValueType = any

const useInput = (initialValue: ValueType = undefined) => {
  const [inputVal, setInputVal] = useState<ValueType>(initialValue)

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value)
  }

  return {
    inputVal,
    handleInputChange
  }
}

export default useInput
