import React, { Component } from 'react';
import { render } from 'react-dom'
import axios from '../../api/index'
import './index.less'
import { Link } from 'react-router-dom'
export default class BotList extends Component {
    render() {
        return (
            <div className='outer-list'>
                <div className='row-out-list'>
                    <ul className='row-oul-list'>
                        {
                            this.props.rowList.map((item, index) => (
                                <Link key={index} to='detail'>
                                    <li className='bot-row-list'>
                                        <img className='bot-list-pic' src={item.url} alt="" />
                                        <div className='bot-list'>
                                            <p>{item.title}</p>
                                            <span className='left-span'>￥{item.price}</span>
                                            <span>{item.count}</span>
                                        </div>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}