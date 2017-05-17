/**
 * Created by Administrator on 2017/4/25.
 */

import React,{Component} from 'react'
import {Link} from 'react-router'

class NewList extends Component{
    render(){
        let {listData,dataname} =this.props

        return(
            <div className="newsList">
                <ul>

                    {
                        listData.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <Link to={{
                                      pathname:'article/'+item.id,
                                        query:{dataname}
                                    }}>
                                        <h2>{item.id}.{item.title}</h2>
                                        <p>{item.detail}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}
export default NewList