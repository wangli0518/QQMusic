import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.less'
export default class Login extends Component {
    render(){
        return(
            <div className='Login'>
                <form className='input-ite'>
                    <div className="input-item">
                        <div className="input-item-list">
                            <input  className='input-item-li' type="tel" placeholder="请输入您的手机号" />

                                <a className="btn-captcha" href="javascript:void(0)">获取验证码</a>
                        </div>
                        <div className="input-item-list">
                            <input  className='input-item-lis' type="text" placeholder="请输入您的验证码"/>
                        </div>
                        <div className="input-item-list">
                            <input  className='input-item-lis' type="password" placeholder="请设定您的密码"/>
                        </div>
                        <div className="input-item-list">
                            <input  className='input-item-lis' type="password" placeholder="请再次输入您的密码"/>
                        </div>
                        <div className="input-item-list">
                            <input  className='input-item-lis' type="text" placeholder="注册邀请码"/>
                        </div>
                    </div>
                    <div className="btn-login">
                        <Link to='/disembark'><button type="button" className="btn_green " >注册</button></Link></div>
                    <p className="tc ">点击注册，即代表同意<a className="green" href="http://front.yiguo.com/h5/registrationAgreement/RegistrationAgreement.html">《易果服务协议》</a></p>
                    <div className="bottomcopyright">
                        <em className=" icon yiguo_logo"> </em>
                    </div>
                    <div className='log-top'>
                        <img src="https://img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png" alt=""/>
                    </div>
                </form>

            </div>
        )
    }
}