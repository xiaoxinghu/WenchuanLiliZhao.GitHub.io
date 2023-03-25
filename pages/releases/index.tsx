import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import Content from '../../components/content'
import Layout from '../../components/layout'
import ReleaseCard from '../../components/release-card'
import Title from '../../components/title'
import { listReleases } from '../../utils/api'
import { markdownToHtml } from '../../utils/markdown'
import { Release } from '../../utils/types'

const DownloadPage: NextPage<{ releases: Release[] }> = ({ releases }) => {

  return (
    <Layout>
      <Content size="normal">
        <Title as='h1' css={{ paddingTop: 120, paddingBottom: 20, textAlign: 'left' }}>
        Releases
        </Title>
      </Content>
      <div>
        <ul>
          {releases.map(release =>
            <li key={`version-${release.version}`}>
              <ReleaseCard data={release}/>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
  const data = await listReleases()
  const releases = await Promise.all(data.map(async release => {
    const html = await markdownToHtml(release.notes)
    return {
      ...release,
      html,
    }
  }))

  return {
    props: { releases }
  }
}

export default DownloadPage
