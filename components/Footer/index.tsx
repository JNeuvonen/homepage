import React, { useEffect, useState } from 'react'
import twtrJSON from '../../assets/json/icons8-twitter.json'
import linkedinJSON from '../../assets/json/icons8-linkedin-circled.json'
import youtubeJSON from '../../assets/json/icons8-youtube-logo.json'
import gmailJSON from '../../assets/json/icons8-gmail-logo.json'
import AnimationPlayOnHover from '../AnimationPlayOnHover'
import DarkModeButton from '../DarkModeButton'
const Footer = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean
  setDarkMode: Function
}) => {
  return (
    <footer className="footer">
      <hr />
      <h3 style={{ marginBottom: 25, marginTop: 55 }}>Connect with me</h3>
      <div className="flex-box align-items-center" style={{ columnGap: 10 }}>
        <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
      <div
        className="flex-box content-center flex-wrap"
        style={{ columnGap: '15px' }}
      >
        <a
          className="flex-box align-items-center link-cancel-default"
          style={{ columnGap: '10px' }}
          href="https://twitter.com/jneuv1"
          target={'_blank'}
          rel="noreferrer"
        >
          <AnimationPlayOnHover animJSON={twtrJSON} width={35} height={35} />
          <span>Twitter</span>
        </a>
        <a
          className="flex-box align-items-center link-cancel-default"
          style={{ columnGap: '10px' }}
          href="https://www.linkedin.com/in/jarno-neuvonen-0a1617233/"
          target={'_blank'}
          rel="noreferrer"
        >
          <AnimationPlayOnHover
            animJSON={linkedinJSON}
            width={35}
            height={35}
          />
          <span>LinkedIn</span>
        </a>

        <a
          className="flex-box align-items-center link-cancel-default"
          style={{ columnGap: '10px' }}
          href="https://www.youtube.com/channel/UCtpU_GwWlQkWOzT2zgkSI3g"
          target={'_blank'}
          rel="noreferrer"
        >
          <AnimationPlayOnHover animJSON={youtubeJSON} width={35} height={35} />
          <span>YouTube</span>
        </a>
      </div>
    </footer>
  )
}
export default Footer
