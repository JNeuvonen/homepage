import '../style/css/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import React, { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true)

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
    if (darkMode) {
      document.body.classList.toggle('light-theme')
    } else {
    }
  }, [darkMode])
  return (
    <>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Component {...pageProps} darkMode={darkMode} />
      </Layout>
    </>
  )
}

export default MyApp
