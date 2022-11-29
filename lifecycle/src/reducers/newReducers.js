import { createReducer } from "@reduxjs/toolkit";

const initailState={
    balanace:0
}
export const customeReduser=createReducer(initailState,{

    withdraw:(state,action)=>{
      console.log("Withdrwae")  
      state.balanace=state.balanace-action.payload
    },
    deposit:(state,action)=>{
        console.log("deposit")  
        state.balanace=state.balanace+action.payload
    },

})