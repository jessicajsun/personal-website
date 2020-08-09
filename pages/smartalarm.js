import Head from 'next/head'
import styles from '../components/smartalarm.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'

export default function SmartAlarm(){

  return (
      <Layout>

        <Head>
          <title>smart alarm.</title>
        </Head>

        <main>


        <section className={styles.topPanel}>

          {/* all components other than border */}
          <div className={styles.summary}>

            <div className={styles.title}>smart alarm.</div>

            <div className={styles.subtitle}>using user movements and sounds to customize snooze length.</div>

            <div className={styles.quickNotes}>

              {/* timeline */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#43DFC3'}}></i>
                    <i className="far fa-clock fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>spring '19</div>
              </div>

              {/* roles */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#43DFC3'}}></i>
                    <i className="fas fa-user fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>embedded systems, backend</div>
              </div>

              {/* tools */}
              <div className={`${styles.note} ${styles.noWrap}`}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#43DFC3'}}></i>
                    <i className="fas fa-wrench fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>arduino, c++, sql, python</div>
              </div>

            </div>

            {/* recap */}
            <div className={styles.description}>
              Waking up on time can be difficult for college students, especially after a long night of studying or hanging out with friends. Even after setting multiple alarms, we tend to hit snooze over and over again, causing us to wake up late and dash to class.
              <p></p>
              Three friends and I decided to build a better, responsive alarm as our final project in MIT’S Interconnected Embedded Systems course. <span style={{fontWeight: '600'}}>We wanted our alarm to be based on the user’s actual movements and sounds instead of user input.</span> We built the alarm using Arduino parts, including an audio player to play alarm sounds, an IMU motion sensor to sense movement, and a microphone to capture user phrases when they want to turn the alarm off.
              <p></p>
            </div>

            <div className={styles.photo}>
              <img src="/images/alarm/full_system_diagram.jpg"/>
              <div className={styles.diagramCaption}>System diagram.</div>
            </div>

            <div className={styles.photo}>
              <img src="/images/alarm/system_block_diagram.png"/>
              <div className={styles.designCaption}>System design.</div>
            </div>

            <div className={styles.description}>
              Our smart alarm functions similar to setting an alarm on your phone. Users can set new alarm times, select from previously used times, or remove old alarms. They can also choose from a list of alarm sounds and snooze the alarm when it goes off. However, several key distinctions make our alarm “smarter” than the standard clock.
              <p></p>
              First, we implemented two features to <span style={{fontWeight: '600'}}>encourage the user to wake up when the alarm is ringing:</span> the volume of the chosen song increases the longer the user lets the alarm ring and connected motors vibrate according to the beat of the song.
              <p></p>
            </div>

            <div className={styles.video}>
              <iframe class={styles.responsive} src="https://www.youtube.com/embed/fvj2-Udykzo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={styles.videoCaption}>Motor vibrates to alarm song.</div>

            <div className={styles.description}>
              Second, <span style={{fontWeight: '600'}}>we used sensor data to determine if the user is awake.</span> Since the alarm’s IMU sensor measures the tilt of the breadboard, we set thresholds to indicate whether the user has rotated the alarm towards them enough to see the time. If they have, the microphone will wait for the user to say an awake phrase (“I’m awake,” “Turn off,” etc.). Once the user says an awake phrase loud enough, the alarm considers the user to be fully awake and displays an inspirational quote.
              <p></p>
            </div>

            <div className={styles.video}>
              <iframe class={styles.responsive} src="https://www.youtube.com/embed/4V6Hi8Axy1w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={styles.videoCaption}>User says awake phrase and turns off alarm.</div>


            <div className={styles.description}>
              Finally, if the snooze button is pushed instead, <span style={{fontWeight: '600'}}>the system will add a new alarm time depending on how much noise the user has made and how much the user has moved.</span> The higher the sensor readings are, the more time is added to their snooze time. This is based off of the assumption that if they are moving a lot, they are likely close to waking and are rewarded with a longer snooze.
              <p></p>
            </div>

            <div className={styles.video}>
              <iframe class={styles.responsive} src="https://www.youtube.com/embed/5vfCy2eAHmo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={styles.videoCaption}>Creating next alarm time after pressing snooze.</div>

            <div className={styles.description} style={{marginBottom: '20px'}}>
              To read more about the Arduino and server-side code or watch videos of the alarm in action, check out <a style={{textDecoration: 'underline', color: '#3EB9A3'}}  href="https://iesc.io/S19_final_projects/team_26/608_smart_alarm_team_26.html">our project’s website!</a>
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
