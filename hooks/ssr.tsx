import { createContext, ReactNode, useContext } from 'react'

type SSRContextType<T = unknown> = {
  props?: T
}

declare global {
  interface Window {
    __SSR_PROPS__?: string
  }
}

const SSRContext = createContext<SSRContextType<any>>({})

type SSRProviderProps = {
  staticProps?: any
  children: ReactNode
}

export const SSRProvider = ({ staticProps, children }: SSRProviderProps) => {

  let props: any = staticProps

  if (!props) {
    props = typeof window !== 'undefined' && window.__SSR_PROPS__
  }

  return (
    <SSRContext.Provider value={{props}}>
      {children}
    </SSRContext.Provider>
  )
}

export function useSSR<T>() {
  return useContext<SSRContextType<T>>(SSRContext)
}
