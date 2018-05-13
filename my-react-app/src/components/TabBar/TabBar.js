import React, { Component } from 'react'
import './index.less'
import { NavLink } from 'react-router-dom'
export default class TabBar extends Component {
    render() {
        return (
            <div className="tab-bar">
                <li>
                    <NavLink to='/home'><i className="iconfont icon-shouye"></i>首页</NavLink>
                </li>
                <li>
                    <NavLink to='/kind'> <i className="iconfont icon-leimupinleifenleileibie"></i>分类</NavLink>
                </li>
                <li>
                    <NavLink to='/eat'> <i className="iconfont icon-chifan2600"></i>吃饭吧</NavLink>
                </li>
                <li>
                    <NavLink to='/buycart'> <i className="iconfont icon-gouwuche"></i>购物车</NavLink>
                </li>
                <li>
                    <NavLink to='/mine'> <i className="iconfont icon-wode"></i>我的易果</NavLink>
                </li>
            </div>
        )
    }
}