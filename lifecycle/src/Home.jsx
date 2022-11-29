import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import * as actions from "./actions/index"// actions ={depos,withdrw}
const Home = () => {
  const state=useSelector(state=>state.custom)
  console.log(state)
  const dispatch=useDispatch()

  const withdrwa=()=>{
    dispatch({type:"withdraw",
    payload:200
  })
  }
  const deposit=()=>{
    dispatch({type:"deposit",
    payload:200
  })
  }



  return (
    <div>
        <h1>{state.balanace}</h1>
        <button onClick={withdrwa}>withdraw</button>
        <button onClick={deposit}>deposit</button>

    </div>
  )
}

export default Home