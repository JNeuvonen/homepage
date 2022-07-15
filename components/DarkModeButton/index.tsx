import React, { useEffect, useState, useRef } from 'react'
import animationJSON from '../../assets/json/icons8-sun.json'
import lottie from 'lottie-web/build/player/lottie_light'
const DarkModeButton = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: Boolean
  setDarkMode: Function
}) => {
  const animationContainer = useRef(null)
  const anim: any = useRef(null)

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.toggle('light-theme')
    }
  }, [darkMode])

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationJSON,
      })

      anim.current.onEnterFrame = function (e: any) {
        if (e.currentTime > 17 && e.currentTime < 18 && e.direction === 1) {
          anim.current.stop()
          anim.current.goToAndStop(17, true)
          anim.current.setDirection(-1)
        }

        if (e.currentTime === 0) {
          anim.current.setDirection(1)
        }
      }

      return () => anim.current?.destroy()
    }
  }, [])

  return (
    <div
      className="lg-icon-button flex-box align-items-center top-right-corner"
      style={{ columnGap: 10 }}
      onClick={(e) => {
        e.preventDefault()
        anim.current.play()
        setDarkMode(!darkMode)
        localStorage.setItem('mode', darkMode ? 'light' : 'dark')
      }}
    >
      <div ref={animationContainer} style={{ width: 22, height: 22 }}></div>

      <div style={{ color: 'black', fontWeight: 700, fontSize: 14 }}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </div>
  )
}
export default DarkModeButton
