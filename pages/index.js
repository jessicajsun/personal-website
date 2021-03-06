import Head from 'next/head'
import styles from '../components/home.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function Home(){

  return (
    <Layout>
      <main>

        <section className={styles.topPanel}>

            {/* left */}
            <div className={styles.intro}>
              <div className={styles.hi}> hi! i’m jessica.</div>
              <div className={styles.blurb}>
                I’m passionate about building
                <span style={{color: "#FC3F42"}}> impactful products</span> and designing <span style={{color: "#2191FB"}}> engaging experiences.</span>
              </div>
            </div>

            {/* right */}
            <div className={styles.circleContainer}>
              <img src="/images/newprofile.png"/>
            </div>

        </section>


        {/*  WORK */}
      <section className={styles.work}>

        <div className={styles.titles}>where i've worked.</div>

        <div className={styles.threeitemrow}>

          {/* barclays */}
          <div className={styles.item}>
            <SlowLink href="/barclays">
              <div className={`${styles.rectangle} ${styles.barclaysRect} ${styles.grow} ${styles.cappedSize}`}>
                <img src="/images/work/barclays.jpg"/>
              </div>
            </SlowLink>
            <div className={styles.captions}>Barclays</div>
          </div>

          {/* moderna */}
          <div className={styles.item}>
            <SlowLink href="/moderna">
              <div className={`${styles.rectangle} ${styles.modernaRect} ${styles.grow} ${styles.cappedSize}`}>
                  <img src="/images/work/moderna.png"/>
              </div>
            </SlowLink>
            <div className={styles.captions}>Moderna Therapeutics</div>
          </div>

          {/* mastercard */}
          <div className={styles.item}>
            <SlowLink href="/mastercard">
              <div className={`${styles.rectangle} ${styles.mastercardRect} ${styles.grow} ${styles.cappedSize}`}>
                <svg width="100%" height="100%" viewBox="0 0 232 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M146.419 26.3239H85.4052V124.034H146.419V26.3239Z" fill="#FF5F00"/>
                <path d="M91.6896 75.1877C91.682 65.779 93.8573 56.4919 98.0508 48.0293C102.244 39.5666 108.346 32.1501 115.894 26.3411C106.545 19.137 95.3179 14.6572 83.4951 13.4137C71.6723 12.1702 59.7312 14.2132 49.0366 19.3091C38.3419 24.405 29.3252 32.3483 23.0169 42.2311C16.7087 52.1139 13.3634 63.5375 13.3634 75.1963C13.3634 86.8551 16.7087 98.2787 23.0169 108.161C29.3252 118.044 38.3419 125.988 49.0366 131.083C59.7312 136.179 71.6723 138.222 83.4951 136.979C95.3179 135.735 106.545 131.256 115.894 124.052C108.344 118.241 102.24 110.821 98.0469 102.356C93.8533 93.8897 91.6793 84.5992 91.6896 75.1877Z" fill="#EB001B"/>
                <path d="M218.435 75.1876C218.434 86.8473 215.088 98.2716 208.779 108.155C202.47 118.038 193.451 125.981 182.756 131.076C172.06 136.171 160.117 138.213 148.294 136.968C136.47 135.722 125.243 131.241 115.894 124.034C123.44 118.22 129.54 110.801 133.734 102.338C137.929 93.8752 140.108 84.5885 140.108 75.179C140.108 65.7695 137.929 56.4828 133.734 48.0197C129.54 39.5566 123.44 32.138 115.894 26.3238C125.243 19.1175 136.47 14.6355 148.294 13.3902C160.117 12.145 172.06 14.1866 182.756 19.2818C193.451 24.377 202.47 32.3201 208.779 42.2032C215.088 52.0864 218.434 63.5107 218.435 75.1704V75.1876Z" fill="#F79E1B"/>
                </svg>
              </div>
            </SlowLink>
            <div className={styles.captions}>Mastercard</div>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className={styles.projects}>

        <div className={styles.titles}>what i've made.</div>

        <div className={styles.threeitemrow}>

          {/* hackmit */}
          <div className={styles.item}>
            <SlowLink href="/hackmit">
              <div className={`${styles.rectangle} ${styles.hackRect} ${styles.grow}`}>
                <img src="/images/projects/hack.png"/>
              </div>
              <div className={styles.captions}>HackMIT</div>
            </SlowLink>
          </div>

          {/* blueprint */}
          <div className={styles.item}>
            <SlowLink href="/blueprint">
              <div className={`${styles.rectangle} ${styles.blueprintRect} ${styles.grow}`}>
                <img src="/images/projects/blueprint.png"/>
              </div>
              <div className={styles.captions}>Blueprint</div>
            </SlowLink>
          </div>

          {/* heartsmart socks */}
          <div className={styles.item}>
            <SlowLink href="/heartsmart">
              <div className={`${styles.rectangle} ${styles.heartRect} ${styles.grow}`}>
                <img src="/images/projects/new_heartsmart.png" className={styles.heartIcon}/>
              </div>
              <div className={styles.captions}>HeartSmart Socks</div>
            </SlowLink>
          </div>

        </div>

        <div className={styles.threeitemrow}>

          {/* smart alarm */}
          <div className={styles.item}>
            <SlowLink href="/smartalarm">
              <div className={`${styles.rectangle} ${styles.alarmRect} ${styles.grow}`}>
                  <img src="/images/projects/alarm.png" className={styles.alarmIcon}/>
              </div>
              <div className={styles.captions}>Smart Alarm</div>
            </SlowLink>
          </div>

          {/* dashboard */}
          <div className={styles.item}>
            <SlowLink href="/dashboard">
              <div className={`${styles.rectangle} ${styles.dashRect} ${styles.grow}`}>
                <img src="/images/projects/dash.png"/>
              </div>
              <div className={styles.captions}>Morning Dashboard</div>
            </SlowLink>
          </div>

          {/* kelp */}
          <div className={styles.item}>
            <SlowLink href="/munch">
              <div className={`${styles.rectangle} ${styles.kelpRect} ${styles.grow} ${styles.cappedSize}`}>
                <img src="/images/projects/munch.png"/>
              </div>
              <div className={styles.captions}>Munch</div>
            </SlowLink>
          </div>

        </div>

      </section>

      </main>

    </Layout>

    )

}
