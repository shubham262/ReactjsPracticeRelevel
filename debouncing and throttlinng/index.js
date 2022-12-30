
// var btn=document.querySelector(".butn")
// var n=0
// var k=0


// function handleClick(){
// k++
//     console.log("btn clicked",n,"times","function executed",k, "times")
// }

// function debounce(cb,delay){
//     let timer;
//     return (...args)=>{
        
//         clearTimeout(timer)
//         timer=setTimeout(() => {
//             cb(...args)
//         }, delay);
//     }
// }

// // var betterdebouncing=debounce(handleClick,300)

// function throtle(cb,delay){
//  let shouldwait=false
//     return ()=>{
//         n++
//         if(shouldwait){//waiting period starts
//             return
//         }
//         cb()
//         shouldwait=true
//         setTimeout(() => {
//             shouldwait=false 
//         }, delay);

//     }

// }



// var betterthrottling=throtle(handleClick,3000)



// btn.addEventListener('click',function(){
//     betterthrottling()
// })

var input=document.querySelector(".input")
var Defalt=document.querySelector(".Default")
var debouncegh=document.querySelector(".debounce")
var throttle=document.querySelector(".throttle")



function updatethrotle(text){
    throttle.innerText=text
}
function updatedebounbce(text){
    debouncegh.innerText=text
}

function throtle(cb,delay){
 let shouldwait=false
    return (...args)=>{
        
        if(shouldwait){//waiting period starts
            return
        }
        cb(...args)
        shouldwait=true
        setTimeout(() => {
            shouldwait=false 
        }, delay);

    }

}

function debounce(cb,delay){
    let timer;
    return (...args)=>{
        
        clearTimeout(timer)
        timer=setTimeout(() => {
            cb(...args)
        }, delay);
    }
}


var debouncing=debounce(updatedebounbce,3000)
var throotleing=throtle(updatethrotle,3000)


input.addEventListener('input',e=>{
    var text=e.target.value
    Defalt.innerText=e.target.value
    debouncing(text)
    throotleing(text)

})

