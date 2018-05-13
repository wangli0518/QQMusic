import React,{Component} from "react";
import add from "src/api/buyAdd";
import buyList from "src/api/buyList";
import minus from "../../api/minus";
export default class Counter extends Component{
    constructor(){
        super();
        this.state={number:1}
    }
    handleAdd=(id)=>{
        add(id).then((data)=> {
            console.log((data).number);
            this.setState({number:(data).number})
        })
    };
    remove=(id)=>{
        minus(id).then((data)=>{
            console.log(data);
            this.setState({number:(data).number})
        })
    }
    render(){
        return(
                <div className="num">
                    <span onClick={()=>this.remove(this.props.id)}>-</span>
                    <span>{this.state.number}</span>
                    <span onClick={()=>this.handleAdd(this.props.id)}>+</span>
                </div>
        )
    }
}