import React, { useState } from 'react'
import useField from '../hooks/useField'
import Button from '../ui/Button'

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

  const styles = {
    form: {
      paddingLeft: '1.25em'
    },
    input: {
      paddingLeft: '0.3em',
      backgroundColor: '#333',
      border: '1px solid #202020',
      borderRadius: '3px',
      outline: 'none',
      height: '1.5em'
    }
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleAddNewField(field)
      }}
      style={styles.form}
    >
      <input
        style={{ ...styles.input, color: '#9cdcfe' }}
        name='name'
        type='text'
        value={field.name}
        onChange={handleInputChange}
        placeholder='new field'
        required
      />
      <select
        style={{ ...styles.input, color: 'white' }}
        name='type'
        value={field.type}
        onChange={handleInputChange}
        defaultValue='value'
      >
        <option value='value'>value</option>
        <option value='array'>array</option>
        <option value='object'>object</option>
      </select>
      <Button size='small'>
        <i className='check icon green'></i>
      </Button>
    </form>
  )
}

export default NewField
