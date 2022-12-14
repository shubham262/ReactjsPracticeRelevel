import React,{useState,useCallback} from 'react'
import Box from './Box'

const UseCallback = () => {


    const [dark,setdark]=useState(false)
    const [input,setInput]=useState("")

     var cstyle={
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black'
    }

        // var getI=()=>{return [input+100,input+200,input+300]}
    var getI=useCallback(() => {
    return [input+100,input+200,input+300]
      },
      [input],
    )
    //it will return a call back function
    
  return (
    <div>
 
    <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={(e)=>setdark((prev)=>!prev)}> Change Theme</button>
    <div style={cstyle}>
    <Box getitem={getI} />

    </div>

    
    </div>
  )
}

export default UseCallback