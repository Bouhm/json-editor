import React from 'react'
import Field from './Field'
import { IData } from './Editor'
import { isArray } from 'util'

type FieldBlockProps = {
  name: string
  field: any
  isArray: boolean
}

const FieldBlock = (props: FieldBlockProps) => {
  const { field, name, isArray } = props

  const style = {
    marginLeft: '1.5em'
  }

  return (
    <div style={style}>
      {typeof field === 'object' ? (
        <>
          <label>{isArray ? `${parseInt(name) + 1}.` : `${name}:`}</label>
          {Object.keys(field).map(key => (
            <FieldBlock
              key={key}
              name={key}
              isArray={Array.isArray(field)}
              field={field[key]}
            />
          ))}
        </>
      ) : (
        <Field name={name} value={field} />
      )}
    </div>
  )
}

export default FieldBlock
