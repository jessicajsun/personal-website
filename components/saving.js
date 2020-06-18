{/* PROJECTS */}
<main>
  <div className={styles.titles} style={{top: "1321px"}}>what i've made.</div>


  {/* hackmit */}
  <img src="/images/projects/hackmit.svg" className={`${styles.rectangle} ${styles.hackRect} ${styles.grow}`}/>
  <div className={`${styles.captions} ${styles.hackmit}`}>HackMIT</div>


  {/* kelp */}
  <div className={`${styles.rectangle} ${styles.kelpRect} ${styles.grow}`}>
    <img src="/images/projects/kelp.svg" className={styles.kelpIcon}/>
  </div>
  <div className={`${styles.captions} ${styles.kelp}`}>Kelp</div>


  {/* dash */}
  <div className={`${styles.rectangle} ${styles.dashRect} ${styles.grow}`}>
    <img src="/images/projects/dash.svg" className={styles.dashIcon}/>
  </div>
  <div className={`${styles.captions} ${styles.dash}`}>Morning Dashboard</div>

  {/* heartsmart socks */}
  <div className={`${styles.rectangle} ${styles.heartRect} ${styles.grow}`}>
    <img src="/images/projects/heartsmart.svg" className={styles.heartIcon}/>
  </div>
  <div className={`${styles.captions} ${styles.heart}`}>HeartSmart Socks</div>

  {/* smart alarm */}
  <div className={`${styles.rectangle} ${styles.alarmRect} ${styles.grow}`}>
      <img src="/images/projects/alarm.svg" className={styles.alarmIcon}/>
  </div>
  <div className={`${styles.captions} ${styles.alarm}`}>Smart Alarm</div>


  <footer className={styles.banner}>connect with me!
    <span style={{fontWeight: "normal", fontSize: "20px", lineHeight: "25px"}}> I’m always down to chat over a nice cup of tea.</span>
  </footer>

  <a href="mailto:jessjs@mit.edu">
    <img src="/images/socials/mail.svg" className={styles.socials} style={{left: "438px"}}/>
  </a>

  <a href="https://www.linkedin.com/in/jessicajsun/">
    <img src="/images/socials/linkedin.svg" className={styles.socials} style={{left: "569px"}}/>
  </a>

  <a href="https://www.instagram.com/jessjsun/">
    <img src="/images/socials/instagram.svg" className={styles.socials} style={{left: "700px"}}/>
  </a>

  <a href="https://www.facebook.com/jessjsun">
    <img src="/images/socials/facebook.svg" className={styles.socials} style={{left: "831px"}} onMouseOver={styles.socials}/>
  </a>

  <a href="https://github.com/jessicajsun">
    <img src="/images/socials/github.svg" className={styles.socials} style={{left: "962px"}}/>
  </a>





  <section>

    <div className={styles.titles}>what i've made.</div>

    <div className={styles.threeitemrow}>

      {/* hackmit */}
      <div className={styles.item}>
        <div className={`${styles.rectangle} ${styles.hackRect} ${styles.grow}`}>
          <img src="/images/projects/hackmit.svg"/>
        </div>
        <div className={styles.captions}>HackMIT</div>
      </div>

      {/* kelp */}
      <div className={styles.item}>
        <div className={`${styles.rectangle} ${styles.kelpRect} ${styles.grow}`}>
          <img src="/images/projects/kelp.svg"/>
        </div>
        <div className={styles.captions}>Kelp</div>
      </div>

      {/* dashboard */}
      <div className={styles.item}>
        <div className={`${styles.rectangle} ${styles.dashRect} ${styles.grow}`}>
          <img src="/images/projects/dash.svg"/>
        </div>
        <div className={styles.captions}>Morning Dashboard</div>
      </div>

    </div>

    <div className={styles.threeitemrow}>

      {/* heartsmart socks */}
      <div className={styles.item}>
        <div className={`${styles.rectangle} ${styles.heartRect} ${styles.grow}`}>
          <img src="/images/projects/heartsmart.svg" className={styles.heartIcon}/>
        </div>
        <div className={styles.captions}>HeartSmart Socks</div>
      </div>

      {/* smart alarm */}
      <div className={styles.item}>
        <div className={`${styles.rectangle} ${styles.alarmRect} ${styles.grow}`}>
            <img src="/images/projects/alarm.svg" className={styles.alarmIcon}/>
        </div>
        <div className={styles.captions}>Smart Alarm</div>
      </div>


    </div>

  </section>
