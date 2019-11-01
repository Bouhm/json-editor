import React from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = (props: any) => {
  const { onDrop, accept } = props
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  })

  return (
    <div {...getRootProps()}>
      <input className='dropzone-input' {...getInputProps()} />
      {isDragActive ? (
        <p className='dropzone-content'>Drop file here</p>
      ) : (
        <p className='dropzone-content'>
          Drag and drop a JSON file here or click to select file
        </p>
      )}
    </div>
  )
}

export default Dropzone
