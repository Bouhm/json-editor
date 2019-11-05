import React, { useReducer, useContext } from 'react'

interface IAction {
  type: string
  payload: any
}

interface IState {
  data: any
  mode: string
  filename: string
}

export const initialState: IState = {
  data: undefined,
  filename: '',
  mode: 'view'
}

export const Store = React.createContext<IState | any>(initialState)

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, filename: action.payload }
    case 'CHANGE_DATA':
      return { ...state, data: action.payload }
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload }
    default:
      return state
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  const state = useReducer(reducer, initialState)
  return <Store.Provider value={state}>{props.children}</Store.Provider>
}
