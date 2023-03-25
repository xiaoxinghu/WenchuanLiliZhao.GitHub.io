import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import preview1 from '../assets/screenshot-0.png'
import preview3 from '../assets/screenshot-0.png'
import preview4 from '../assets/screenshot-0.png'
import ArticleCard from '../components/article-card'
import Box from '../components/box'
import Gallery from '../components/gallery'
import Grid from '../components/grid'
import Layout from '../components/layout'
import Link from '../components/link'
import WithChapterMark from '../components/with-chapter-mark'
import styles from './index.module.scss'
import Button from '../components/button'
import Content from '../components/content'

const aboutWhat = [
  'cooking',
  'travelling',
  'programming',
  'designing',
  'anything'
]

const timelineNumbers = [0]

for (var i = 1; i <= 59; i++) {
  timelineNumbers.push(i);
}

const images = [preview1, preview3, preview4]

const Home: NextPage<{ version: string }> = ({ version }) => {
  return (
    <Layout>
      <small style={{
        display: 'none'
      }}>{version}</small>
      <header className={styles.heroHead}>
        <WithChapterMark label='The world is waiting for you to'>
          <header>
            <h1>
              <div>Making a podcast about</div>
              <div className={styles.aboutWhat}>
                {aboutWhat.map((aboutWhat, i) =>
                  <div key={`m-${i}`} className={styles.aboutSomething}>
                    <div>{aboutWhat} </div>
                    <div className={styles.playhead}></div>
                  </div>
                )}
              </div>
            </h1>

            <p>
              <Link href='/demos'>Lorem</Link> ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin augue in ornare viverra. Sed at lacus sit amet erat luctus tempor. Aliquam erat volutpat.
            </p>

            <Button>Download for MacOS</Button>
            <small>
              <Link href='/releases'>
                View Releases
              </Link>
            </small>
          </header>
        </WithChapterMark>

        <div className={styles.heroHeadBg}></div>
      </header>


      <Gallery css={{ width: '100%' }}>
        {images.map((image, i) =>
          /* TODO: have to change the max-width and height responsively */
          <Box key={`screenshot-${i}`} css={{ position: 'relative', width: '100%', maxWidth: 1200 }} centered>
            <Image key={`screenshot-${i}`} src={image} layout='responsive' objectFit='cover'/>
          </Box>
          )}
      </Gallery>


      <Box as='section' centered>
        <WithChapterMark label="Better solutions">
          <header>
            <h2>Feature tutorials</h2>
            <figcaption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin augue in ornare viverra. Sed at lacus sit amet erat luctus tempor. Aliquam erat volutpat.</p>
              <p>Praesent ultricies nisl nisi, at posuere lectus auctor eget</p>
            </figcaption>
          </header>
        </WithChapterMark>
        <Content size="heroic">
          <Grid columns={3} gap={24}>
            <Link href='/'>
              <ArticleCard
                title="How to make a podcast on Teapodo"
                brief="Morgenstern ach scheine, auf die Liebst auf Meine!"
              ></ArticleCard>
            </Link>

            <Link href='/'>
              <ArticleCard
                cover="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg/560px-%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg"
                title="Faster clip editing"
                brief="Morgenstern ach scheine, auf die Liebst auf Meine!"
              ></ArticleCard>
            </Link>

            <Link href='/'>
              <ArticleCard
                cover="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Alexander_the_Great_mosaic.jpg/1024px-Alexander_the_Great_mosaic.jpg"
                title="Work with chapter marks"
                brief="Morgenstern ach scheine, auf die Liebst auf Meine!"
              ></ArticleCard>
            </Link>
          </Grid>
        </Content>
      </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { version: process.env.RELEASE_VERSION || 'dev' }
  }
}

export default Home

