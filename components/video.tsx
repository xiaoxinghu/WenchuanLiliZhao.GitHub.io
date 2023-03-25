type Props = {
  id: string
}

const Video = ({ id }: Props) => {
  return (
    <div style={{
      overflow: 'hidden',
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
    }}>
      <iframe style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
        src={`https://www.youtube.com/embed/${id}`}
        width='100%' height='auto'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='awesome video'
        frameBorder='0'
      />
    </div>
  )
}

export default Video
