// import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import Cards from "./Cards"
import Data from "./data/data.json"
import Showcards from './Showcards';
import UseEffect from './UseEffect'
import CustomHooks from './CustomHooks';
import ClassComponent from "./ClasssComponent"
function App() {

//useState
//rules

//functional componet
//hooks inside any if else sattement
//forr lloops
//function 
//nested quesrioes
  // console.log("render")
  // var time=new Date().toLocaleTimeString();
  // const [current,setCuurent]=useState(time)
  
  // function updateTime(){
  // time=new Date().toLocaleTimeString();
  // setCuurent(time);

  // }

  // setInterval(updateTime,1000)
// const [current,setCuurent]=useState(()=>{ console.log("Rerendering")
// return 4;})





// function handleclick(){
//   setCuurent((prev)=>prev+1)

// }

//useEffect





// const [val,setVal]=useState("posts")//arr[0] arr[1] 
// const [count,setCount]=useState(0)



// function handleclick(){
//   setCount((prev)=>prev+1)
// }

//   useEffect(() => {
//     console.log(" I have 100 line of code")
 
//     return () => {//cleanup
//       console.log("I will cleanup the useeffect")
//     }
//    },[val])


   
const [state,setState]=useState(10)
function handlechage(){
setState((prev)=>{
return setTimeout(()=>{
console.log("Hello",prev);
return prev+1
},3000)

})
console.log("hi")
}
  return (
    <div className="App">
    {/* <h1>{val}</h1>
    <div style={{display:"flex"}}>
    <button  value="posts" onClick={(event)=>{ return setVal(event.target.value)}}>posts</button>
    <button value="comments" onClick={(event)=>{ return setVal(event.target.value)}}>comments</button>
    <button value="photos" onClick={(event)=>{ return setVal(event.target.value)}}>photos</button>
    <button onClick={handleclick}>{count}</button>
    
    </div> */}

  <Showcards propsData={Data}/> 
  {/* <UseEffect/> */}



  {/* <CustomHooks/> */}
  {/* <ClassComponent/> */}
  {/* <h1>{state}</h1>
  <button onClick={handlechage}>Add</button> */}
  </div>
  );
}

export default App;
