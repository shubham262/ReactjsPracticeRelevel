import React,{useState} from 'react'

const Tets = (props) => {
    const cstyle={
        display:"flex"
    }
    const [state,setState]=useState(0)
  return (
    <div style={cstyle}>
        <h2>{state}</h2>
        <h3>{props.lang}</h3>
        <button onClick={()=>setState((prev)=>prev+1)}>onClick</button>
    </div>
  )
}

export default Tets