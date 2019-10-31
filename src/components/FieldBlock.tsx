import React, { useState } from 'react'
import { FelaComponent } from 'react-fela'
import Field from './Field'

type FieldBlockProps = {
  name: string
  field: any
  isArray: boolean
  showBorder?: boolean
  context: any // An array of keys to keep track of which portion of data
}

const FieldBlock = (props: FieldBlockProps) => {
  const { field, name, context, isArray, showBorder = true } = props
  const [isCollapsed, setCollapsed] = useState(false)

  const handleClick = () => {
    setCollapsed(!isCollapsed)
  }

  const styles = {
    fieldBlock: {
      paddingLeft: '1.25em',
      borderLeft: `${showBorder ? '1px solid #454545' : 'none'}`
    },
    blockLabel: {
      ':hover': {
        cursor: 'pointer'
      },
      height: '1.5em',
      lineHeight: '1.5em',
      color: 'lightskyblue'
    }
  }

  return (
    <div style={styles.fieldBlock}>
      {typeof field === 'object' ? (
        <>
          <FelaComponent style={styles.blockLabel}>
            <div onClick={handleClick}>
              {isArray ? `${parseInt(name) + 1}.` : `${name}:`}
            </div>
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
