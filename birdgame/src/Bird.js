import React from 'react'

const Bird = (props) => {

    let customStyle={
        width:"40px",
        height:"40px",
        backgroundColor:"green",
        borderRadius:"50%",
        position:"absolute",
        top:`${props.top}px`,
        transition:"all 0.5s"

    }
    const cstyle={
        width:"inherit",
        height:"inherit",
    }

  return (
    <div style={customStyle}>
        <img style={cstyle} src="https://media.tenor.com/WuaZ4G33BBoAAAAC/flappy-bird-flying.gif" alt="flsappy"   />
    </div>
  )
}

export default Bird