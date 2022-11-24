import React, { useState } from 'react'
import useLogger from './useLogger'
import useStorage from './useStorage'
const CustomHooks = () => {
const [val,setVal]=useStorage("name","")
// useLogger(val)

  return (
    <div>

    <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />




    </div>
  )
}

export default CustomHooks