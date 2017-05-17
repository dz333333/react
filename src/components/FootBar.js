/**
 * Created by Administrator on 2017/4/25.
 */
import {Link} from 'react-router'
import React,{Component} from 'react'
class FootBar extends Component{
    render(){
        return(
            <div className="foot-btn" >
                <ul>
                    <li className="home"><Link to="home"></Link></li>
                    <li className="write"><a href="javascript:;"></a></li>
                    <li className="my"><Link to="user"></Link></li>
                </ul>
            </div>
        )
    }
}
export default FootBar