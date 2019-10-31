import React, { useState, useContext } from 'react'
import { FelaComponent } from 'react-fela'
import useInput from './useInput'

type FieldProps = {
  name: string
  value: any
  context: any
  //field: any
}

const Field = (props: FieldProps) => {
  const { name, value, context } = props
  const { inputVal, handleInputChange, handleInputBlur } = useInput(
    value,
    context
  )

  const style = {
    backgroundColor: '#2e2e2e'
  }

  return (
    <FelaComponent style={style}>
      <label>{name}</label>:{' '}
      <input
        type='text'
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        value={inputVal}
        name={name}
      />
    </FelaComponent>
  )
}

export default Field
