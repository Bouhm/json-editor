import React, { useContext } from 'react'
import FieldBlock from './FieldBlock'
import Field from './Field'
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
    fontSize: '16px'
  }

  return (
    <div style={style}>
      {Object.keys(state.data).map(key => {
        const field = state.data[key]
        return (
          <FieldBlock
            key={key}
            name={key}
            context={[key]}
            isArray={Array.isArray(field)}
            showBorder={false}
            field={field}
          />
        )
      })}
    </div>
  )
}

export default Editor
