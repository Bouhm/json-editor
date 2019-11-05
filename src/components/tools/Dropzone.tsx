import React from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = (props: any) => {
  const { onDrop, accept, errors, isLoading } = props
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  })

  const styles = {
    container: {
      border: '5px dashed gray',
      outline: 'none',
      width: '100%',
      height: '90%',
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
      <div style={styles.dropzone} className='dropzone-content'>
        <input className='dropzone-input' {...getInputProps()} />
        Drag-and-Drop a JSON file here or click to select file
        <div style={{ padding: '3em' }}>
          <i className='huge upload icon'></i>
        </div>
        {errors ? (
          <div style={{ color: 'red', maxWidth: '50%', margin: '0 auto' }}>
            {errors}
          </div>
        ) : (
          <>{isLoading && <span>Importing file...</span>}</>
        )}
      </div>
    </div>
  )
}

export default Dropzone
