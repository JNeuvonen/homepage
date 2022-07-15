import React, { useEffect, useState } from 'react'
import { sortListOfObject } from '../../utils/general'
import { ChevronDown } from '../../utils/icons'
import Card from '../Card'
import Skill from '../Skill'
interface SkillType {
  skill: string
  stars: number
}

const SkillSection = ({
  title,
  array,
  darkMode,
}: {
  title: string
  array: SkillType[]
  darkMode: boolean
}) => {
  const [reverse, setReverse] = useState(false)

  const getSkillSection = (array: SkillType[]) => {
    return array.map((item, i) => {
      return (
        <Skill
          skill={item.skill}
          count={item.stars}
          key={i}
          darkMode={darkMode}
        />
      )
    })
  }

  const handleOnClick = () => {
    setReverse(!reverse)
  }

  array = sortListOfObject(array, reverse)

  return (
    <div className="home__box">
      <div className="flex-box align-items-center space-between">
        <h2 style={{ marginBottom: 10 }}>{title}</h2>
        <div
          className="cursor-pointer"
          onClick={handleOnClick}
          style={{ transform: reverse ? 'rotate(180deg)' : 'inherit' }}
        >
          <ChevronDown width={24} height={24} fill="white" />
        </div>
      </div>
      <div>{getSkillSection(array)}</div>
    </div>
  )
}
export default SkillSection
