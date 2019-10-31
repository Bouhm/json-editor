import React, { useState, ReactNode } from 'react'
import { FelaComponent } from 'react-fela'
import Field from './Field'
import { symbol } from 'prop-types'

type FieldBlockProps = {
  name: string
  field: any
  isArrayItem: boolean
  showBorder?: boolean
  context: any // An array of keys to keep track of which portion of data
}

const FieldBlock = (props: FieldBlockProps) => {
  const { field, name, context, isArrayItem, showBorder = true } = props
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
      color: '#9cdcfe'
    },
    blockIndex: {
      color: '#c586c0'
    },
    brackets: {
      color: 'white'
    }
  }

  // Wraps label and block in brackets depending on object type
  const BracketsWrapper = (props: any) => {
    return (
      <>
        <FelaComponent style={styles.blockLabel}>
          <div onClick={handleClick}>
            {isArrayItem ? (
              <span style={styles.blockIndex}>{`${parseInt(name)}.`}</span>
            ) : (
              <>
                {name}
                <span style={styles.brackets}>
                  {Array.isArray(props.field) ? ': [' : ': {'}
                </span>
              </>
            )}
          </div>
        </FelaComponent>
        {props.children}
        {!isArrayItem && (
          <span style={styles.brackets}>
            {Array.isArray(props.field) ? ']' : '}'}
          </span>
        )}
      </>
    )
  }

  return (
    <div style={styles.fieldBlock}>
      {typeof field === 'object' ? (
        <BracketsWrapper field={field}>
          {!isCollapsed &&
            Object.keys(field).map(key => {
              return (
                <FieldBlock
                  key={key}
                  name={key}
                  context={[...context, key]}
                  isArrayItem={Array.isArray(field)}
                  field={field[key]}
                />
              )
            })}
        </BracketsWrapper>
      ) : (
        <Field name={name} value={field} context={context} />
      )}
    </div>
  )
}

export default FieldBlock
