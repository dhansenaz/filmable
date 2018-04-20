import React, {Component} from 'react'
import axios from 'axios'
import CreateYourOwn from './CreateYourOwn'


class NewList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props, this.props.state)
        return(

<div>
    {this.props.location.state.newlist.map(element => {
        return(
            <div>
                {element}
            </div>
        )
    })}
</div>

        )
    }
}
export default NewList