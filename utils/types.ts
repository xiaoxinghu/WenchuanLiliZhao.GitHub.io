export type Outline = {
  id: string
  content: string
  lastModified: Date
}

export type Release = {
  name: string
  version: string
  releaseDate: Date
  notes: string
  html?: string
  downloadUrl: string
}

export type Post = {
  title: string
  slug: string
  summary: string
}
