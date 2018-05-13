import React, { Component } from 'react';
import {render} from 'react-dom'

import './index.less'
export default class Header extends Component {
  
    render(){
        let style={ fontSize: '50px', color:'white' }
        return(
            <div className='header'>
                <a href="javascrippt:;">北京</a>
                <i className='iconfont icon-iconfonticonfonti2' style={style}></i>
                <div className='input'>
                    <i className='iconfont icon-sousuo'></i>
                    <p className='ip'>请输入商品名称</p>
                </div>
                <i className='iconfont icon-liaotian chat'></i>
            </div>
        )
    }
}