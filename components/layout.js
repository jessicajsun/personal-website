import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function ActiveLink({ children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={router.pathname === href ? styles.menuActive : styles.menuInactive}>
      {children}
    </a>
  )
}

export const siteTitle = 'Jessica Sun'

export default class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state={isMenuOpen: false};

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }

  render() {

    let tabClassName = `${styles.tab} ${this.state.isMenuOpen ? "" : styles.navClosed}`;

    let menuButton =
      <div className={styles.menu}>
        <span className="fa-stack">
          <i className="fas fa-bars fa-stack-1x"></i>
        </span>
      </div>;

  return (
    <React.Fragment>
      <div className={styles.grayRectangle}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>


      <Head>
        <link rel="icon" href="favicon.ico"/>
        <title>Jessica Sun</title>

        <meta
          name="description"
          content="Jessica Sun"
        />

        <meta property="og:title" content="Jessica Sun" key="title" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170720179-1"/>

        <script
          dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-170720179-1');
              `,
          }}
        />
      </Head>

      {/* top bar */}
      <nav>

        <ul className={styles.navBar}>
          <li className={styles.name}><Link href="/">Jessica Sun</Link></li>
          <div onClick={this.menuToggle}>
            {menuButton}
          </div>

          <ul className={`${styles.navItems} ${this.state.isMenuOpen ? `${styles.fadeIn} ${styles.shadow}` : ""}`}>
            <li className={tabClassName}><ActiveLink href="/">About</ActiveLink></li>
            <li className={tabClassName}><ActiveLink href="/work">Work</ActiveLink></li>
            <li className={`${tabClassName}`}><ActiveLink href="/Jessica Sun.pdf">Resume</ActiveLink></li>
          </ul>
        </ul>

      </nav>

        {this.props.children}
      </React.Fragment>
  );
  }
}
