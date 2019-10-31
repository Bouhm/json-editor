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

  const styles = {
    field: {
      height: '1.5em',
      lineHeight: '1.5em'
    },
    label: {
      color: '#9cdcfe'
    },
    input: {
      backgroundColor: '#333333',
      color: '#ce824a',
      border: '1px solid #202020',
      borderRadius: '3px',
      outline: 'none'
    }
  }

  return (
    <FelaComponent style={styles.field}>
      <label style={styles.label}>{name}</label>:{' '}
      <input
        style={styles.input}
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
