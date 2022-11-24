import React,{useEffect} from 'react'

const useLogger = (val) => {
  
useEffect(() => {
  console.log(val)
})



}

export default useLogger