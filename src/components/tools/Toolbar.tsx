import React, { useContext } from 'react'
import { FelaComponent } from 'react-fela'
import { Store } from '../Store'
import { handleExportData } from './exporter'
import Button from '../ui/Button'

const Toolbar = () => {
  const [state, dispatch] = useContext(Store)
  const { data, filename } = state

  const style = {
    width: '100%',
    flex: '0 1 50px',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <FelaComponent style={style}>
      <Button onClick={() => handleExportData(data, filename)}>
        <i className='download icon'></i>
        EXPORT JSON
      </Button>
    </FelaComponent>
  )
}

export default Toolbar
