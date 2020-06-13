import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'jessica sun'
export const siteTitle = 'Next.js Sample Website'
const intro = 'hi! i’m jessica.'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-Icon.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={`${styles.work} ${styles.tabs}`}>work</div>
          <div className={`${styles.about} ${styles.tabs}`}>about</div>
          <div className={`${styles.resume} ${styles.tabs}`}>resume</div>
        </div>
      </header>

      <main>

        {/* circles */}
        <div className={`${styles.circle} ${styles.bluecircle}`}></div>
        <div className={`${styles.circle} ${styles.lightbluecircle}`}></div>
        <div className={`${styles.circle} ${styles.redcircle}`}></div>

        {/* me */}
        <img src="/images/profile.svg" className={styles.profile}/>

        {/* intro */}
        {<div className={styles.intro}>{intro}<div style={{fontWeight: "normal", fontSize: "40px", lineHeight: "53px", display: "block", verticalAlign: "top"}}>I’m passionate about building <span style={{color: "#FC3F42"}}>impactful products</span> and designing <span style={{color: "#2191FB"}}>engaging experiences.</span></div></div>}


        {/*  WORK */}
        <div className={styles.titles}>where i've worked.</div>

        {/* barclays */}
        <div className={`${styles.rectangle} ${styles.barclaysRect}`}></div>
        <img src="/images/work/barclays.svg" className={styles.barclaysIcon}/>
        <div className={`${styles.captions} ${styles.barclays}`}>Barclays</div>

        {/* moderna */}
        <div className={`${styles.rectangle} ${styles.modernaRect}`}></div>
        <img src="/images/work/moderna.svg" className={styles.modernaIcon}/>
        <div className={`${styles.captions} ${styles.moderna}`}>Moderna Therapeutics</div>


        {/* mastercard */}
        <div className={`${styles.rectangle} ${styles.mastercardRect}`}></div>
        <img src="/images/work/mastercard.svg" className={styles.mastercardIcon}/>
        <div className={`${styles.captions} ${styles.mastercard}`}>Mastercard</div>


        {/* PROJECTS */}
        <div className={styles.titles} style={{top: "1321px"}}>what i've made.</div>


        {/* hackmit */}
        <img src="/images/projects/hackmit.svg" className={styles.hackRect}/>
        <div className={`${styles.captions} ${styles.hackmit}`}>HackMIT</div>


        {/* kelp */}
        <div className={`${styles.rectangle} ${styles.kelpRect}`}></div>
        <img src="/images/projects/kelp.svg" className={styles.kelpIcon}/>
        <div className={`${styles.captions} ${styles.kelp}`}>Kelp</div>


        {/* dash */}
        <div className={`${styles.rectangle} ${styles.dashRect}`}></div>
        <img src="/images/projects/dash.svg" className={styles.dashIcon}/>
        <div className={`${styles.captions} ${styles.dash}`}>Morning Dashboard</div>

        {/* heartsmart socks */}
        <div className={`${styles.rectangle} ${styles.heartRect}`}></div>
        <img src="/images/projects/heartsmart.svg" className={styles.heartIcon}/>
        <div className={`${styles.captions} ${styles.heart}`}>HeartSmart Socks</div>

        {/* smart alarm */}
        <div className={`${styles.rectangle} ${styles.alarmRect}`}></div>
        <img src="/images/projects/alarm.svg" className={styles.alarmIcon}/>
        <div className={`${styles.captions} ${styles.alarm}`}>Smart Alarm</div>

      </main>


        <footer className={styles.banner}> connect with me! <span style={{fontWeight: "normal", fontSize: "20px", lineHeight: "25px"}}>I’m always down to chat over a nice cup of tea.</span></footer>
        <img src="/images/socials/mail.svg" className={styles.socials} style={{left: "438px"}}/>
        <img src="/images/socials/linkedin.svg" className={styles.socials} style={{left: "569px"}}/>
        <img src="/images/socials/instagram.svg" className={styles.socials} style={{left: "700px"}}/>
        <img src="/images/socials/facebook.svg" className={styles.socials} style={{left: "831px"}}/>
        <img src="/images/socials/github.svg" className={styles.socials} style={{left: "962px"}}/>


      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
