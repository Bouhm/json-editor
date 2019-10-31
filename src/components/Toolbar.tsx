import React from 'react'

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
