
import React, { Component } from 'react';
import {render} from 'react-dom'
import './index.less'

export default class GoTop extends Component {
    render(){
        let H=document.documentElement.clientHeight;
        let style={display:this.props.sc<H? 'none':'block'};
        return(
            <div className='box-top' style={style}>
                <a href="###" className='to-top'
                   onClick={this.props.scrollToTop}>↑</a>
            </div>
        )
    }
}

