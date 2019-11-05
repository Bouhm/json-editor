import React, { useState } from 'react'
import { FelaComponent, createComponent } from 'react-fela'
import Field from './Field'
import NewField from './NewField'
import Button from '../ui/Button'

type FieldBlockProps = {
  name: string
  field: any
  isArrayItem: boolean
  isLastItem: boolean
  showBorder?: boolean
  parentLength: number
  mode: string
  parentKeys: string[] // An array of keys to keep track of which portion of data
}

const FieldBlock = (props: FieldBlockProps) => {
  const {
    field,
    name,
    mode,
    parentKeys,
    isArrayItem,
    isLastItem,
    showBorder = true
  } = props
  const [isCollapsed, setCollapsed] = useState(false)

  const handleClick = () => {
    setCollapsed(!isCollapsed)
  }

  const styles = {
    fieldBlock: {
      position: 'relative' as const,
      paddingLeft: '1.25em',
      borderLeft: `${showBorder ? '1px solid #454545' : 'none'}`,
      ':hover': {
        backgroundColor: 'rgba(100,100,100,0.05)'
      }
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
      ':hover': {
        cursor: 'pointer'
      },
      color: '#c586c0'
    },
    brackets: {
      color: 'white'
    }
  }

  // Wraps label and block in brackets depending on object type
  const BracketsWrapper = (props: any) => {
    const bracket = Array.isArray(props.field) ? ['[', ']'] : ['{', '}']

    return (
      <>
        <FelaComponent
          style={isArrayItem ? styles.blockIndex : styles.blockLabel}
        >
          <div onClick={handleClick}>
            {name}
            <span style={styles.brackets}>: {bracket[0]}</span>
            {isCollapsed && (
              <span style={styles.brackets}>
                &#8230;
                {bracket[1] + (isLastItem ? '' : ',')}
              </span>
            )}
          </div>
        </FelaComponent>
        {props.children}
        {!isCollapsed && (
          <span style={styles.brackets}>
            {bracket[1] + (isLastItem ? '' : ',')}
          </span>
        )}
      </>
    )
  }

  //console.log(field)
  const keys = Object.keys(field)

  const FieldBlockContainer = createComponent(styles.fieldBlock, 'div', [
    'onMouseOver',
    'onMouseLeave'
  ])

  return (
    <FieldBlockContainer style={styles.fieldBlock}>
      {typeof field === 'object' ? (
        <BracketsWrapper field={field}>
          {!isCollapsed && (
            <>
              {keys.map((key, i) => {
                return (
                  <FieldBlock
                    key={i}
                    name={key}
                    mode={mode}
                    parentKeys={[...parentKeys, key]}
                    parentLength={keys.length}
                    isArrayItem={Array.isArray(field)}
                    isLastItem={keys.length - 1 === i}
                    field={field[key]}
                  />
                )
              })}
              {mode === 'edit' && <NewField parentKeys={parentKeys} />}
            </>
          )}
        </BracketsWrapper>
      ) : (
        <Field
          name={name}
          value={field}
          isArrayItem={isArrayItem}
          parentKeys={parentKeys}
        />
      )}
    </FieldBlockContainer>
  )
}

export default FieldBlock
