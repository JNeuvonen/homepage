import { useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import picture from '../assets/images/BE049F05-7677-43ED-835E-127B6FAC5CC4.jpg'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Skill from '../components/Skill'
import { ChevronDown } from '../utils/icons'
import SkillSection from '../components/SkillSection'
import { LayoutProps } from '../utils/interfaces/returns'

interface SkillType {
  skill: string
  stars: number
}

const Home = (props: LayoutProps) => {
  const px1000 = useMediaQuery('(max-width:700px')
  const [mounted, setMounted] = useState(false)
  const programmingLanguages = [
    { skill: 'Javascript', stars: 5 },
    { skill: 'TypeScript', stars: 5 },
    { skill: 'Python', stars: 4 },
    { skill: 'Java', stars: 4 },
    { skill: 'SQL', stars: 4 },
    { skill: 'Haskell', stars: 3 },
    { skill: 'Rust', stars: 3 },
    { skill: 'Solidity', stars: 3 },
  ]

  const programmingSkills = [
    { skill: 'React', stars: 5 },
    { skill: 'Next.js', stars: 5 },
    { skill: 'HTML/CSS', stars: 5 },
    { skill: 'Algorithms', stars: 5 },
    { skill: 'Git', stars: 4 },
    { skill: 'SASS/SCSS', stars: 4 },
    { skill: 'UI/UX', stars: 4 },
    { skill: 'Node.js', stars: 4 },
    { skill: 'MongoDB', stars: 4 },
    { skill: 'SEO', stars: 3 },
    { skill: 'AWS', stars: 3 },
  ]

  const languages = [
    {
      skill: 'English',
      stars: 5,
    },

    {
      skill: 'Finnish',
      stars: 5,
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="home">
      <Head>
        <title>Jarno Neuvonen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home__profile">
        <h1 style={{ marginBottom: 10 }}>Profile</h1>
        <h3>Full Stack Developer</h3>
      </div>
      <hr />

      {mounted && (
        <div className="home__about-me">
          <div className="flex-box profile" style={{ columnGap: '30px' }}>
            <div style={{ flexBasis: '100%' }}>
              <div style={{ marginTop: '10px', fontSize: 16 }}>
                <h2 style={{ fontSize: '25px' }}>About me</h2>
                <p style={{ marginTop: 15 }}>
                  I am a student and active programmer looking to land my first
                  internship or junior position.
                </p>
                <p style={{ marginTop: 10 }}>
                  Most of my programming time goes to developing web
                  applications, but I am also very much interested in computers
                  and programming in general. All subjects related to software
                  fascinate me, be it frontend, backend, math, algorithms,
                  data-driven things, security, UI/UX, infrastructure/cloud I am
                  always eager to improve my knowledge.
                </p>
                <p style={{ marginTop: 10 }}>
                  Despite not having previous formal work experience, I believe
                  I am easy to get along and work with.
                </p>
              </div>
            </div>
            <div
              style={{
                overflow: 'hidden',
                maxWidth: px1000 ? '100%' : 250,
                marginTop: 20,
                minWidth: px1000 ? '100%' : 250,
              }}
            >
              <Image
                src={picture}
                layout="intrinsic"
                alt="Me.jpg"
                style={{
                  borderRadius: '30px',
                  border: '2px solid white',
                }}
              ></Image>
            </div>

            <div style={{ flexBasis: '100%' }}>
              <p style={{ marginTop: '10px', fontSize: 16 }}>
                <h2 style={{ fontSize: '25px' }}>Details</h2>
              </p>
              <p style={{ fontSize: 18, fontWeight: 800, marginTop: 15 }}>
                Name
              </p>
              <p style={{ fontSize: 18 }}>Jarno Neuvonen</p>
              <p style={{ fontSize: 18, fontWeight: 800, marginTop: 15 }}>
                Age
              </p>
              <p style={{ fontSize: 18 }}>26 years</p>
              <p style={{ fontSize: 18, fontWeight: 800, marginTop: 15 }}>
                Location
              </p>
              <p style={{ fontSize: 18 }}>Helsinki, Finland</p>
              <p style={{ fontSize: 18, fontWeight: 800, marginTop: 15 }}>
                Experience
              </p>
              <p style={{ fontSize: 18 }}>4 years</p>
            </div>
          </div>
        </div>
      )}

      <hr />
      <div className="home__abilities">
        <SkillSection
          title="Programming Lanuages"
          array={programmingLanguages}
          darkMode={props.darkMode}
        />
        <SkillSection
          title="Frameworks & Tools & Skills"
          array={programmingSkills}
          darkMode={props.darkMode}
        />

        <SkillSection
          title="Languages"
          array={languages}
          darkMode={props.darkMode}
        />
      </div>
    </div>
  )
}

export default Home
