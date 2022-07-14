import React from 'react'
interface PropTypes {
  children: React.ReactNode
}
const Card = (props: PropTypes) => {
  return <div className="card">{props.children}</div>
}
export default Card
