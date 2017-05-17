/**
 * Created by Administrator on 2017/4/25.
 */
import React from 'react'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './components/Home'
import App from './components/App'
import Article from './components/Article'
import Column from './components/Column'
import Error from './components/Error'
import Follow from './components/Follow'
import FootBar from './components/FootBar'
import Login from './components/Login'
import NavBar from './components/NavBar'
import NewList from './components/NewList'
import Reg from './components/Reg'
import Solider from './components/Solider'
import User from './components/User'
const RouterConfig=()=>(
        <Router history={hashHistory}>
            <Route path="/" component={App }>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="article" component={Article}>
                    <Route path=':aid' component={Article}/>
                </Route>
                <Route path="column" component={Column}/>
                <Route path="follow" component={Follow}/>
                <Route path="footbar" component={FootBar}/>
                <Route path="login" component={Login}/>
                <Route path="navbar" component={NavBar}/>
                <Route path="newlist" component={NewList}/>
                <Route path="reg" component={Reg}/>
                <Route path="soilder" component={Solider}/>
                <Route path="user" component={User}/>
                <Route path="*" component={Error}/>
            </Route>
        </Router>
)
export default RouterConfig