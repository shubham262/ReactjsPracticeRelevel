import { configureStore } from "@reduxjs/toolkit";
import { customeReduser } from "./reducers/newReducers";

const store=configureStore({
    reducer:{
        custom:customeReduser,
        user:customeReduser,
    }
})
export default store