import { createComponent } from 'react-fela'

const button = (props: any) => ({
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: props.size === 'small' ? '0.9em' : '1.1em',
  height: props.size === 'small' ? '1.75em' : '3em',
  textAlign: 'center' as const,
  backgroundColor: props.color || '#555',
  border: '3px solid #222',
  outline: 'none',
  borderRadius: '6px',
  ':hover': {
    backgroundColor: props.color || '#666',
    cursor: 'pointer'
  }
})

const Button = createComponent(button, 'button', ['onClick'])

export default Button
