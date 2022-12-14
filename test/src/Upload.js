import React, { useState } from 'react'

const Upload = () => {
    const [state,setState]=useState("")

    function handlechange(){
        console.log("hello")
        var data=new FormData()
        data.append("file",state)
        data.append('upload_preset',"j4qigcls")
        data.append('cloud_name',"dyuq51a7t")
        fetch("https://api.cloudinary.com/v1_1/dyuq51a7t/image/upload",{
            method:"POST",
            body:data,
        }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))

        
    }
    
  return (
    <div>
    <input type="file" onChange={(e)=>setState(e.target.files[0])}/>
    <button onClick={handlechange}>Upload</button>
    <div>
        <img src='http://res.cloudinary.com/dyuq51a7t/image/upload/v1670512263/l9dwln1c6435ne0miugd.png' alt="spider"/>
    </div>
    </div>
  )
}

export default Upload