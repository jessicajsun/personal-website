import Head from 'next/head'
import styles from '../components/hackmit.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function SmartAlarm(){

  return (
      <Layout>

        <Head>
          <title>hackmit</title>
        </Head>

        <main>


        <section className={styles.topPanel}>

          {/* all components other than border */}
          <div className={styles.summary}>

            <div className={styles.title}>hackmit.</div>

            <div className={styles.subtitle}>running MIT’s largest undergraduate hackathon.</div>

            <div className={styles.quickNotes}>

              {/* timeline */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#9DE326'}}></i>
                    <i className="far fa-clock fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>fall '17 - fall '19</div>
              </div>

              {/* roles */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#9DE326'}}></i>
                    <i className="fas fa-user fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>logistics, corporate relations, marketing</div>
              </div>

              {/* tools */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#9DE326'}}></i>
                    <i className="fas fa-wrench fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>asana, slack, streak, adobe creative suite</div>
              </div>

            </div>

            {/* recap */}
            <div className={styles.description}>
              Every September, over 1000 students from around the world attend HackMIT, MIT’s largest undergraduate hackathon. Hackers not only spend 24 hours building software and hardware projects from scratch, but they also attend workshops and talks, participate in fun mini events, and win prizes for their work.
              <p></p>
            </div>

            <div className={styles.photoTopRow}>
              <img className={styles.column} src="/images/hack/hacking.jpg"/>
              <img className={styles.column} src="/images/hack/dog.jpg"/>
            </div>

            <div className={styles.photoBottomRow}>
              <img className={styles.column} src="/images/hack/car.jpg"/>
              <img className={styles.column} src="/images/hack/talk.jpg"/>
            </div>

            <div className={styles.description}>
              The event is organized by a group of 30 students who spend months planning the hacker experience, recruiting sponsors and speakers, designing branding on a massive scale, and developing software that now powers hundreds of hackathons worldwide.
              <p></p>
            </div>

            <div className={styles.photo}>
              <img src="/images/hack/hack18.png"/>
            </div>
            <div className={styles.caption}>The HackMIT '18 team!</div>

            <div className={styles.description}>
              I joined the HackMIT team my freshman fall, and a few months later, was elected as co-director. <span style={{fontWeight: '600'}}>In my role, I led a team of 30 students, created event timelines, and set strategic priorities for admissions and outreach. I also recruited speakers and managed our corporate partnerships, which are responsible for hundreds of thousands of dollars in yearly revenue.</span> I really enjoyed the collaborative and fast-paced nature of running a hackathon, and consider the HackMIT team to be one of the best teams I’ve ever worked on.
              <p></p>
              During my time as co-director, I strove to stay true to <span style={{fontWeight: '600'}}>HackMIT’s mission of providing exciting opportunities for students of all experience levels,</span> from beginners who were excited about building their first web app to advanced hackers who used the event to tackle a problem they cared deeply about. I ran two HackMITs, with the first being focused on <span style={{fontWeight: '600'}}>exploration and community,</span> and the second on <span style={{fontWeight: '600'}}>hacking for a cause.</span>
              <p></p>
            </div>

            <div className={styles.photo}>
              <img src="/images/hack/hack19.jpg"/>
            </div>
            <div className={styles.caption}>The HackMIT '19 team!</div>


            <div className={styles.description} style={{marginBottom: '20px'}}>
              To learn more about my time on HackMIT, check out the event websites for <a style={{textDecoration: 'underline', color: '#82BD1E'}}  href="https://archive.hackmit.org/2018">Hack '18</a> and <a style={{textDecoration: 'underline', color: '#82BD1E'}}  href="https://archive.hackmit.org/2019">Hack '19</a>, as well as the <a style={{textDecoration: 'underline', color: '#82BD1E'}}  href="https://medium.com/hackmit-stories">HackMIT Medium blog!</a>
            </div>

          </div>

        </section>


        <SlowLink href="/">
          <div className={`${styles.button} ${styles.grow}`}>
            <i className="fas fa-arrow-left fa-lg" style={{color: '#FFFFFF'}}></i>
            <div className={styles.backToWork}>back to work</div>
          </div>
        </SlowLink>

        </main>

      </Layout>

  )
}
