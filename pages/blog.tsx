import { Tooltip } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ethGraph from '../assets/images/image_2022_07_16T14_34_03_871Z.png'
const Blog = () => {
  const blogs = [
    {
      blogTitle:
        'If you plan on buying cryptocurrency, Friday is the best time to do it',
      description: (
        <p>
          Let&apos;s explore the quite interesting question that is posed in
          this blog post&apos;s title. I assume quite a narrow demographic will
          find this blog post interesting, but those who do will probably find
          it hilarious. Cryptocurrency prices indeed perform best on Fridays.
        </p>
      ),
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
