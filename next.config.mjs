import frontmatter from 'remark-frontmatter'
import { remarkMdxFrontmatter } from'remark-mdx-frontmatter'

import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os: false, process: false, util: false }
    return config
  },
  experimental: {
    outputStandalone: true,
    emotion: true,
  },
}

export default withMDX(nextConfig)
