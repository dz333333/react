/**
 * Created by Administrator on 2017/4/25.
 */

import React,{Component} from 'react'
import NavBar from './NavBar'
import FootBar from './FootBar'
import Loading from './Loading'
import pubsub from 'pubsub-js'
import QueueAnim from 'rc-queue-anim'
class App extends Component{
    constructor(){
        super()
        this.state={
            bLoading:''
        }
        pubsub.subscribe('CTL_LOADING',(mess,data)=>{
            this.setState({
                bLoading:data
            })
        })
    }

    componentWillUnmount(){
        pubsub.clearAllSubscriptions()
    }
    render(){
        let path=this.props.router.location.pathname
        let Nav=true
        let Foot=true
        if(/follow|column/.test(path)){
            pubsub.publish('CTL_LOADING',false)
        }
        if(/home|follow|column/.test(path)){
            Nav=true
            Foot=true
        }else if(/user|login|reg/.test(path)){
            Nav=false
            Foot=true
        }else if(/article/.test(path)){
            Nav=false
            Foot=false
        }

        return(
            <div>

                {Nav?<NavBar/>:''}
                <Loading show={this.state.bLoading}/>
               <QueueAnim
               duration={1000}
               >
                   {this.props.children }
               </QueueAnim>

                {Foot?<FootBar/>:''}
            </div>
        )
    }
}
export default App