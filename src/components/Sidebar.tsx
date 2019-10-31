import React from 'react'
import FieldBlock from './FieldBlock'
import Field from './Field'
import { FelaComponent } from 'react-fela'

const Sidebar = () => {
  const style = {
    flex: 1,
    height: '100%'
  }

  return (
    <div style={style}>
      <button>Export JSON</button>
    </div>
  )
}

export default Sidebar
