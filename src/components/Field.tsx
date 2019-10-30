import React from 'react'
import { FelaComponent } from 'react-fela'

type FieldProps = {
  name: string
  value: string | number | boolean | undefined
}

const Field = (props: FieldProps) => {
  const { name, value } = props

  const style = {}

  return (
    <FelaComponent style={style}>
      <label>{name}</label>:{' '}
      <input type='text' value={value ? value.toString() : ''} name={name} />
    </FelaComponent>
  )
}

export default Field
