import React, { useContext } from 'react'
import FieldBlock from './FieldBlock'
import { Store } from './Store'

const Editor = (props: any) => {
  const [state, dispatch] = useContext(Store)

  const style = {
    padding: '1em',
    width: '70%',
    minWidth: '40em',
    flex: '1 1 auto',
    overflow: 'auto',
    backgroundColor: '#1e1e1e',
    boxShadow: 'inset 0 0 5px #101010',
    borderRadius: '5px',
    fontSize: '16px',
    scrollbarColor: '#2e2e2e #1e1e1e'
  }

  const keys = Object.keys(state.data)

  return (
    <div style={style}>
      {keys.map((key, i) => {
        const field = state.data[key]
        return (
          <FieldBlock
            key={i}
            name={key}
            parentKeys={[key]}
            parentLength={keys.length}
            isArrayItem={Array.isArray(field)}
            isLastItem={keys.length - 1 === i}
            showBorder={false}
            field={field}
          />
        )
      })}
    </div>
  )
}

export default Editor
