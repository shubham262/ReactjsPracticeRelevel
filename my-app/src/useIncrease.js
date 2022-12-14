import React, { useState,useEffect } from 'react'

const useIncrease = () => {
    const [val,setVal]=useState(0);

    
    return [val,setVal]
}

export default useIncrease