import { Tooltip } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import weekend from '../assets/images/weekend.png'
const Blog = () => {
  const blogs = [
    {
      blogTitle:
        'Friday is even greater than we thought, at least for cryptocurrency investors',
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
      pictureAlt: 'WEEKEND.PNG!',
    },
  ]
  return (
    <div style={{ fontSize: 24 }}>
      <div className="blogs" style={{ marginTop: 30 }}>
        {blogs.map((item, i) => {
          return (
            <Link href={item.route} key={i}>
              <div className="blog-card">
                <Image src={item.picture} alt={item.pictureAlt}></Image>
                <a className="link-cancel-default">
                  <h3
                    style={{
                      textAlign: 'center',
                      fontSize: 30,
                      marginTop: 15,
                    }}
                  >
                    {item.blogTitle}
                  </h3>
                  <br />
                  <p>{item.description}</p>
                </a>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Blog
