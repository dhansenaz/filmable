import React from 'react';

const Festival = (props) => {
    console.log("festival props", props)
    return (
        <div className="new-list-container">
            <div><strong>Festival Name - {props.children.festival_name}</strong></div>
            <div>Start Date - {props.children.start_date}</div>
            <div>End Date - {props.children.end_date}</div>
            <div>Contact person - {props.children.contact_person}</div>
            <div>Contact Email - {props.children.contact_email}</div>
            <div>Address - {props.children.address}</div>
            <div>Website - {props.children.website}</div>
            <div>Final Submit Deadline - {props.children.final_submission_date}</div>
            <div>Submission Fee - {props.children.fee}</div>
            
        </div>
        
    );
};

export default Festival;