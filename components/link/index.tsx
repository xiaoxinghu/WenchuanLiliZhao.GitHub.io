import NextLink from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
}

/**
 * This link is a wrapper of the Nextjs Link component, so that we can add styles to it easliy.
 * @param props properties
 * @returns react component
 */
function Link ({ href, children }: Props): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <a>{children}</a>
    </NextLink>
  )
}

export default Link
