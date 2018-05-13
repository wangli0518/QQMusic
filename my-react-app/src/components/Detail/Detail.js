import React, { Component } from 'react'
import history from '../../history'
import './index.less'
export default class Detail extends Component {
    handleClick=()=>{
        history.go(-1)
    }
    render() {
        return (
            <div className='detail'>
                <div className='detail-go'>
                    <i onClick={this.handleClick}
                      className='iconfont icon-gongxiangtubiaozhuangtaileicaozuolei59'></i>
                </div>
                <div className="detail-pic">
                    <img src="http://img14.yiguoimg.com/e/items/2016/161128/9288698952130940_500.jpg" alt="" />
                </div>
                <div className='detail-content'>
                    <p className='detail-content-name'>海南小台农芒果1kg50g以上/个</p>
                    <p className='detail-content-dec'>玲珑“小黄人”  满满大甜蜜</p>
                    <div className='detail-content-dir'>
                       <p className='detail-price'>￥21.8</p>
                       <p className='detail-fied'>产地：海南三亚</p>
                    </div>
                    <p className='detail-return'>不支持7天无理由退货</p>
                </div>
                <div className='detail-count'>
                  <div className='detail-fen'>
                    <span className='detail-gg'>规格</span>
                    <span className='detail-weight'>1kg/份</span>
                  </div>
                  <div className='detail-num'>
                    <i>数量</i>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                  <div className='detail-address'>
                    <p className='detail-addr'>送至 北京(郊区) 怀柔区 怀柔区</p>
                    <p className='detail-to'><i>有货</i>16:00 后完成订单，预计后天(5月14日)送达</p>
                  </div>
                  <div className='detail-evaluate'>
                    <span className='detail-evaluate-count'>评价(4325)</span>
                    <span className='detail-evaluate-good'><i>99%</i>好评</span>
                  </div>
                  <div className='detail-person'>
                    <div className='detail-ss'>
                        <span className='detail-start'></span>
                        <span className='detail-user'>vi***</span>
                    </div>
                    <p>对商品非常满意</p>
                  </div>
                </div>
                <div className='detail-end'></div>
            </div>
        )
    }
}