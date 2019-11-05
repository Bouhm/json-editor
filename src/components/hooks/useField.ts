import React, { useState, useContext } from 'react'
import useInput from './useInput'
import { Store } from '../Store'

export type ValueType = any

// Returns typeof given value based on its type or inferred type from if string
const inferTypeFromString = (value: any) => {
  if (value === 'true' || value === 'false' || typeof value === 'boolean')
    return 'boolean'
  else if (!isNaN(value) || typeof value === 'number') return 'number'
  else return 'string'
}

// Returns color based on value's type of either string, number, or boolean
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

// Returns literal value of given string (number or boolean)
const unstringifyValue = (value: ValueType) => {
  if (!isNaN(value)) return isNaN(parseFloat(value)) ? value : parseFloat(value)
  else if (value === 'true') return true
  else if (value === 'false') return false
  else return value
}

const useField = (
  parentKeys: string[],
  initialValue: ValueType = undefined
) => {
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

    for (let i = 0; i < parentKeys.length - 1; i++) {
      target = target[parentKeys[i]]
    }
    //stackoverflow.com/questions/56297351/how-to-use-shouldcomponentupdate-with-react-hooks/56297625

    https: target[parentKeys[parentKeys.length - 1]] = unstringifyValue(
      inputVal
    )

    dispatch({ type: 'CHANGE_DATA', payload: newData })
  }

  const handleAddNewField = (field: any) => {
    // Update store
    let newData = state.data
    let target = newData

    for (let i = 0; i < parentKeys.length; i++) {
      target = target[parentKeys[i]]
    }

    let inputVal: any
    switch (field.type) {
      case 'value':
        inputVal = ''
        break
      case 'object':
        inputVal = {}
        break
      case 'array':
        inputVal = []
        break
      default:
        inputVal = ''
        break
    }

    // If parent is array, add to it
    if (Array.isArray(target)) {
      target.push(inputVal)
    } else {
      // Initialize empty array if newly created
      if (field.type === 'array') {
        target[field.name] = []
      } else {
        target[field.name] = inputVal
      }
    }

    dispatch({ type: 'CHANGE_DATA', payload: newData })
  }

  return {
    inputVal,
    handleInputChange,
    handleFieldUpdate,
    handleAddNewField,
    inputColor
  }
}

export default useField
