import React, { useState } from 'react'
import { FelaComponent } from 'react-fela'
import Field from './Field'

type FieldBlockProps = {
  name: string
  field: any
  isArray: boolean
  context: any // An array of keys to keep track of which portion of data
}

const FieldBlock = (props: FieldBlockProps) => {
  const { field, name, context, isArray } = props
  const [isCollapsed, setCollapsed] = useState(false)

  const handleClick = () => {
    setCollapsed(!isCollapsed)
  }

  const style = {
    marginLeft: '1.5em'
  }

  const labelStyle = {
    ':hover': {
      backgroundColor: '#232323',
      cursor: 'pointer'
    }
  }

  return (
    <div style={style}>
      {typeof field === 'object' ? (
        <>
          <FelaComponent style={labelStyle}>
            <span onClick={handleClick}>
              {isArray ? `${parseInt(name) + 1}.` : `${name}:`}
            </span>
          </FelaComponent>
          {!isCollapsed &&
            Object.keys(field).map(key => {
              return (
                <FieldBlock
                  key={key}
                  name={key}
                  context={[...context, key]}
                  isArray={Array.isArray(field)}
                  field={field[key]}
                />
              )
            })}
        </>
      ) : (
        <Field name={name} value={field} context={context} />
      )}
    </div>
  )
}

export default FieldBlock
