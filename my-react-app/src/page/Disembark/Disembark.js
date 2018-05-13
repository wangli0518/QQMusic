import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Disembark.less'


export default class Disembark extends Component {
    render(){
        console.log(1);
        return(

            <div className='disembark'>
                <form>
                    <div className="input-item">
                        <div className="input-item-list">
                            <span className="icon-username"></span>
                            <input className='ico-username' type="text" placeholder="请输入您的用户名"/>
                        </div>
                        <div className="input-item-list password">
                            <span className="icon-password"></span>
                            <input className='ico-username' type="password"  placeholder="请输入您的密码"/>
                        </div>
                        <div className="input-item-list">
                            <input className='ico-username' type="text" placeholder="请输入验证码" style={{width: '70%', border: 'none',float:'left'}}/>
                        </div>
                    </div>

                    <div className="login-option">
            <span className="retrieve_password" >
                <a className="retrieve_p" href="javascript:;">忘记密码?</a>
            </span>
                    </div>
                    <div className="btn-login ">
                        <button  className="btn_green " type="button">登录</button>
                        <Link to='/login'><button className="btn_white " type="button">立即注册</button></Link>
                    </div>
                    <div className="login-other">
                        <dl>
                            <dt>-----------&nbsp;合作账号登录&nbsp;-----------</dt>
                            <dd>
                                <a  href="" className="qq" title="使用QQ联合登录">QQ</a>
                                <a  href="" className="weibo" title="使用新浪微博联合登录">新浪微博</a>
                            </dd>
                        </dl>
                    </div>
                    <div className='log-top'>
                        <img src="https://img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png" alt=""/>
                    </div>
                </form>

           </div>
        )
    }
}