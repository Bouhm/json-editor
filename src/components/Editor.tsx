import React from 'react'
import FieldBlock from './FieldBlock'
import Field from './Field'
import { FelaComponent } from 'react-fela'
import { JSXElement } from '@babel/types'

export interface IData {
  [key: string]: any
}

type EditorProps = {
  data: IData
}

const Editor = (props: EditorProps) => {
  const style = {
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
      {Object.keys(props.data).map(key => (
        <FieldBlock key={key} field={{ [key]: props.data[key] }} />
      ))}
      <div>+</div>
    </div>
  )
}

export default Editor
