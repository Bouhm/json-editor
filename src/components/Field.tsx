import React from 'react'
import { FelaComponent } from 'react-fela'

type FieldProps = {
  name: string
  value: string | number | boolean
}

const Field = (props: FieldProps) => {
  const { name, value } = props

  const style = {
    ':hover': {
      backgroundColor: '#232323'
    },
    'focus-within': {
      backgroundColor: '#262626',
      border: 'none',
      outline: 'none'
    }
  }

  return (
    <FelaComponent style={style}>
      {name}: {value}
    </FelaComponent>
  )
}

export default Field
