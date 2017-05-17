/**
 * Created by Administrator on 2017/4/26.
 */
import '../assets/css/Loading.css'
import React from 'react'
import pubsub from 'pubsub-js'
class Loading extends React.Component{
  render(){
      let show=this.props.show||false
        return(
            <div>
                {show?<div className="spinner">
                        <div className="spinner-container container1">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                        </div>
                        <div className="spinner-container container2">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                        </div>
                        <div className="spinner-container container3">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                        </div>
                    </div>:''}
            </div>
        )
    }
}
export default Loading