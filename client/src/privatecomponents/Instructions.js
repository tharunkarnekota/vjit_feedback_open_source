import React from 'react'
import "./Styles1.css"
import { Link } from 'react-router-dom'

import vjitlogo from './vjit2.jpeg'

const Instructions = () => {
  return (
    
        <div className="background-style">
        <div className="div1-style">
          <br />
            <img className="img1" src={vjitlogo} alt="" />
            <h1 className="head-style">Important Instructions! Read Carefully before Giving Your Valuable Feedback</h1>
            <h4>You Guys are Engineers,Please Give Feedback Professionally</h4>
        
                <p><b>
                     -- You are Anoymous to us,Feel Free to Give Genuine Feedback <br />
                     -- Score Each Faculty on a scale of 1 to 10 for each Attribute that will be Listed in Header <br />
                     -- 10-Excellent 9-Extremely Good 8-Very Good 7-Good 6-Moderately Good 5-Moderate 4-Tolerable 3-Poor 2-Very Poor 1-Extremely Poor <br />
                     -- All the fields are Mandatory <br />
                     -- Comment Section is not mandatory but any sort of misuse will be traced out <br />
                     -- After filling all the fields,press submit <br />
                     -- Incase you don't submit or press exit you will have to choose all the fields again <br />
                     -- Once you give your feedback you won't be able to give your feedback again
                </b></p>
                
                <Link to='/dashboard' className="btn btn-success">Start</Link>
                <br /><br /><br /><br /><br />

            </div>
        </div>
    
  )
}

export default Instructions