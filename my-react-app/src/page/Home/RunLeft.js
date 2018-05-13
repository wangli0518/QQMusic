import React, {Component} from 'react';
import {render} from 'react-dom'
import axios from '../../api/index'
import './index.less'

export default class RunLeft extends Component {
    constructor() {
        super();
        this.state = {rowList: []}
    }

    componentDidMount() {
        axios.get('/fruit?offset=0&limit=5').then(data => {
            this.setState({rowList: data.lists});
        });

    }

    render() {
        return (
            <div className='outer'>
                <div className='row-out'>
                    <ul className='row-oul'>
                        {
                            this.state.rowList.map((item, index) => (
                                <li className='row-list' key={index}>
                                    <img src={item.url} alt=""/>
                                    <div className='row-bot'>
                                        <p>{item.title}</p>
                                        <span>￥{item.price}</span>
                                        <span>{item.count}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <img className='bot-pic' src="http://img10.yiguoimg.com/d/items/2018/180426/9288722194343066_1125x652.jpg?w=1125&h=652" alt=""/>
            </div>
        )
    }
}