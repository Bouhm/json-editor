import React from 'react'
import { FelaComponent } from 'react-fela'
import useInput, { ValueType } from '../hooks/useInput'

type FieldProps = {
  name: string
  value: any
  parentKeys: string[]
  isArrayItem: boolean
}

const Field = (props: FieldProps) => {
  const { name, value, isArrayItem, parentKeys } = props
  const { inputVal, inputColor, handleInputChange, handleInputBlur } = useInput(
    value,
    parentKeys
  )

  const styles = {
    field: {
      display: 'flex',
      height: '1.5em',
      lineHeight: '1.5em'
    },
    label: {
      display: 'inline-block',
      color: `${isArrayItem ? '#c586c0' : '#9cdcfe'}`,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    input: {
      paddingLeft: '0.3em',
      backgroundColor: '#333333',
      color: `${inputColor}`,
      border: '1px solid #202020',
      borderRadius: '3px',
      outline: 'none'
    }
  }

  return (
    <FelaComponent style={styles.field}>
      <span title={name} style={styles.label}>{`${name}: `}</span>
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
