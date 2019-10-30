import React from 'react'
import { JSXElement } from '@babel/types'

interface IState {
  data: any
}

const initialState: IState = {
  data: {}
}

export const Store = React.createContext(initialState)

const reducer = (state: any, action: any) {
  switch(action.type) {
    case 'CHANGE_DATA':
      return { ...state, data: action.payload}
    default:
      return state
  }
}

export function StoreProvider(props: any): JSX.Element {
  return (
    <Store.Provider data={initialState.data}>{props.children}</Store.Provider>
  )
}
