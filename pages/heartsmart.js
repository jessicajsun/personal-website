import Head from 'next/head'
import styles from '../components/heartsmart.module.css'
import Link from 'next/link'
import Layout from '../components/layout.js'
import SlowLink from '../utils/SlowLink.js'
import DelayLoop from '../utils/DelayLoop.js'

export default function HeartSmart(){

  return (
      <Layout>

        <Head>
          <title>heartsmart socks</title>
        </Head>

        <main>


        <section className={styles.topPanel}>

          <div className={styles.summary}>

            <div className={styles.title}>heartsmart socks.</div>

            <div className={styles.subtitle}>designing an app to prevent hospital readmission of heart failure patients.</div>

            <div className={styles.quickNotes}>

              {/* timeline */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#60E1FD'}}></i>
                    <i className="far fa-clock fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>winter '19</div>
              </div>

              {/* roles */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#60E1FD'}}></i>
                    <i className="fas fa-user fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>ux design, market research</div>
              </div>

              {/* tools */}
              <div className={styles.note}>
                <div className={styles.icon}>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x" style={{color: '#60E1FD'}}></i>
                    <i className="fas fa-wrench fa-stack-1x fa-lg fa-inverse"></i>
                  </span>
                </div>
                <div className={styles.noteText}>figma</div>
              </div>

            </div>

            {/* intro */}
            <div className={styles.description}>
            Heart failure, or the condition in which one’s heart cannot adequately pump blood through the body, causes one million hospitalizations every year and costs the U.S. $30.7 billion annually. Although research has shown that hospitalizations can be avoided with proper preventive care, <span style={{fontWeight: '600'}}>25% of patients still experience readmissions within 30 days of their initial release.</span>
            <p></p>
            Four other students and I decided to tackle this problem of hospital readmission as part of the BioMaker Design Workshop at MIT. After interviewing physicians, reading dozens of papers on heart failure prevention, and researching existing health monitoring devices, we found that <span style={{fontWeight: '600'}}>there are currently no devices able to both monitor heart health and identify if symptoms of worsening heart failure occur.</span>
            <p></p>
            Given that the majority of heart failure patients are over the age of 65, we wanted to design a solution that would be <span style={{fontWeight: '600'}}>easy-to-use, non-invasive, and low-cost.</span> Furthermore, we needed our device to measure <span style={{fontWeight: '600'}}>five key parameters in order to effectively monitor heart health:</span>
            <p></p>
            </div>

            {/* parameters circles */}
            <div className={styles.parameters}>

              {/* blood pressure */}
              <div className={styles.circle} style={{background: '#4CABFD'}}>
                  <div className={styles.parameterText}>blood pressure</div>
              </div>

              {/* heart rate */}
              <div className={styles.circle} style={{background: '#1660CF'}}>
                  <div className={styles.parameterText}>heart rate</div>
              </div>

              {/* swelling */}
              <div className={styles.circle} style={{background: '#7BBEF8'}}>
                  <div className={styles.parameterText}>swelling</div>
              </div>

              {/* bioimpedance */}
              <div className={styles.circle} style={{background: '#148DF4'}}>
                  <div className={styles.parameterText}>bioimpedance</div>
              </div>

              {/* temperature */}
              <div className={styles.circle} style={{background: '#0D3D86'}}>
                  <div className={styles.parameterText}>temperature</div>
              </div>

            </div>


            {/*heartsmart socks intro*/}
            <div className={styles.description}>
            With all of these factors in mind, we created <span style={{fontWeight: '600'}}>HeartSmart Socks, a pair of socks with built-in sensors to monitor heart health on a daily basis.</span> Along with the socks, I designed a companion app that not only stores readings, but also helps patients identify a significant decline in their own heart health. This gives patients time to meet with their doctor and adjust their medication to prevent hospitalization. When designing the app, <span style={{fontWeight: '600'}}>I focused on features that would streamline self-care for elderly heart failure patients:</span>
            <p></p>
            </div>


            {/* features circles */}
            <div className={styles.featuresFirstRow}>

              {/* account setup */}
              <div className={styles.featureCircle} style={{background: '#4CABFD'}}>
                  <i class="fas fa-user-circle fa-inverse"></i>
                  <div className={styles.sectionText}>simple<br></br>account setup</div>
              </div>

              {/* personalized recommendations */}
              <div className={styles.featureCircle} style={{background: '#7BBEF8'}}>
                  <i class="fas fa-notes-medical fa-inverse"></i>
                  <div className={styles.sectionText}>personalized recommendations</div>
              </div>

              {/* medication reminders */}
              <div className={styles.featureCircle} style={{background: '#0D3D86'}}>
                  <i class="fas fa-tablets fa-inverse"></i>
                  <div className={styles.sectionText}>medication reminders</div>
              </div>

            </div>


            <div className={styles.featuresSecondRow}>

              {/* real-time readings */}
              <div className={styles.featureCircle} style={{background: '#1660CF'}}>
                  <i class="fas fa-chart-line fa-inverse"></i>
                  <div className={styles.sectionText}>real-time<br></br>readings</div>
              </div>

              {/* companion check-ins */}
              <div className={styles.featureCircle} style={{background: '#148DF4'}}>
                  <i class="fas fa-user-friends fa-inverse"></i>
                  <div className={styles.sectionText}>companion<br></br>check-ins</div>
              </div>

            </div>


            {/* demo */}
            <div className = {styles.featureTitle}> demo. </div>

            <div className={styles.photo}>
              <video muted controls>
                  <source src="/heartsmart/demo.mp4"
                    type="video/mp4">
                  </source>
              </video>
            </div>

            <div className = {styles.featureTitle}> features. </div>

            {/* simple account setup */}
            <div className = {styles.featureText}>
                <div className = {styles.blurbMargins}>
                  <div className = {styles.featureSubtitle}> simple account setup. </div>
                  <p></p>
                  <div className = {styles.featureDescription}> Since using technology can be challenging for the elderly, I wanted patients to get started with HeartSmart in a quick and easy process. <span style={{fontWeight: '600'}}>The setup requires only a few important personal details, including full name, date of birth, and physician information.</span>
                  <p></p>
                  <span style={{fontWeight: '600'}}>The app also asks patients about their pre-existing heart conditions.</span> Users can choose from common causes of heart failure, such as hypertension or coronary artery disease, or severe events like heart attack or stroke. This information allows the app to make informed recommendations on patient progress.
                  </div>
                </div>
              <div className = {styles.featureDemo}>
                <DelayLoop>
                    <source src="/heartsmart/setup.mp4"
                      type="video/mp4">
                    </source>
                </DelayLoop>
              </div>
            </div>

            {/* real-time readings and personalized recommendations */}
            <div className = {styles.featureText}>
                <div className = {styles.blurbMargins}>
                  <div className = {styles.featureSubtitle}>real-time readings.</div>
                  <p></p>
                  <div className = {styles.featureDescription}> Along with recording readings, <span style={{fontWeight: '600'}}>the app’s home screen displays live measurements and a weekly summary on all five parameters.</span> Tapping on a specific parameter takes patients to <span style={{fontWeight: '600'}}>a graph that details how readings have changed across weeks or months.</span>
                  </div>
                  <p></p>
                  <div className = {styles.recSubtitle}> personalized recommendations. </div>
                  <p></p>
                  <div className = {styles.featureDescription}>If a patient’s readings aren’t within the normal range, <span style={{fontWeight: '600'}}>the app suggests next steps to improve their heart health.</span> Examples of recommendations include talking to their doctor to adjust their medication, exercising regularly, and in the case of rapidly worsening symptoms, going to appropriate nearby medical care.
                  </div>
                </div>
              <div className = {styles.featureDemo}>
                <DelayLoop>
                    <source src="/heartsmart/readings_recs.mp4"
                      type="video/mp4">
                    </source>
                </DelayLoop>
              </div>
            </div>

            {/* companion check-ins */}
            <div className = {styles.featureText}>
                <div className = {styles.blurbMargins}>
                  <div className = {styles.featureSubtitle}> companion check-ins. </div>
                  <p></p>
                  <div className = {styles.featureDescription}> It can be difficult for elderly patients to remember to take their medicine or wear their socks regularly. Therefore, <span style={{fontWeight: '600'}}>I added a companion feature for spouses, siblings, or young adult children to monitor their loved one’s readings.</span> Giving family members an easy way to check-in improves medication adherence and helps patients feel less alone when working on their self-care.
                  </div>
                </div>
                  <div className = {styles.featureDemo}>
                    <DelayLoop>
                        <source src="/heartsmart/companion.mp4"
                          type="video/mp4">
                        </source>
                    </DelayLoop>
                </div>
            </div>

            {/* medication reminders */}
            <div className = {styles.featureText} style={{marginBottom: '15px'}}>
                <div className = {styles.blurbMargins}>
                  <div className = {styles.featureSubtitle}> medication reminders. </div>
                  <p></p>
                  <div className = {styles.featureDescription}>Given that taking prescribed medication is perhaps the most effective way to prevent hospitalization, <span style={{fontWeight: '600'}}>I designed the app to notify patients when it’s time to take their medicine every day.</span> If they aren’t able to take the medicine immediately, they can reset the reminder to alert them in an hour or two.
                  <p></p>
                  Both patients and physicians can add new medications directly into the app. <span style={{fontWeight: '600'}}>Each medication includes fields to write down the dose, purpose, and any additional notes the doctor might have.</span> This way, if a patient forgets how much to take, they can easily find it in the app.
                  </div>
                </div>
                <div className = {`${styles.featureDemo} ${styles.mobile}`}>
                <DelayLoop>
                    <source src="/heartsmart/meds_merged.mp4"
                      type="video/mp4">
                    </source>
                </DelayLoop>
                </div>
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
