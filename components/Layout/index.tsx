import React from 'react'
import { LayoutProps } from '../../utils/interfaces/returns'
import Nav from '../Nav'
import styles from '../../style/css/blur.module.css'
import Footer from '../Footer'
const Layout = (props: LayoutProps) => {
  return (
    <div className="layout">
      <Nav />
      <div className={styles.blur} id="blur"></div>
      <div className="layout__content">{props.children}</div>

      <Footer darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
    </div>
  )
}

export default Layout
