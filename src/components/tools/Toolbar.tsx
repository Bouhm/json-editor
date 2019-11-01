import React, { useContext } from 'react'
import { FelaComponent } from 'react-fela'
import { Store } from '../Store'
import { handleExportData } from './exporter'

const Toolbar = () => {
  const [state, dispatch] = useContext(Store)

  const styles = {
    toolbar: {
      width: '100%',
      flex: '0 1 50px',
      'text-align': 'center',
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      fontFamily: 'sans-serif',
      fontSize: '16px',
      lineHeight: '2.5em',
      cursor: 'pointer',
      'text-align': 'center',
      width: '12em',
      margin: '0.5em 0.5em 0.5em 0',
      backgroundColor: '#444',
      border: '3px solid #222',
      borderRadius: '7px',
      ':hover': {
        backgroundColor: '#555'
      }
    }
  }

  const Button = (props: { onClick: Function; text: string; icon: string }) => {
    const { text, icon, onClick } = props

    return (
      <div onClick={() => onClick(state.data)}>
        <FelaComponent style={styles.button}>
          <i className={`fas fa-${icon}`}></i>
          {text}
        </FelaComponent>
      </div>
    )
  }

  return (
    <div style={styles.toolbar}>
      <Button
        onClick={handleExportData}
        icon='file-download'
        text='Export JSON'
      />
    </div>
  )
}

export default Toolbar
