/**
 * Created by Administrator on 2017/4/25.
 */

import React,{Component} from 'react'
import Solider from './Solider'
import NewList from './NewList'
import pubsub from 'pubsub-js'
class Home extends Component{
    constructor(){
        super()
        this.state={
            listData:[]
        }
        this.bMount=true
        this.getDate=this.getDate.bind(this)
    }
    componentWillUnmount(){
        this.bMount=false
    }
    getDate(){
        pubsub.publish('CTL_LOADING',true)
      let url='http://localhost:8080/src/data/index.data'
        fetch(url).then((res)=>{
              res.json().then((data)=>{
                  setTimeout(()=>{
                      console.log(this)
                  pubsub.publish('CTL_LOADING',false)
                 if (!this.bMount) return
                  this.setState({
                      listData:data
                  })
                  },1000)

              })
        }).catch((data)=>{
          console.log(data.status)
        })
    }
    componentDidMount(){
        this.props.router.replace('home')
       this.getDate()
    }
    render(){
        return(
           <div className="home">
               <Solider/>
               <NewList dataname="home" listData={this.state.listData}/>
           </div>

        )
    }
}
export default Home