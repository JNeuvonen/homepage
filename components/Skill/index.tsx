import React, { useState } from 'react'
import { COLOR_PRIMARY } from '../../utils/constants'
import { StarIcon } from '../../utils/icons'
const Skill = ({
  skill,
  count,
  darkMode,
}: {
  skill: string
  count: number
  darkMode: boolean
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="flex-box align-items-center space-between skill"
      style={{ columnGap: '10px' }}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <h3 style={{ fontSize: 22, color: hover ? 'white' : 'inherit' }}>
        {skill}
      </h3>
      <div>
        {[...Array(count)].map((e, i) => {
          return <StarIcon key={i} width={25} height={25} />
        })}
      </div>
    </div>
  )
}
export default Skill
