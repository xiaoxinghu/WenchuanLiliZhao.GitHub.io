import { NextPage } from "next";
import ChapterMark from "../../../components/chapter-mark";
import styles from './style.module.scss';

const ChapterMarkSpacingPage: NextPage = () => {
  return (
    <div className={styles.centeredBox}>
      <div className={styles.chapterMarkArea}>
        <div className={styles.chapterMarkContainer1}>
          <ChapterMark>
            Why do we build the wall? We build the wall to keep us free
          </ChapterMark>
        </div>
        <div className={styles.chapterMarkContainer2}>
          <ChapterMark activated>
            Brazil
          </ChapterMark>
        </div>
      </div>
      <div className={styles.chapterMarkArea}>
        <div className={styles.ruler}>
          <div className={styles.chapterMarkContainer1}>
            <div className={styles.mask1}>Mask 1 Width</div>
          </div>
        </div>
        <div className={styles.chapterMarkContainer2}>
          <div className={styles.mask2}>Mask 2 Width</div>
        </div>
        </div>
    </div>
  )
}

export default ChapterMarkSpacingPage
