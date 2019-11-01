import React, { useState, useContext } from 'react'
import { Store } from '../Store'

export type ValueType = any

const inferTypeFromString = (value: any) => {
  if (value === 'true' || value === 'false' || typeof value === 'boolean')
    return 'boolean'
  else if (!isNaN(value) || typeof value === 'number') return 'number'
  else return 'string'
}

const getColorForValue = (value: any) => {
  const type = inferTypeFromString(value)
  let color = '#ce824a'
  switch (type) {
    case 'string':
      break
    case 'number':
      color = '#b5cea8'
      break
    case 'boolean':
      color = '#358cd6'
      break
    default:
      break
  }
  return color
}

const useInput = (initialValue: ValueType, context: string[]) => {
  const [inputVal, setInputVal] = useState<ValueType>(initialValue)
  const [inputColor, setInputColor] = useState<string>(
    getColorForValue(inputVal)
  )
  const [state, dispatch] = useContext(Store)

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value)
  }

  // Only update store on blur
  const handleInputBlur = () => {
    // Update color based on type
    setInputColor(getColorForValue(inputVal))

    // Update store
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
    handleInputBlur,
    inputColor
  }
}

export default useInput
