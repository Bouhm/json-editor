import React from 'react'
import FieldGroup from './FieldGroup'
import Field from './Field'
import { FelaComponent } from 'react-fela'

type EditorProps = {
  data: object // JSON data
}

const Editor = (props: EditorProps) => {
  const style = {
    maxWidth: '75%'
  }

  return (
    <FelaComponent style={style}>
      <div className='add-fields-button'>+</div>
    </FelaComponent>
  )
}

export default Editor
