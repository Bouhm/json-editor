import React from 'react'

type FieldProps = {
  name: string
  value: string | number
}

const Field = (props: FieldProps) => {
  const { name, value } = props

  return (
    <div className={`field`}>
      {name}: {value}
    </div>
  )
}

export default Field
