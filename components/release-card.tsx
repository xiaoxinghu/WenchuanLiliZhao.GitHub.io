import { useRouter } from 'next/router'
import { getReleaseDetail } from '../utils/api'
import { Release } from '../utils/types'
import Button from './button'
import HTML from './markdown'
import WithChapterMark from './with-chapter-mark'

type Props = {
  data: Release
}

function ReleaseCard({ data }: Props) {
  const router = useRouter()
    const releaseDate = new Date(data.releaseDate).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

  return (
    <>
      <WithChapterMark label={releaseDate}>
        <h2>Version {data.version}</h2>
        <Button onClick={async (e) => {
          e.preventDefault()
          const detail = await getReleaseDetail(data.version)
          if (detail.downloadUrl) {
            router.push(detail.downloadUrl)
          } else {
            alert(`version ${data.version} does not have downloadable content.`)
          }
        }}>
            Download Teapodo {data.version}
        </Button>
        <article className='markdown release-notes'>
          <HTML>{data.html!}</HTML>
        </article>
      </WithChapterMark>
    </>
  )
}

export default ReleaseCard
