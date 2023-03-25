import { createContext, useContext } from 'react'

export type AppContextProps = {
  staticProps?: any
}

export const AppContext = createContext<AppContextProps>({})

export const useAppContext = () => useContext(AppContext)
