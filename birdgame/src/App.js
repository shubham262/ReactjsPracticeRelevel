import {useState,useEffect} from "react"
import './App.css';
import Obstacle from './Obstacle';
import Bird from "./Bird"

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
    <div className="App" onClick={handleClick}>
      <div className='gamebox'>
      <Obstacle height={obstacleHeight} top={0} left={obstacleLeft}/>
      <Obstacle height={bottomObstacleHight} left={obstacleLeft} top={gameHeight-(obstacleHeight+bottomObstacleHight)}/>
      <Bird top={birdpostion}/>
      </div>
    </div>
  );
}

export default App;
