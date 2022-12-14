import React, { useState,useMemo,useEffect } from 'react'

const UseMemo = () => {

    const [input,setInput]=useState("")
    // const number=slow(input)
    const number=useMemo(() => {return slow(input)}, [input])
    // it is going to return  whatever we want to return 
    const [dark,setdark]=useState(false)


//  {}!={}
    // var cstyle={
    //     backgroundColor:dark?'black':'white',
    //     color:dark?'white':'black'
    // }

    var cstyle=useMemo(() => 
    {
        return {
            backgroundColor:dark?'black':'white',
            color:dark?'white':'black'
        }
    }, [dark])


    useEffect(() => {
    console.log("cstyle has changed")
    },[cstyle])
    
  return (
    <div>
    <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={(e)=>setdark((prev)=>!prev)}> Change Theme</button>
    <div style={cstyle}>{number}</div>

    </div>
  )
}

export default UseMemo

function slow(data){
    //complecx coed 
    ///lot of to compute 
    console.log("Hello i ma being printed")
    return 2*data
    

}