import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/global.scss'

const queryClient = new QueryClient()
const cache = createCache({ key: 'next' })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      {/* @ts-ignore */}
      <QueryClientProvider client={queryClient} contextSharing={false}>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default MyApp
