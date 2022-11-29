import React, { useState } from 'react'
import NoteContext from "./NoteContext"

// const NoteContext =createContext()
// //it holds all the sattes regardimg to mnotes
// export default NoteContext

const NoteState = (props) => {
  
const s1={name:"Shubham",profe:"Engineer"}
const [state,setState]=useState(s1)


const Update=(key,value)=>{
console.log("hello")
setState((prev)=>{
return {
    ...prev,
   [key]:value
//    name:"Bhawsesh"

}
})

}


return (

    <NoteContext.Provider value={{state,Update}}>
    {props.children}
    </NoteContext.Provider>
)

}

export default NoteState