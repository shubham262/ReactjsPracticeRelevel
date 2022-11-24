import React from 'react'

class ClasssComponent extends React.Component{
    
    constructor(){
        super();
        
        this.state={count:0,show:true}
        console.log("Hello Constructor")
    }
    static getDerivedStateFromProps(props,state){
      
        console.log("Hello I am getDerivedStateFromProps")
        console.log(state)
    }
    componentDidMount(){
        console.log("Hello I am on Mount funtion")
      }
      shouldComponentUpdate(){
        console.log("Shoul")
        return false
        // return true
      }

    //   componentDidUpdate(prevprosp,prevstate,sanpshot){///useEffect
    //     console.log("I am updated")
    //     console.log(prevstate)
        
    //   }

    render(){
        console.log("Hello render")
        return(
            <div>
                <h1>{this.state.count}</h1>
               <Child data={this.state.count}/>
                {/* {this.state.show? <Child/>:null} */}
               
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Add</button>
            </div>
        )

    }

}

export default ClasssComponent


class Child extends React.Component{
    
    constructor(){
        super();
        this.state={currentValue:1}
        console.log("Hello Constructor")
    }

    // componentDidMount(){
    //     console.log("Hello I am on Mount funtion")
    //   }


    componentDidUpdate(prevprosp,prevstate,sanpshot){///useEffect
        if(prevprosp!==100){

            console.log(prevprosp.data*prevstate.currentValue)

        }
        
      }

    componentWillUnmount(){
        console.log("I am Getting unmounted")
    }



    render(){
        
        return(
            <div>
                <h1>child {this.props.data}</h1>
                <button onClick={()=>this.setState({currentValue:this.state.currentValue+1})}>child increment</button>
                {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>Add</button> */}
            </div>
        )

    }

}


