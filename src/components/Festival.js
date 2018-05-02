import React from 'react';

const Festival = (props) => {
    console.log("festival props", props)
    return (
        <div className="new-list-container">
            <div><strong>Festival Name - {props.festival.festival_name}</strong></div>
            <div>Start Date - {props.festival.start_date}</div>
            <div>End Date - {props.festival.end_date}</div>
            <div>Contact person - {props.festival.contact_person}</div>
            <div>Contact Email - {props.festival.contact_email}</div>
            <div>Address - {props.festival.address}</div>
            <div>Website - {props.festival.website}</div>
            <div>Final Submit Deadline - {props.festival.final_submission_date}</div>
            <div>Submission Fee - {props.festival.fee}</div>
            
        </div>
        
    );
};

export default Festival;