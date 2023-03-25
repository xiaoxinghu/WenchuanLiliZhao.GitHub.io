import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import { listPosts, render } from '../../utils/posts'

type StaticProps = {
  slug: string
}

type PathParams = {
  slug: string
}

const PostPage: NextPage<StaticProps> = ({ slug }) => {
  const Content = dynamic(() => render(slug))
  return (
    <Content/>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps<StaticProps, PathParams> = async ({ params }) => {
  const slug = params!.slug
  // const thing= await toc(slug)
  // console.log({thing })
  return {
    props: { slug }
  }
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {

  const posts = await listPosts()

  return {
    paths: posts.map(p => ({ params: { slug: p.slug }})),
    fallback: false
  }
}
