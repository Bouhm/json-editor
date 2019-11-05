import React, { useState } from 'react'
import useField from '../hooks/useField'
import { FelaComponent } from 'react-fela'

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
    input: {
      paddingLeft: '0.3em',
      backgroundColor: '#333',
      border: '1px solid #202020',
      borderRadius: '3px',
      outline: 'none',
      height: '1.5em'
    },
    button: {
      height: '2em',
      border: '1px solid #222',
      borderRadius: '5px',
      backgroundColor: '#555',
      color: 'white',
      marginLeft: '5px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#666'
      }
    }
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
      <FelaComponent as='button' style={styles.button} type='submit'>
        ADD
      </FelaComponent>
    </form>
  )
}

export default NewField
