import {useState,useEffect} from "react"
import './App.css';
import Obstacle from './Obstacle';
import Bird from "./Bird"
import Tets from "./tets";

const gameWidth=700
const gameHeight=400
const obstacleGap=200
const obstaclewidth=40
const birdheight=20
function App() {
  const [obstacleHeight,setObstacle]= useState(100)
  const bottomObstacleHight=gameHeight-obstacleHeight-obstacleGap
  const [obstacleLeft,setObstacleleft]=useState(gameWidth-40)
  const [birdpostion,setBirdpostion]=useState(200)
  const [gamestarted,setGamestarted]=useState(false)
  const [score,setScore]=useState(0)
  //obstacl;e
 useEffect(() => {
  let timeid;
  if(gamestarted && obstacleLeft>=-obstaclewidth){
    timeid=setInterval(() => {
      setObstacleleft((prev)=>prev-5)
    }, 24);
  }
  else{
    setObstacleleft(gameWidth-40)
    setObstacle(Math.floor(Math.random()*(gameHeight-obstacleGap)))
    setScore((prev)=>prev+1)
  }

  return ()=>{
    clearInterval(timeid)
  }
 },[obstacleLeft,gamestarted])
 
//bird
useEffect(() => {

  let timeid;
  if(gamestarted && birdpostion<gameHeight-birdheight){
    timeid=setInterval(() => {
      setBirdpostion((prev)=>prev+3)
    },24)
  
  }

  return ()=>{
    clearInterval(timeid)
  }
},[gamestarted,birdpostion])

function handleClick(){
  let newBirdPosition=birdpostion-100
  if(!gamestarted){
    setGamestarted(true)
  }
   else if(newBirdPosition<0){
    setBirdpostion(0)
  }
  else{
    setBirdpostion((prev)=>prev-100)
  }
  
}

  return (
    // <div className="App" onClick={handleClick}>
    // <h1>{score}</h1>
    //   <div className='gamebox'>
      
    //   <Obstacle height={obstacleHeight} top={0} left={obstacleLeft}/>
    //   <Obstacle height={bottomObstacleHight} left={obstacleLeft} top={gameHeight-(obstacleHeight+bottomObstacleHight)}/>
    //   <Bird top={birdpostion}/>
    //   </div>
    // </div>
    <div>
      <Tets lang="php"/>
      <Tets lang="React"/>
      <Tets lang="java"/>

    </div>
  );
}

export default App;
