import React, { useEffect, useState } from 'react'
const Resume = () => {
  return (
    <div className="resume">
      <h2>Experience</h2>
      <div
        className="flex-box space-between flex-wrap"
        style={{ marginTop: 15 }}
      >
        <div>
          <h3>Student</h3>
        </div>
        <div>
          <h3>Sept 2020 - Present</h3>
        </div>
      </div>
      <div className="resume__paragraph">
        I am studying Computer Science at the University of Helsinki and am an
        active learner in my free time. The fastest way for me to grow as a
        developer was through personal projects. Some of those personal projects
        are available on my Github page. Especially recently I have become much
        better frontend developer.
      </div>
      <h3>What I learned?</h3>
      <div className="resume__paragraph" style={{ padding: 20 }}>
        <ul style={{ marginTop: -15 }}>
          <li>
            I became confident that I could provide value in any part of the web
            development lifecycle.
          </li>
          <li style={{ marginTop: 15 }}>
            During this time, I also built an interest in the full development
            cycle of web applications. From the smallest details in an
            app&apos;s design, to state management, to the app&apos;s features,
            to responsive design, to backend or cloud, it all genuinely
            interests me.
          </li>
        </ul>
      </div>
      <div
        className="flex-box space-between flex-wrap"
        style={{ marginTop: 15 }}
      >
        <div>
          <h3>Professional Poker Player</h3>
        </div>
        <div>
          <h3>Jun 2015 - Jun 2020</h3>
        </div>
      </div>
      <div className="resume__paragraph">
        <p>
          Something that started as a hobby and ended up as my profession. I
          have always enjoyed games, thrill, and competition. Poker has major
          elements of all three of those.
        </p>

        <br />
        <p>
          For a long time, playing poker was an intense passion for me. Based on
          my results, my skill level peaked during the years 2019 and 2020, when
          I was among the top 0.1% of all online poker professionals.
        </p>
      </div>
      <h3>How was it beneficial for me?</h3>
      <div className="resume__paragraph" style={{ padding: 20 }}>
        <ul style={{ marginTop: -15 }}>
          <li>
            I got financial freedom and realized it takes a lot of effort to get
            good at anything. I also improved in analytical thinking, stress
            tolerance, and emotional control.
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Resume
