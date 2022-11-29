export const depositMoney=(amount)=>{

console.log("depo")
return (dispatch)=>{
    dispatch({
        type:'deposit',
        payload:amount
    })
}

}
export const withdraw=(amount)=>{
    console.log("withdraw")
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }

}

