
import React,{useState,useEffect} from 'react'
import { Navigate,useParams } from 'react-router-dom';
import axios from 'axios';

import Header from "../headers/Header"
import "./Dashboard.css"

const Feedback2 = () => {
    const {tname,tid}=  useParams()
    
    const [data,setData] = useState ([]);
    const [matched,setMatched] = useState(false);
    const [navi, setNavi] = useState(false);

   
  
    const [rating, setRating] = useState({
        subjectKnowledge : "",
        communication : "",
        presentationSkills : "",
        punctuality : "",
        controlOverTheClass : "",
        audibility : "",
        professionalism : "",
        contentOfLecture : "",
        clarificationOfDoubts : "",
        explanationWithExamples : "",
        comment : "",


        teacherName : tname,
        teacherrefid : tid,
        deptclass : localStorage.getItem("dept"),

        oeSubjSec : ""

    })
    const {subjectKnowledge,communication,presentationSkills,punctuality,controlOverTheClass,audibility,professionalism,contentOfLecture,clarificationOfDoubts,explanationWithExamples,comment,oeSubjSec} = rating

    
    useEffect(()=>{

        axios.get('https://vjitfeedback2.cyclic.app/checkingoe',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data))

    },[])


    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }

    



    const submitHandler = e =>{
        e.preventDefault();

        if( subjectKnowledge && communication && presentationSkills && punctuality && controlOverTheClass && audibility && professionalism && contentOfLecture && clarificationOfDoubts && explanationWithExamples && oeSubjSec ){
            axios.post('https://vjitfeedback2.cyclic.app/comment2',rating,{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => alert(res.data.message))  

            setNavi(true)
        }
        else{
            alert("fill complete info")
        }
    }

    if(navi){
        return <Navigate to='/Dashboard' />
    }

    const Handler = e =>{
        setRating({...rating,[e.target.name]:e.target.value})
    }
    
    
    return (
        <div >
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>feedback portal</h1>
                
            { data.length < 1 ?
            
            <div>
            <div className="profiles">
            <center>
                <img 
                    className="round-img"
                    src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                    height="100" width="150"
                    alt="userPhoto"  
                />  

                     
                
                    <h5 >OE Subject & Section :</h5>&nbsp;&nbsp;
                    <select name="oeSubjSec" id="s1" onChange={Handler} >
                        <option value="">Select</option>
                        <option value="ELEMENTS OF CIVIL ENGINEERING">ELEMENTS OF CIVIL ENGINEERING</option>
                        <option value="SMART CITIES-A">SMART CITIES-A</option>
                        <option value="SMART CITIES-B">SMART CITIES-B</option>

                        <option value="DISASTER MANAGEMENT-A">DISASTER MANAGEMENT-A</option>
                        <option value="DISASTER MANAGEMENT-B">DISASTER MANAGEMENT-B</option>

                        <option value="NON-CONVENTIONAL ENERGY SOURCES-A">NON-CONVENTIONAL ENERGY SOURCES-A</option>
                        <option value="NON-CONVENTIONAL ENERGY SOURCES-B">NON-CONVENTIONAL ENERGY SOURCES-B</option>

                        <option value="FUNDAMENTALS OF ELECTRICAL POWER GENERATION AND PROTECTION">FUNDAMENTALS OF ELECTRICAL POWER GENERATION AND PROTECTION</option>
                        <option value="ELEMENTS OF MECHANICAL ENGINEERING">ELEMENTS OF MECHANICAL ENGINEERING</option>

                        <option value="PRODUCT ENGINEERING-A">PRODUCT ENGINEERING-A</option>
                        <option value="PRODUCT ENGINEERING-B">PRODUCT ENGINEERING-B</option>

                        <option value="INTRODUCTION TO MICROCONTROLLERS">INTRODUCTION TO MICROCONTROLLERS</option>
                        <option value="BASIC ELECTRONICS">BASIC ELECTRONICS</option>
                        <option value="BASICS OF OPERATION SYSTEMS">BASICS OF OPERATION SYSTEMS</option>

                        <option value="CORE JAVA PROGRAMMING-A">CORE JAVA PROGRAMMING-A</option>
                        <option value="CORE JAVA PROGRAMMING-B">CORE JAVA PROGRAMMING-B</option>

                        <option value="FUNDAMENTALS OF COMPUTER NETWORKS">FUNDAMENTALS OF COMPUTER NETWORKS</option>
                        <option value="FOUNDATION OF ARTIFICIAL INTELLIGENCE">FOUNDATION OF ARTIFICIAL INTELLIGENCE</option>
                        <option value="TOTAL QUALITY MANAGEMENT-A">TOTAL QUALITY MANAGEMENT-A</option>
                        <option value="TOTAL QUALITY MANAGEMENT-B">TOTAL QUALITY MANAGEMENT-B</option>
                        <option value="TOTAL QUALITY MANAGEMENT-C">TOTAL QUALITY MANAGEMENT-C</option>

                    </select>
                    <br /><br />
                    
                
                    <p>10-Excellent 9-Extremely Good 8-Very Good 7-Good 6-Moderately Good 5-Moderate 4-Tolerable 3-Poor 2-Very Poor 1-Extremely Poor <br /></p>

                    <div className = "row" style={{borderStyle: "solid",padding:"30px"}}>
                    <div className='col-md-6'>

                        
                            <div>
                                <h5 style={{textAlign: "justify", display: "inline"}}>Subject Knowledge :</h5>&nbsp;&nbsp;
                                <select name="subjectKnowledge" id="s1" onChange={Handler} >
                                    <option value="">Select</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8">8</option>
                                    <option value="7">7</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                                <br /><br />
                                <h5 style={{textAlign: "justify", display: "inline"}}>Communication :</h5>&nbsp;&nbsp;
                                <select name="communication" id="s2" onChange={Handler} >
                                    <option value="">Select</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8">8</option>
                                    <option value="7">7</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                                <br /><br />

                                <h5 style={{textAlign: "justify", display: "inline"}}>Presentation Skills :</h5>&nbsp;&nbsp;
                                <select name="presentationSkills" id="s3" onChange={Handler} style={{display: "inline-block"}}>
                                    <option value="">Select</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8">8</option>
                                    <option value="7">7</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                                <br /><br />

                                <h5 style={{textAlign: "justify", display: "inline"}}>Punctuality :</h5>&nbsp;&nbsp;
                                <select name="punctuality" id="s4" onChange={Handler} style={{display: "inline-block"}}>
                                    <option value="">Select</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8">8</option>
                                    <option value="7">7</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                                <br /><br />

                                <h5 style={{textAlign: "justify", display: "inline"}}>Control Over The Class :</h5>&nbsp;&nbsp;
                                <select name="controlOverTheClass" id="s5" onChange={Handler} style={{display: "inline-block"}}>
                                    <option value="">Select</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8">8</option>
                                    <option value="7">7</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select><br /><br />
                                
                            </div>
                        
                        </div>
                
                        <div className='col-md-6'>

                       

                            <div>
                            <h5 style={{textAlign: "justify", display: "inline"}}>Audibility:</h5>&nbsp;&nbsp;
                            <select name="audibility" id="s6" onChange={Handler} style={{display: "inline-block"}}>
                                <option value="">Select</option>
                                <option value="10">10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                            <br /><br />

                            <h5 style={{textAlign: "justify", display: "inline"}}>Professionalism :</h5>&nbsp;&nbsp;
                            <select name="professionalism" id="s7" onChange={Handler} style={{display: "inline-block"}}>
                                    <option value="">Select</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8">8</option>
                                    <option value="7">7</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                            </select>
                            <br /><br />

                            <h5 style={{textAlign: "justify", display: "inline"}}>Content Of Lecture :</h5>&nbsp;&nbsp;
                            <select name="contentOfLecture" id="s8" onChange={Handler} style={{display: "inline-block"}}>
                                    <option value="">Select</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8">8</option>
                                    <option value="7">7</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                            </select>
                            <br /><br />

                            <h5 style={{textAlign: "justify", display: "inline"}}>Clarification Of Doubts :</h5>&nbsp;&nbsp;
                            <select name="clarificationOfDoubts" id="s9" onChange={Handler} style={{display: "inline-block"}}>
                                    <option value="">Select</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8">8</option>
                                    <option value="7">7</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                            </select>
                            <br /><br />

                            <h5 style={{textAlign: "justify", display: "inline"}}>Explanation With Examples :</h5>&nbsp;&nbsp;
                            <select name="explanationWithExamples" id="s10" onChange={Handler} style={{display: "inline-block"}}>
                                    <option value="">Select</option>
                                    <option value="10">10</option>
                                    <option value="9">9</option>
                                    <option value="8">7</option>
                                    <option value="7">6</option>
                                    <option value="6">6</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                            </select>
                            </div>
                        

                    </div>
                    </div>
                        <br />
                        <br />
                        
                    
                        </center>

                        </div>
                        <div>

                            <div className="form-group">
                                <label htmlFor="comment"><h4>Comment: <small>(Max : 100 characters )</small></h4></label>
                                <textarea className="form-control" placeholder='feedback on this teacher' rows="3"  onChange={Handler} name="comment" id="comment"></textarea>
                            </div><br />
                            <center>
                                <small>Note : Do select subject on top</small><br />
                                <input type="submit" onClick={submitHandler} className='btn btn-success' value="submit feedback" />
                            </center>
                            <br />
                            <br />
                        
                            </div>
                            </div>
                            
                            :
                        
                        <h1>you have already feedbacked OE</h1>
                        }
                           
                        
                
                <br /><br /><br /><br /><br /><br /><br />

            </section>

        </div>
    )
}

export default Feedback2



