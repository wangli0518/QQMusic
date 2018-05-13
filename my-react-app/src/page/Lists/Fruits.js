import React, { Component } from 'react';
import axios from "../../api";
import ListsHeader from '../../components/ListsHeader/ListsHeader';
import './index.less'
import { Link } from 'react-router-dom'
import history from "../../history";
export default class Fruits extends Component {
    constructor() {
        super();
        this.state = { fruitsList: [], flag: -1 };
        this.cont = React.createRef();
    }

    componentDidMount() {
        axios.get('/fruit?offset=0&limit=8').then(data => {
            this.setState({ fruitsList: data.lists });
        });
        this.setState({ fruitsList: this.state.fruitsList });
    }
    sort = (atr) => {
        this.state.flag *= -1;
        this.state.fruitsList = this.state.fruitsList.sort((a, b) => {
            return (a[atr] - b[atr]) * this.state.flag;
        });
        this.setState({ fruitsList: this.state.fruitsList });

    };
    border = (e) => {
        let ary = this.siblings(e.target);
        for (let i = 0; i < ary.length; i++) {
            ary[i].classList.remove('bk');
        }
        e.target.classList.add('bk');
    };
    siblings = (context) => {
        let siblings = [];
        let parent = context.parentNode;
        let childs = parent.children;
        for (let i = 0; i < childs.length; i++) {
            if (childs[i] !== context) {
                siblings.push(childs[i])
            }
        }
        return siblings;
    };
    render() {
        return (<div>
            <ListsHeader history={history} />
            <div className="sort">
                <div onClick={(e) => this.border(e)} className='bk'>
                    销量 :
                </div>
                <div onClick={(e) => this.border(e)}>
                    新品 :
                </div>
                <div data-attr="price"
                    onClick={(e) => {
                        this.state.flag > 0 ? ((e.target.children[1].className = "down bg") && (e.target.children[0].className = "up")) : ((e.target.children[0].className = "up bg") && (e.target.children[1].className = "down"));
                        this.border(e);
                        this.sort(e.target.getAttribute("data-attr"))
                    }}
                >
                    价格 :
                    <i className='up' ></i>
                    <i className='down'></i>
                </div>
            </div>
            <div className='contentList' >
                <ul ref={this.cont}>
                    {
                        this.state.fruitsList.map((item, index) => (
                            <Link key={index} to='/detail'>
                                <li className='row-list2'>
                                    <img src={item.url} alt="" />
                                    <div className='row-bot2'>
                                        <p>{item.title}</p>
                                        <div>
                                            <span>￥{item.price}</span>
                                            <span> {item.count}</span>
                                            <span><img src="http://weixin.m.yiguo.com/Images/catimg/add.png" alt="" /></span>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>)
    }
}