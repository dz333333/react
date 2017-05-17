/**
 * Created by Administrator on 2017/4/25.
 */

import React,{Component} from 'react'
import '../assets/css/article.css'
import {date} from '../common'
class Article extends Component{
    constructor(){
        super()
        this.state={
            itemData:[],
        }
        this.getData=this.getData.bind(this)
    }
    getData(){
        let {dataname}=this.props.router.location.query
        let url="http://localhost:8080/src/data/article-"+dataname+".data"
        fetch(url).then((res)=>{
            res.json().then((data)=>{
                this.setState({
                    itemData:data
                })
            })
        }).catch(()=>{
            console.log('连接错误')
        })
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        let now =this.props.params.aid-1
        let item=this.state.itemData[now]
        return(
            <div className="active">
                <div className="nav">
                <ul>
                    <li className="l-btn" onClick={this.props.router.goBack}></li>
                </ul>
            </div>
                <div className="content">
                    <div className="cont">
                        <h3>{item?item.title:''}</h3>
                        <div className="time"><p>{item?date(item.time):''}<span><img src="src/assets/img/zan.png" alt=""/></span></p></div>
                        <div className="text-box" dangerouslySetInnerHTML={{__html:item?item.content:''}}></div>
                    </div>
                </div>
                <div className="foot-btn">
                    <ul className="article">
                        <li className="say"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="zan"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="xing"><a href="javascript:;">
                            <i><img src="src/assets/img/xing.png" alt=""/></i>
                        </a></li>
                        <li className="fx"><a href="javascript:;">
                            <i><img src="src/assets/img/fx.png" alt=""/></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Article