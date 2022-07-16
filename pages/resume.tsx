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
          <h3>Jun 2020 - Present</h3>
        </div>
      </div>
      <div className="resume__paragraph">
        I am studying Computer Science at the University of Helsinki and am an
        active learner in my free time. The fastest way for me to grow as a
        developer was through personal projects. Some of those personal projects
        are available on my Github page. Especially recently I have become much
        better software developer.
      </div>
      <h3>What I learned?</h3>
      <div className="resume__paragraph" style={{ padding: 20 }}>
        <ul style={{ marginTop: -15 }}>
          <li>
            I became condent that I could provide value in any part of the web
            development lifecycle.
          </li>
          <li style={{ marginTop: 15 }}>
            During this time, I also built an interest in the full development
            cycle of web applications. From the smallest details in an app's
            design, to state management, to the app's features, to responsive
            design, to backend or cloud, it all genuinely interests me.
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Resume
