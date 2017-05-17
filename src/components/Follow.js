/**
 * Created by Administrator on 2017/4/25.
 */

import React,{Component} from 'react'
import NewList from './NewList'
class Follow extends Component{
    constructor(){
        super()
        this.state={
            listData:[]
        }
        this.getDate=this.getDate.bind(this)
    }
    getDate(){
        let url='http://localhost:8080/src/data/follow.data'
        fetch(url).then((res)=>{
            res.json().then((data)=>{
                this.setState({
                    listData:data
                })
            })
        }).catch((data)=>{
            console.log(data.status)
        })
    }
    componentDidMount(){
        this.getDate()
    }
    render(){
        return(
            <div className="follow">
                <NewList dataname="follow" listData={this.state.listData}/>
            </div>

        )
    }
}
export default Follow