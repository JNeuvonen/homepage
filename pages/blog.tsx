import { Tooltip } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import weekend from '../assets/images/weekend.png'
const Blog = () => {
  const blogs = [
    {
      blogTitle:
        'If you plan on buying cryptocurrency, Friday is the best time to do it',
      description: (
        <p>
          When asked how Friday differs from other days, many individuals
          respond positively. Turns out cryptocurrency investors in particular,
          have even more reasons to eagerly anticipate the beginning of leisure
          time. Let me expand on this odd assertion.
        </p>
      ),
      route: 'friday-rally',
      picture: weekend,
    },
  ]
  return (
    <div style={{ fontSize: 24 }}>
      <h1 style={{ textAlign: 'center' }}>Coming soon</h1>
      {blogs.map((item, i) => {
        return <div key={i}>{item.blogTitle}</div>
      })}
    </div>
  )
}
export default Blog
