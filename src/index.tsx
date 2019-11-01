import React from 'react'
import ReactDOM from 'react-dom'
import { RendererProvider } from 'react-fela'
import { createRenderer } from 'fela'
import { StoreProvider } from './components/Store'
import App from './components/App'
import './index.css'

const renderer = createRenderer()

ReactDOM.render(
  <RendererProvider renderer={renderer}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </RendererProvider>,
  document.getElementById('root')
)
