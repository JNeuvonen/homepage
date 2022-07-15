import '../style/css/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import React, { useEffect, useState } from 'react'
import { disableInfoMessage, enableInfoMessage } from '../utils/css'
import { info } from 'console'

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true)
  const [infoMessage, setInfoMessage] = useState<null | string>(null)
  const [infoMessageTimeout, setInfoMessageTimeout] = useState<null | number>(
    null
  )
  const [infoMessageType, setInfoMessageType] = useState<string>('success')

  const updateInfoMessage = (
    message: string,
    timeout: number,
    type: string
  ) => {
    setInfoMessage(message)
    setInfoMessageTimeout(timeout)
    setInfoMessageType(type)
  }

  useEffect(() => {
    const darkModeHelper = localStorage.getItem('mode')
    if (darkModeHelper === 'dark') {
      setDarkMode(true)
    } else {
      setDarkMode(false)
      document.body.classList.toggle('light-theme')
    }
  }, [])

  useEffect(() => {
    if (infoMessage) {
      enableInfoMessage()
      let timeOut: ReturnType<typeof setTimeout>
      timeOut = setTimeout(
        disableInfoMessage,
        !infoMessageTimeout ? 60000 : infoMessageTimeout
      )
    } else {
      disableInfoMessage()
    }
  }, [infoMessage, infoMessageTimeout])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.toggle('light-theme')
    } else {
    }
  }, [darkMode])
  return (
    <>
      <Layout
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        infoMessage={infoMessage}
        infoMessageTimeout={infoMessageTimeout}
        setInfoMessage={setInfoMessage}
        setInfoMessageTimeout={setInfoMessageTimeout}
        infoMessageType={infoMessageType}
        updateInfoMessage={updateInfoMessage}
      >
        <Component
          {...pageProps}
          darkMode={darkMode}
          updateInfoMessage={updateInfoMessage}
        />
      </Layout>
    </>
  )
}

export default MyApp
