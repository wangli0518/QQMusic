import ReactDom from 'react-dom';
import React, { Component } from 'react';

import Header from './Header';
import Slider from './Slider';
import HomeLittleList from './HomeLittleList';
import RunLeft from './RunLeft';
import RunRight from './RunRight';
import BotList from './BotList';
import GoTop from './GoTop';
import './Home.less';
import { getSlider } from "../../api/home";
import { loadMore, load, pullRefresh } from './util';
import axios from "../../api";
import history from '../../history';

export default class Home extends Component {
    constructor() {
        super();
        this.state = { slider: [], speed: 10, sc: null, rowList: [] };
        this.content = React.createRef();
    }

    getData = () => {
        getSlider().then((data) => {
            this.setState({ slider: data });
        });
    };

    componentDidMount() {
        axios.get('/fruit?offset=0&limit=5').then(data => {
            this.setState({ rowList: data.lists });
        });
        this.getData();
        loadMore(this.content.current, this.loadMore);
        load(this.content.current, this.load);
        pullRefresh(this.content.current, this.refresh);
    }
    refresh = () => {
        history.push('/')
    }

    loadMore = () => {
        let ss = document.getElementsByClassName('content')[0];
        this.state.sc = ss.scrollTop;
        this.setState({ sc: this.state.sc });
    };
    load = () => {
        axios.get('/fruit?offset=0&limit=20').then(data => {
            this.setState({ rowList: data.lists });
        });
    };
    scrollToTop = () => {
        let ss = document.getElementsByClassName('content')[0];
        let sc = ss.scrollTop;
        if (sc > 0) {
            ss.scrollTop = sc - this.state.speed;
            this.setState({ speed: this.state.speed += 4 });
            setTimeout(this.scrollToTop, 15);
        }
        this.setState({ sc: this.state.sc });
    }
    render() {
        return (
            <div>
                <Header />
                <div className='content' ref={this.content}>
                    {this.state.slider.length > 0 ?
                        <Slider lists={this.state.slider} /> : "加载中"}
                    <HomeLittleList />
                    <RunLeft />
                    <RunRight />
                    <BotList rowList={this.state.rowList} />
                    <GoTop scrollToTop={this.scrollToTop}
                        sc={this.state.sc}
                    />
                </div>
            </div>
        )
    }
}
