import {Switch, Route} from 'react-router-dom';
import React from 'react'
import CreateYourOwn from './components/CreateYourOwn';
import App from './App'
import Nav from './components/Nav'
import Home from './components/Home'
import OurList from './components/OurList'



export default(


    <Switch>

        <Route path="/" exact component={Home} />
        <Route path='/createyourown' component={CreateYourOwn} />
        <Route path='/ourlist' component={OurList} />

    </Switch>



)