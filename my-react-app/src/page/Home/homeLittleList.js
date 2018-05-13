
import React, { Component } from 'react';
import {render} from 'react-dom'
import axios from '../../api/index'
import {Link} from 'react-router-dom';
import '../Lists/Fruits';


export default class homeLittleList extends Component {
    constructor(){
        super();
        this.state={fruit:[]}
    }
    componentDidMount(){

        axios.get('/kinds').then(data=>{
            this.setState({fruit:data});
        });

    }
    render(){
        return(
            <div className='fruits'>
                <ul>
                    {
                        this.state.fruit.map((item,index)=>(
                            <li key={index} className='oli'>

                                <Link to='/fruits'>
                                    <img src={item.url} alt=""/>
                                    <p>{item.title}</p>
                                </Link>
                            </li>
                        ))
                    }

                </ul>
                <img className='two' src="http://img11.yiguoimg.com/d/items/2018/180506/9288722620425382_1125x652.jpg?w=1125&h=652"
                     alt=""/>
            </div>
        )
    }
}