import React, { useState, useContext } from 'react'
import useInput from './useInput'
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

const unstringifyValue = (value: ValueType) => {
  if (!isNaN(value)) return parseFloat(value)
  else if (value === 'true') return true
  else if (value === 'false') return false
  else return value
}

const useField = (initialValue: ValueType, context: string[]) => {
  const { inputVal, handleInputChange } = useInput(initialValue)
  const [inputColor, setFieldColor] = useState<string>(
    getColorForValue(inputVal)
  )
  const [state, dispatch] = useContext(Store)

  const handleFieldUpdate = () => {
    // Update color based on type
    setFieldColor(getColorForValue(inputVal))

    // Update store
    let newData = state.data
    let target = newData

    for (let i = 0; i < context.length - 1; i++) {
      target = target[context[i]]
    }

    target[context[context.length - 1]] = unstringifyValue(inputVal)

    dispatch({ type: 'SET_DATA', payload: newData })
  }

  return {
    inputVal,
    handleInputChange,
    handleFieldUpdate,
    inputColor
  }
}

export default useField
