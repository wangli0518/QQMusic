import React from 'react';
import {getEat} from '../../api/eat.js'
import './eat.less'

export default class Eat extends React.Component {
    constructor() {
        super();
        this.state = {eats: [], eatImg: []}
        this.a = null
    }

    componentDidMount() {
        getEat().then((data) => {

            this.setState({eats: data.eat, eatImg: data.eatImg})
            console.log(this.state.eatImg);
        });


        /* this.a=  getEat().then((data)=>{ return data.eat})
           console.log(this.a);
   */

    }

    render() {
        return <div className='eat-warp'>
            <div className='eat-header'>
                <ul className='eat-header-container'>
                    {
                        this.state.eatImg.map((item, index) => (
                            <li key={index}>
                                <img src={item.Img} alt=""/>
                                <span>{item.ImgName}</span>
                            </li>

                            )
                        )
                    }
                </ul>
            </div>
            {
                this.state.eats.map((item, index) => (
                    <div key={index} className='eat-body-list'>
                        <a href="" className='eat-body-target'>
                            <div className='title-in'>
                                <div className='img-box'>
                                    <img src={item.foodImgBig} alt=""/>
                                    <span  className='img-food  '>{item.foodName}</span>
                                    <span className='img-icon'>
                                        <i className=''></i>
                                        {item.foodIcon}</span>
                                </div>
                                <p className='eat-title1'>
                                    {item.foodTitle1}
                                </p>
                                <p className='eat-title2'>
                                    {item.foodTitle2}
                                </p>
                                <div className='time-food'>
                                    <span className='time-img'>
                                        <img src={item.foodImg} alt=""/>
                                        <span>{item.foodName}</span>
                                    </span>
                                    <span className='time-new'>
                                        {item.foodTime}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    }
}