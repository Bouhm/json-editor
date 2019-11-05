import React, { useState } from 'react'
import useField from '../hooks/useField'

type NewFieldProps = {
  parentKeys: string[]
}

const NewField = (props: NewFieldProps) => {
  const [field, setField] = useState({ name: '', type: '' })
  const { handleAddNewField } = useField(props.parentKeys)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setField({ ...field, [e.currentTarget.name]: e.currentTarget.value })
  }

  const style = {
    paddingLeft: '0.3em',
    backgroundColor: '#333333',
    border: '1px solid #202020',
    borderRadius: '3px',
    outline: 'none',
    height: '1.5em'
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleAddNewField(field)
      }}
      style={{ paddingLeft: '1.25em' }}
    >
      <input
        style={{ ...style, color: '#9cdcfe' }}
        name='name'
        type='text'
        value={field.name}
        onChange={handleInputChange}
        placeholder='new field'
      />
      <select
        style={{ ...style, color: 'white' }}
        name='type'
        value={field.type}
        onChange={handleInputChange}
        defaultValue='value'
      >
        <option value='value'>value</option>
        <option value='array'>array</option>
        <option value='object'>object</option>
      </select>
    </form>
  )
}

export default NewField
