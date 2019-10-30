import React, { useReducer } from 'react'
import { JSXElement } from '@babel/types'

interface IState {
  data: any
}

export const initialState: IState = {
  data: {}
}

export const Store = React.createContext(initialState)

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_DATA':
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}
