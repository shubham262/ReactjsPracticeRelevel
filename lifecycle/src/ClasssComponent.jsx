import React from 'react'

class ClasssComponent extends React.Component {
 
constructor(){
    super()
    this.state={count:0}
}


shouldComponentUpdate(){
    return true
}
    render(){
        return(
            <div>
                <h1>Hello {this.state.count}</h1>
                <Child data={this.state.count}/>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Parent Button  Add</button>
            </div>
        )
    }
}

export default ClasssComponent

class Child extends React.Component {

    constructor(){
        super()
        this.state={currentValue:0}
    }


    static getDerivedStateFromProps(props,state){
        // console.log("get",props,state)

        return {
            currentValue:props.data*100
        }
    }

    componentDidUpdate(pprops,pstate,snapshot){
        console.log("Hello",pprops,pstate,snapshot)

    }
    getSnapshotBeforeUpdate(pprops,pstate){
        return pprops.data*pstate .currentValue   
    }

    render(){
        console.log("Render")
        return(
            <div>
                <h1>Child {this.state.currentValue}</h1>
            </div>
        )
    }
}