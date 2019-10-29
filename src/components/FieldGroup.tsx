import React from 'react'
import Field from './Field'

type FieldGroupProps = {
  name: string
  fields: []
}

const FieldGroup = (props: FieldGroupProps) => {
  const { name, fields } = props

  return (
    <div className={`field-group`}>
      {name}
      <div>
        {fields.map(field => (
          <Field {...field} />
        ))}
      </div>
    </div>
  )
}

export default FieldGroup
