import { promises as fs } from 'fs'
import path from 'path'

type WalkOption = {
  cwd?: string
  predicate: (file: string) => boolean
}

async function glob(dir: string, { cwd, predicate }: WalkOption): Promise<string[]> {
  const files = await fs.readdir(dir)
  const all: string[] = []
  for (const file of files) {

    const absPath = path.join(dir, file)
    const _cwd = cwd || dir

    const relativePath = path.relative(_cwd, absPath)

    if ((await fs.lstat(absPath)).isDirectory()) {
      all.push(...(await glob(absPath, {
        cwd: _cwd,
        predicate,
      })))
    }

    if (predicate(file)) {
      all.push(relativePath)
    }

  }
  return all
}


export async function listPosts() {

  const ROOT_DIR = path.join(process.cwd(), 'posts')

  const files = await glob(ROOT_DIR, { predicate: file => file.endsWith('.mdx') })

  return await Promise.all(files.map(async file => {

    const slug = path.basename(file, '.mdx')
    const post = await import(`../posts/${file}`)
    return {
      slug,
      title: post.title,
      summary: post.summary,
    }
  }))

  // return await Promise.all(files.map(async file => {
  //   const post = await import(file)
  //   return JSON.stringify(post)
  // }))
}

/* export function render(slug: string) {
*   try {
*     return require(`../posts/${slug}.mdx`).default()
*   } catch (err) {
*   }
* }
*  */
export async function render(slug: string) {
  const { default: MDXContent, ...props } = await import(`../posts/${slug}.mdx`)

  return () => MDXContent(props)
  // return { default: MDXContent }
}

// export async function toc(slug: string) {
//   const content = (await fs.readFile(path.join(ROOT_DIR, `${slug}.mdx`))).toString('utf-8')
//   const thing = await compile(content, {
//     remarkPlugins: []
//   })

//   return thing
// }
