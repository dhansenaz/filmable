import {Switch, Route} from 'react-router-dom';
import React from 'react'
import CreateYourOwn from './components/CreateYourOwn';
import App from './App'
import Nav from './components/Nav'
import Home from './components/Home'
import OurList from './components/OurList'
import NewList from './components/NewList'



export default(


    <Switch>

        <Route path="/" exact component={Home} />
        <Route path='/createyourown' component={CreateYourOwn} />
        <Route path='/ourlist' component={OurList} />
        <Route path='/newlist' component={NewList} />

    </Switch>



)