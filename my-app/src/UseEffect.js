import React, { useState ,useEffect} from 'react'

const UseEffect = () => {

    const [width,setWidth]=useState(window.innerWidth)

    function handleSize(){
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        
        console.log("1st time")
        window.addEventListener('resize',handleSize)


        // return ()=>{
        //     window.removeEventListener('resize',handleSize)
        // }
    },[])
    



  return (
    <div style={{height:"100%"}}>{width}</div>
  )
}

export default UseEffect