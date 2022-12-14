import React, { useState,useEffect } from 'react'

const Box = ({getitem}) => {

    const [state,setState]=useState([])

    useEffect(() => {
    console.log("I am being printed")
    setState(getitem())
    }, [getitem])
    

  return (
   state.map((element,index)=><div key={index}>{element}</div>)
  )
}

export default Box