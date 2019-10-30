import React from 'react'
import FieldBlock from './FieldBlock'
import Field from './Field'
import { FelaComponent } from 'react-fela'

type EditorProps = {
  data: any
}

const Editor = (props: EditorProps) => {
  const style = {
    flex: '5',
    padding: '1em',
    width: '7 0%',
    minWidth: '50em',
    overflow: 'auto',
    backgroundColor: '#1e1e1e',
    boxShadow: 'inset 0 0 5px #101010',
    borderRadius: '5px',
    fontSize: '16px'
  }

  return (
    <div style={style}>
      {Object.keys(props.data).map(key => {
        const field = props.data[key]
        return (
          <FieldBlock
            key={key}
            name={key}
            isArray={Array.isArray(field)}
            field={field}
          />
        )
      })}
    </div>
  )
}

export default Editor
