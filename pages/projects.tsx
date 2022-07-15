import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import coinflipduelPng from '../assets/images/coinflipduel.png'
import Image from 'next/image'
const Projects = () => {
  const projects = [
    {
      name: 'Coinflip.app',
      githubUrl: 'https://github.com/JNeuvonen/coinflipduel',
      description: (
        <>
          <h3 style={{ marginBottom: 5 }}>Description</h3>
          <p>
            Have you ever wanted to flip a coin for fake money in a very
            deterministic way? Well... here you go.
          </p>

          <br />
          <p>
            This was a proof of concept type of a project for me. I just wanted
            to see myself how easy it is to develope applications using current
            state web3 technologies.
          </p>
          <h3 style={{ marginTop: 10 }}>Technologies used</h3>
          <span>
            React, Next, Redux, SCSS, Web3 (npm package), Solidity, Mocha
          </span>
        </>
      ),
      picture: coinflipduelPng,
    },

    {
      name: 'Track ARK Flow',
      githubUrl: 'https://github.com/JNeuvonen/ark-flows',
      description: (
        <>
          <h3 style={{ marginBottom: 5 }}>Description</h3>
          <p>
            ARK ETF is the biggest publicly traded actively managed ETF fund.
            ETF funds have to disclose their positions before every trading day.
            This presents a fun opportunity for visualizing ARK's position
            changes from day to day and their longer term strategy. It was one
            my first front-end projects when I was much weaker front-end
            developer.
          </p>

          <br />
          <p></p>
          <h3 style={{ marginTop: 10 }}>Technologies used</h3>
          <span>React, Redux, SCSS, Node, Express, MongoDB, AWS</span>
        </>
      ),
      picture: coinflipduelPng,
    },

    {
      name: 'Impermanent Loss Calc',
      githubUrl: 'https://github.com/JNeuvonen/impermanent-loss-calculator',
      description: (
        <>
          <h3 style={{ marginBottom: 5 }}>Description</h3>
          <p>
            Personal project that I used to practice responsive design, design
            overall (how to code CSS, so things don't look utterly terrible),
            keeping code more readable & modular, and also just to level-up my
            front-end development skills. I have come long way since.
          </p>

          <br />
          <p></p>
          <h3 style={{ marginTop: 10 }}>Technologies used</h3>
          <span>React, MUI, SCSS, Recharts, Redux</span>
        </>
      ),
      picture: coinflipduelPng,
    },

    {
      name: 'Asunnon Arvo',
      githubUrl: 'https://github.com/JNeuvonen/asunnon-arvo',
      description: (
        <>
          <h3 style={{ marginBottom: 5 }}>Description</h3>
          <p>
            This is a short personal toy project that I started with my friend
            for fun. My friend is a realtor (doesn't do programming) and he
            asked me to program this site. It's a completely static website that
            sends out email to my friend's email account if a user fills out the
            form. It was a great project for practicing UX/UI.
          </p>

          <br />
          <p></p>
          <h3 style={{ marginTop: 10 }}>Technologies used</h3>
          <span>React, SCCS</span>
        </>
      ),
      picture: coinflipduelPng,
    },
  ]
  return (
    <div className="projects">
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Projects</h1>
      <div className="projects__grid">
        {projects.map((item) => {
          return <ProjectCard key={item.name} project={item}></ProjectCard>
        })}
      </div>
    </div>
  )
}

export default Projects
