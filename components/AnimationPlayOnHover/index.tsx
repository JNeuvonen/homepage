import React, { useEffect, useState, useRef } from 'react'
import lottie from 'lottie-web/build/player/lottie_light'

const AnimationPlayOnHover = ({
  animJSON,
  width,
  height,
}: {
  animJSON: object
  width: number
  height: number
}) => {
  const animationContainer = useRef(null)
  const anim: any = useRef(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (animationContainer.current) {
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData: animJSON,
      })

      return () => anim.current?.destroy()
    }
  }, [])

  useEffect(() => {
    if (hover) {
      anim.current.play()
    } else {
      anim.current.stop()
    }
  }, [hover])

  return (
    <div
      ref={animationContainer}
      style={{ width: 35, height: 35 }}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    ></div>
  )
}
export default AnimationPlayOnHover
