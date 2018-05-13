import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Mine.css'
let a = require('./img/1.jpg');
export default class Mine extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='my-header'>
                <div className='my-log'>
                    <i className='my-set iconfont icon-shezhi'></i>
                    <div className=''>
                        <img className="my-lo" src={a} alt="" />
                        <NavLink to="/disembark"><p className="my-deng">注册/登录</p></NavLink>
                    </div>
                </div>
                <div className='my-1'>
                    <div className='my-2'>
                        <span>-</span>
                        <span>账户余额</span>
                    </div >
                    <div className='my-2'>
                        <span>-</span>
                        <span>优惠券</span>
                    </div>
                    <div className='my-2'>
                        <span>-</span>
                        <span>悠币</span>
                    </div>

                </div>
                <ul className="my-n">
                    <li>
                        <i className='iconfont icon-daizhifu'></i>
                        <i className='ny-lh'>待支付</i>
                    </li>
                    <li>
                        <i className='iconfont icon-daishouhuo'></i>
                        <i className='ny-lh'>待收货</i>
                    </li>
                    <li>
                        <i className='iconfont icon-chongzhi'></i>
                        <i className='ny-lh'>评价送悠币</i>
                    </li>
                    <li>
                        <i className='iconfont icon-tianmaoshangmentuihuo'></i>
                        <i className='ny-lh'>在线退换货</i>
                    </li>
                    <li>
                        <i className='iconfont icon-icondd1'></i>
                        <i className='ny-lh'>全部订单</i>
                    </li>
                </ul>
                <ul className="my-n">
                    <li>
                        <i className='iconfont icon-shouhuodizhi'></i>
                        <i className='ny-lh'>收货地址</i>
                    </li>
                    <li>
                        <i className='iconfont icon-chongzhi'></i>
                        <i className='ny-lh'>充值卡</i>
                    </li>
                    <li>
                        <i className='iconfont icon-lipin'></i>
                        <i className='ny-lh'>礼品兑换券</i>
                    </li>
                    <li>
                        <i className='iconfont icon-bangzhuzhongxin'></i>
                        <i className='ny-lh'>帮助中心</i>
                    </li>
                    <li>
                        <i className='iconfont icon-kefudianhua'></i>
                        <i className='ny-lh'>客服电话</i>
                    </li>
                    
                </ul>
                <div className='mine-end'></div>
            </div>)
    }
}


