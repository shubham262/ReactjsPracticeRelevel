import React from 'react'

const Obstacle = (props) => {

let customStyle={
    width:"40px",
    position:"relative",
    height:`${props.height}px`,
    backgroundColor:"red",
    top:`${props.top}px`,
    left:`${props.left}px`

}

  return (
    <div style={customStyle}></div>
  )
}

export default Obstacle