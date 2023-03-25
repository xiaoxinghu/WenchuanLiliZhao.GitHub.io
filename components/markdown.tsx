function HTML({ children }: {children: string}) {
  return (
    <div dangerouslySetInnerHTML={{ __html: children }}/>
  )
}

export default HTML
