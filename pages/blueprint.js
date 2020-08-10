import Head from 'next/head'
import styles from '../components/blueprint.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function SmartAlarm(){

  return (
      <Layout>

        <Head>
          <title>blueprint</title>
        </Head>

        <main>


        <section className={styles.topPanel}>

          {/* all components other than border */}
          <div className={styles.summary}>

            <div className={styles.title}>blueprint.</div>

            <div className={styles.subtitle}>organizing MIT’s learnathon and hackathon for high school students.</div>

            <div className={styles.quickNotes}>

              {/* timeline */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#34BAC8'}}></i>
                    <i className="far fa-clock fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>winter '17 - winter '19</div>
              </div>

              {/* roles */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#34BAC8'}}></i>
                    <i className="fas fa-user fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>logistics, marketing</div>
              </div>

              {/* tools */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#34BAC8'}}></i>
                    <i className="fas fa-wrench fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>asana, slack, adobe creative suite</div>
              </div>

            </div>

            {/* recap */}
            <div className={styles.description}>
              Along with planning HackMIT every year, the HackMIT team also organizes <span style={{fontWeight: '600'}}>Blueprint, a weekend-long learnathon and hackathon for local high school students held on MIT’s campus.</span> Students spend the first day participating in hands-on workshops taught by MIT students and industry professionals on programming fundamentals, web programming, or Arduino. The next day, they put their new skills to practice by forming a team and building a project from scratch. For many high schoolers, Blueprint takes them from having never coded before to developing a full-fledged project by the end of the event.
              <p></p>
            </div>

            <div className={styles.photoTopRow}>
              <img className={styles.column} src="/images/blueprint/web.jpg"/>
              <img className={styles.column} src="/images/blueprint/arduino.jpg"/>
            </div>

            <div className={styles.photoBottomRow}>
              <img className={styles.column} src="/images/blueprint/tim.jpg"/>
              <img className={styles.column} src="/images/blueprint/hacking.jpg"/>
            </div>

            <div className={styles.description}>
              Before coming to MIT, I had never attended a hackathon or used computer science to build my own project. The computer science club at school was almost entirely made up of boys who had been coding for years, causing me to feel intimidated and out of place at their weekly meetings.
              <p></p>
              Therefore, when I became Logistics Director for my first Blueprint, <span style={{fontWeight: '600'}}>one of my main goals was making the hackathon more beginner-friendly.</span> I knew firsthand how overwhelming coding might initially seem, and I wanted to create an welcoming and supportive environment for our attendees. I visited local high schools and encouraged students historically underrpresented in tech to apply. I worked with our DevOps and Marketing teams to develop <a style={{textDecoration: 'underline', color: '#34BAC8'}} href="https://starthacking.org/">StartHacking</a>, which combined an in-person curriculum with online resources to help students start building software projects.
            </div>

            <div className={styles.photo}>
              <img src="/images/blueprint/bp18.jpg"/>
            </div>
            <div className={styles.caption}>The Blueprint '18 team!</div>

            <div className={styles.description}>
              Once I became co-director, I continued to add more engaging aspects to Blueprint. We held an <span style={{fontWeight: '600'}}>activites expo</span> for high schoolers to meet other clubs and programs they could get involved with and ran an <span style={{fontWeight: '600'}}>MIT student panel</span> so attendees could ask questions about computer science, college, and working in tech. Watching the high school students get excited about their project and eagerly interact with our mentors always served as a reminder to me of just how bright the future of tech is.
              <p></p>
            </div>

            <div className={styles.photo}>
              <img src="/images/blueprint/bp19.jpg"/>
            </div>
            <div className={styles.caption}>The Blueprint '19 team!</div>


            <div className={styles.description} style={{marginBottom: '20px'}}>
              To learn more about Blueprint, check out the event websites for <a style={{textDecoration: 'underline', color: '#34BAC8'}} href="https://blueprint.hackmit.org/2018">Blueprint ‘18</a> and <a style={{textDecoration: 'underline', color: '#34BAC8'}} href="https://blueprint.hackmit.org/2019">Blueprint ’19!</a>
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
