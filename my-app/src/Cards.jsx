import React from 'react'
import "./App.css"

const Cards = (props) => {
  return (
    <div className='Cards'>

    <img  src={props.src} alt="dd"/>

    <div className='innerComtainer'>

    <div className='colm1'>
    <span><b>{props.location}</b></span>
    <span>{props.hoisted}</span>
    <span>{props.time}</span>
    <span><b>₹{props.price}</b> night</span>
     </div>

    <div className='colm2'>
    <div style={{marginTop:"5px"}}>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "12px", width: "12px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
    </div>
    <span>5.0</span>

    </div>




    </div>


    </div>
  )
}

export default Cards