/**
 * Created by Administrator on 2017/4/25.
 */

import React,{Component} from 'react'
import {Link} from 'react-router'
class NavBar extends Component{
    render(){
        return(
            <div className="nav">
                <ul>
                    <li >
                        <Link to="home" activeClassName='active'>首页</Link>
                    </li>
                    <li> <Link to="follow" activeClassName='active'>关注</Link></li>
                    <li> <Link to="column" activeClassName='active'>栏目</Link></li>
                </ul>
            </div>
        )
    }
}
export default NavBar