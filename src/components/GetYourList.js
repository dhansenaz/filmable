import React,  {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class GetYourList extends Component{
    constructor(){
        super()

        this.state = {
            genres: []
        }
    }

componentDidMount() {
    axios.get("/api/getyourlist").then(response => {
        this.setState({genres: response.data})
         
        // console.log(response.data);
    });
    }
    render(){
      
        console.log(this.state.genres)
        return(

            <div>
                {this.state.genres ? this.state.genres.map(element => {
                        return(
                            <div>
                                {element.contact_person}

                            </div>
                        )
                }) : null}
            </div>
        )
    }
}
export default GetYourList
