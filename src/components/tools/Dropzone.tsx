import React from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = (props: any) => {
  const { onDrop, accept } = props
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  })

  const styles = {
    container: {
      border: '5px dashed gray',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      textAlign: 'center' as const
    },
    dropzone: {
      cursor: 'pointer'
    }
  }
  return (
    <div style={styles.container} {...getRootProps()}>
      <p style={styles.dropzone} className='dropzone-content'>
        <input className='dropzone-input' {...getInputProps()} />
        Drag-and-Drop a json file here or click to select file
        <div style={{ padding: '3em' }}>
          <i className='huge upload icon'></i>
        </div>
      </p>
    </div>
  )
}

export default Dropzone
