import React,{Component} from 'react'

import pic from '../imgs/send.svg';


class Header extends Component{


    render(){

        return (<div className={'app-header'}>
            <div className={'app-site-info text-center'}>
                <div className={'site-title m-0'}>Share Your Files.</div>
                <div className={'site-slogan'}>Secure. Safe. Free.</div>
                <div className={'site-title'}><img src={pic} height="320" alt = "welcomepic" /></div>
              
            </div>
        </div>)
    }
}

export default Header;