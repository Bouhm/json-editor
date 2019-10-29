import React from 'react'
import FieldGroup from './FieldGroup'
import Field from './Field'

type EditorProps = {
  data: object // JSON data
}

const Editor = (props: EditorProps) => {
  console.log(props.data)

  return (
    <div className='editor'>
      <div className='add-fields-button'>+</div>
    </div>
  )
}

export default Editor
