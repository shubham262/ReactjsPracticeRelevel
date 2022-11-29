import React,{useContext} from 'react'
import Contact from './Contact'
import NoteContext from './Context/notes/NoteContext'

const About = () => {
    const a=useContext(NoteContext)
  return (
    <>
    <div>About {a.state.name} {a.state.profe}</div>
    {/* <Contact/> */}
    <button onClick={()=>a.Update('name','bhawesh')}>change the name</button>

    </>
  )
}

export default About