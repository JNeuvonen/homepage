import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../style/css/globals.css'
import { disableInfoMessage, enableInfoMessage } from '../utils/css'

function MyApp({ Component, pageProps, ...props }: AppProps) {
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
    updateInfoMessage('You should hire me!', 15000, 'success')
  }, [])

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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
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
