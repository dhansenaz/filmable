import {Switch, Route} from 'react-router-dom';
import React from 'react'
import CreateYourOwn from './components/CreateYourOwn';
import App from './App'
import Nav from './components/Nav'
import Home from './components/Home'
import OurList from './components/OurList'
import NewList from './components/NewList'
import Login from './components/Login'
import SignUp from './components/SignUp'
import GetYourList from './components/GetYourList'
import Profile from './components/Profile'



export default(


    <Switch>

        <Route path="/" exact component={Home} />
        <Route path='/createyourown' component={CreateYourOwn} />
        <Route path='/ourlist' component={OurList} />
        <Route path='/newlist' component={NewList} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/getyourlist' component={GetYourList} />
        <Route path='/profile' component={Profile} />
        
        
        

    </Switch>



)