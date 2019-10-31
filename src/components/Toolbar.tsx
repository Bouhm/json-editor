import React from 'react'
import FieldBlock from './FieldBlock'
import Field from './Field'
import { FelaComponent } from 'react-fela'

const Toolbar = () => {
  const style = {
    width: '100%',
    flex: '0 1 50px',
    lineHeight: '50px',
    'text-align': 'center'
  }

  return (
    <div style={style}>
      <button>Export JSON</button>
    </div>
  )
}

export default Toolbar
