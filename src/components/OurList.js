import React, { Component } from "react";
import axios from "axios";
import './ourlist.css'
import {Link} from 'react-router-dom'
import  './sundance-film-festival.png'

class OurList extends Component {
  constructor() {
    super();

    this.state = {
      festivals: []
    };
  }
  componentDidMount() {
    axios.get("/api/ourfestivals").then(response => {
      this.setState({ festivals: response.data });
    });
  }
  render() {
    const ourList = this.state.festivals.map(element => {
      return (
        <div className='list-container'>
          <ul className='list'>
          <img className="img-circle" />
            
            <div>Festival Name - {element.festival_name}</div>
            <div>Festival Start Date - {element.start_date}</div>
            <div>Festival End Date - {element.end_date}</div>
            <div>Early Submission Date - {element.early_submission_date}</div>
            <div>Final Submission Date - {element.final_submission_date}</div>
            <div>Entry Fee - {element.fee}$</div>
            <div>Contact Person - {element.contact_person}</div>
            <div>Contact Email - {element.contact_email}</div>
            <div>Contact Phone - {element.contact_phone}</div>
            <a href={element.website}>Website Click Here</a>
          </ul>
        </div>
      );
    });
    return <div>
    {ourList}
    {ourList}
    {ourList}
    {ourList}
    
    </div>;
  }
}

export default OurList;
