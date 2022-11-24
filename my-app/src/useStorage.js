import React, { useState,useEffect } from 'react'

const useStorage = (key,initialValue) => {
  
console.log("Hello  ")
    function getValue(){

        const result=JSON.parse(localStorage.getItem('key'))
        console.log(result)
        if(result!==null){
            return result
        }

        // return initialValue;
    }


    const [value,setValue]=useState(()=>{getValue()})

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    }, [value])
    


    return [value,setValue]
}

export default useStorage