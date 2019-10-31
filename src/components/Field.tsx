import React, { useState, useContext } from 'react'
import { FelaComponent } from 'react-fela'
import { Store } from './Store'

type FieldProps = {
  name: string
  value: any
  context: any
  //field: any
}

const Field = (props: FieldProps) => {
  const { name, value, context } = props
  const [val, setVal] = useState(value)
  const [state, dispatch] = useContext(Store)

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value)
    let newData = state.data
    let target = newData

    for (let i = 0; i < context.length - 1; i++) {
      target = target[context[i]]
    }
    target[context.slice(-1).pop()] = e.currentTarget.value

    dispatch({ type: 'SET_DATA', payload: newData })
  }

  const style = {
    backgroundColor: '#2e2e2e'
  }

  return (
    <FelaComponent style={style}>
      <label>{name}</label>:{' '}
      <input type='text' onChange={handleInputChange} value={val} name={name} />
    </FelaComponent>
  )
}

export default Field
