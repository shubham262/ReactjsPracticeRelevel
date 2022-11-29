import React,{useContext} from 'react'
import NoteContext from './Context/notes/NoteContext'
const Contact = () => {
    const a=useContext(NoteContext)
  return (
    <div>Contact {a.name}</div>
  )
}

export default Contact