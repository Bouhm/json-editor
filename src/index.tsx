import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-fela'
import { createRenderer } from 'fela'
import App from './App'

const renderer = createRenderer()

ReactDOM.render(
  <Provider renderer={renderer}>
    <App />
  </Provider>,
  document.getElementById('root')
)
