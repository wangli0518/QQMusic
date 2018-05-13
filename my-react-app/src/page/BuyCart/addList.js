import React,{Component} from "react";
import buyList from "../../api/buyList";
import add from "../../api/buyAdd";
import Counter from "src/page/BuyCart/counter";
import {Link} from "react-router-dom";

export default class CartList extends Component{
    constructor(props) {
        super();
    }
    render(){
        return(
            <div className="cart-listBox" >
                <div className="cartList">
                    <ul>
                        {this.props.buyCart.map((item,index)=>(
                            <li key={index}>
                                <div className="check">
                                    <i></i>
                                </div>
                                <div className="img">
                                    <img src={item.url} alt=""/>
                                </div>
                                <div className="text">
                                    <h2>{item.title}</h2>
                                    <span></span>
                                    <p>￥{item.price}</p>
                                </div>
                                <div className="del iconfont icon-shanchu" onClick={()=>this.props.remove(item.id)}></div>
                               <Counter id={item.id}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="computed">
                    <div className="check">
                        <i></i>
                        全选
                    </div>
                    <div className="text">
                        <p>
                            合计(不含运费)：
                            <b>
                                ￥:{this.props.buyCart.reduce((prev, next) => {
                                    return prev + next.price*this.props.buyCart.length
                            }, 0)}
                            </b>
                        </p>
                        <span>
                            已优惠: ¥
                            0.00
                        </span>
                    </div>
                    <Link to="/Disembark" className="btn">
                            去结算({this.props.buyCart.length})
                    </Link>
                </div>
            </div>
        )
    }
}