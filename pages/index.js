import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <header>
        <div>
          <div className={styles.name}>jessica sun</div>
          <Link href="/"><a className={`${styles.work} ${styles.tabs}`}>work</a></Link>
          <Link href="/about"><a className={`${styles.about} ${styles.tabs}`}>about</a></Link>
          <Link href="/Jessica_Sun.pdf"><a>
            <div className={`${styles.resume} ${styles.tabs}`}>resume</div>
          </a></Link>

        </div>
      </header>
    </Layout>
  )
}
// export default function Home({allPostsData}) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Hi I'm Jessica! I like dogs, cheese, and running.</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   )
// }
