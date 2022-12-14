import React,{useEffect, useState} from "react"
import './App.css';

function App() {

const [val,setVal]=useState("")


useEffect(() => {
const words="I am Relevel";
document.querySelector('.words').innerText=""
words.split('').forEach(element => {
  const characterspan=document.createElement('span')
  characterspan.innerText=element
  document.querySelector('.words').appendChild(characterspan)
});

},[])

useEffect(() => {
  const data=val
  const datalist=data.split('')
  const spanlist=document.querySelectorAll('span')
console.log(spanlist)
  for(let i=0;i<datalist.length;i++){
    const character=datalist[i]
    if(character==spanlist[i].innerText){
      spanlist[i].classList.add('correct')
    }
    else{
      spanlist[i].classList.add('incorrect')
    }
  }
},[val])





  return (
    <div className="App">
    <div className='container'>
        <div className='words'>
          
        </div>
        <textarea onChange={(e)=>setVal(e.target.value)} value={val}>{val}</textarea>
    </div>
    </div>
  );
}

export default App;
