import React, { useState } from 'react'
import useIncrease from './useIncrease'

const Test = (props) => {
    const cstyle={
        display:"flex",
        border:"2px solid red",
        padding:"10px",
        width:"50vw"
    }
    const gap={
        margin:"4px"
    }

    // const [val,setVal]=useIncrease()
    const [val,setVal]=useState(0)
  return (
    <div style={cstyle}>
        <h3  value={val} style={gap}>{val}</h3>
        <h3 style={gap}>{props.lang}</h3>
        <button style={gap} onClick={()=>{ console.log("Hello") ;setVal((prev)=>prev+1)}}>click me</button>
    </div>
  )
}

export default Test