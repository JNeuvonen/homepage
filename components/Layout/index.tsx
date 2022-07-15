import styles from '../../style/css/blur.module.css'
import { LayoutProps } from '../../utils/interfaces/returns'
import Footer from '../Footer'
import InfoMessage from '../InfoMessage'
import Nav from '../Nav'
const Layout = (props: LayoutProps) => {
  return (
    <div className="layout">
      <Nav />
      <div className={styles.blur} id="blur"></div>
      <div className="layout__content">{props.children}</div>

      <InfoMessage
        content={props.infoMessage}
        type={props.infoMessageType}
        updateInfoMessage={props.updateInfoMessage}
      />
      <Footer darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
    </div>
  )
}

export default Layout
