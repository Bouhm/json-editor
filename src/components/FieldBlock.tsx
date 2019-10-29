import React from 'react'
import Field from './Field'
import { IData } from './Editor'

type FieldBlockProps = {
  field: IData
}

const FieldBlock = (props: FieldBlockProps) => {
  const { field } = props
  const fieldName: string = Object.keys(field)[0]
  const fieldVal = field[fieldName]

  return (
    <div>
      {typeof fieldVal === 'object' ? (
        <>
          {fieldVal.length === 1 && fieldName}
          {Object.keys(fieldVal).map(key => (
            <FieldBlock key={key} field={{ [key]: fieldVal[key] }} />
          ))}
        </>
      ) : (
        <Field name={fieldName} value={fieldVal} />
      )}
    </div>
  )
}

export default FieldBlock
