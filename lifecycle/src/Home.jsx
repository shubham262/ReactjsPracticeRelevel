import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import * as actions from "./actions/index"// actions ={depos,withdrw}
const Home = () => {
  const state=useSelector(state=>state.custom)
//   console.log(state)
//   const dispatch=useDispatch()

//   const withdrwa=()=>{
//     dispatch({type:"withdraw",
//     payload:200
//   })
//   }
//   const deposit=()=>{
//     dispatch({type:"deposit",
//     payload:200
//   })
//   }

const [val,setVal]=useState(0)
function handleClicl(){
  console.log("Hello")
  setVal((prev)=>prev+1)
}
  return (
    // <div>
    //     <h1>{state.balanace}</h1>
    //     <button onClick={()=>withdrwa()}>withdraw</button>
    //     <button onClick={deposit}>deposit</button>

    // </div>
    <div>
    <h1>{val}</h1>
      <button onClick={()=>handleClicl()}>add</button>
    </div>
  )
}

export default Home