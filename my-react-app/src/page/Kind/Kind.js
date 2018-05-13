import React, { Component } from 'react';
import {router,Link} from 'react-router-dom';
import TabBar from '../../components/TabBar/TabBar';
import axios from "../../api/index"
export default class Kind extends Component {
    constructor(){
        super();
        this.state = {fruit:[]}
    }
    options =(e)=>{
        let Eary = e.target.parentNode.children;
        let cur = e.target;
        cur.className="action";
        for (let i = 0; i < Eary.length; i++) {
            if(cur !== Eary[i]){
                Eary[i].className = "";
            }
        }
        axios.get('/classify').then((data)=>{
            this.setState({fruit:data});
        });
    };
    componentDidMount(){
        axios.get('/classify').then((data)=>{
            this.setState({fruit:data});
        });
    }
    render(){
        return(
            <div className="kind">
                <div className="kind-seek">
                    <i className="icon iconfont icon-magnifier"></i>
                    <input type="text" placeholder="请输入商品名称"/>
                    <span>搜索</span>
                </div>
                <div  className="kind-nav">
                    <ul>
                        <li className="action" onClick={(e)=>this.options(e)}>进口水果</li>
                        <li onClick={(e)=>this.options(e)}>国产水果</li>
                        <li onClick={(e)=>this.options(e)}>精选肉类</li>
                        <li onClick={(e)=>this.options(e)}>禽类蛋品</li>
                        <li onClick={(e)=>this.options(e)}>海鲜水产</li>
                        <li onClick={(e)=>this.options(e)}>即烹美食</li>
                        <li onClick={(e)=>this.options(e)}>乳品糕点</li>
                        <li onClick={(e)=>this.options(e)}>新鲜蔬菜</li>
                        <li onClick={(e)=>this.options(e)}>方便速食</li>
                        <li onClick={(e)=>this.options(e)}>粮油杂货</li>
                        <li onClick={(e)=>this.options(e)}>饮料酒水</li>
                        <li onClick={(e)=>this.options(e)}>礼品礼券</li>
                    </ul>
                    <div className="kind-list">
                        {
                            this.state.fruit.map((item,index)=>(
                                <Link to="/fruits"
                                    className="photograph"
                                     key={index}
                                >
                                    <img src={item.url} alt=""/>
                                    <span>{item.name}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <TabBar/>
            </div>
        )
    }
}
import './Kind.less';