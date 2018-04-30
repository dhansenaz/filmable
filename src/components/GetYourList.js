import React,  {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./getyourlist.css"

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
                            <div className="new-list-container">
                                <div>Festival Name - {element.festival_name}</div>
                                <div>Start Date - {element.start_date}</div>
                                <div>End Date - {element.end_date}</div>
                                <div>Contact person - {element.contact_person}</div>
                                <div>Contact Email - {element.contact_email}</div>
                            </div>
                        )
                }) : null}
            </div>
        )
    }
}
export default GetYourList
