import { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";


const DemoPage: NextPage = () => {
  return (
    <Layout>
      <div className="Markdown">
        <h1>Demo Gose Here</h1>
        <ol>
          <li><p><Link href="./demos/chapterMarkSpacing">How a chapter mark eat another chapter mark?</Link></p></li>
        </ol>
      </div>
    </Layout>
  )
}

export default DemoPage
