import React from 'react'
import Cards from "./Cards"
const Showcards = (props) => {
    // console.log(props)
  return (
    <div className='ShowCards'>

{

props.propsData.item.map((i,index)=>(
  <Cards loaction={i.loaction} price={i.price} src={i.src} time={i.time} hoisted={i.hoisted} key={index}/>
))



}

    </div>
  )
}

export default Showcards

