import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class CartBox extends Component{
    render(){
        return(
            <div className="cart-box">
                <div className="cart-icon iconfont icon-cart"></div>
                <p>购物车空空的，快去逛逛吧！</p>
                <div className="cart-btn">
                    <Link to="/Home">
                        去逛逛
                    </Link>
                </div>
            </div>
        )
    }
}