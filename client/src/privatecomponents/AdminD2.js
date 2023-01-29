import React,{useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import Header2 from "../headers/Header2"
import "./Dashboard.css"

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const AdminDashboard = () => {
    
    const [data,setData] = useState ([]);

    const [teacher,setTeacher] = useState("")
    const [deptsec,setDeptsec] = useState("")
    const [subj,setSubj] = useState("")




 


    const searchHandler = e =>{
        e.preventDefault();

        if(!teacher && !deptsec && !subj){
            axios.get("https://vjitfeedback2.cyclic.app/allfeedbacks",{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data) )
        }

        if(teacher && !deptsec && !subj){
            setData(data.filter(profile => profile.teacherName.toLowerCase().includes(teacher)))
        }
        if(!teacher && deptsec && !subj){
            setData(data.filter(profile => profile.studentclass.toLowerCase().includes(deptsec)))
        }
        if(!teacher && !deptsec && subj){
            setData(data.filter(profile => profile.subject.toLowerCase().includes(subj)))
        }


        if(teacher && deptsec && !subj){
            setData(data.filter(profile => profile.teacherName.toLowerCase().includes(teacher) && profile.studentclass.toLowerCase().includes(deptsec)))
        }
        if(!teacher && deptsec && subj){
            setData(data.filter(profile => profile.studentclass.toLowerCase().includes(deptsec) && profile.subject.toLowerCase().includes(subj)))
        }
        if(teacher && !deptsec && subj){
            setData(data.filter(profile => profile.teacherName.toLowerCase().includes(teacher) && profile.subject.toLowerCase().includes(subj)))
        }


        if(teacher && deptsec && subj){
            setData(data.filter(profile => profile.teacherName.toLowerCase().includes(teacher) && profile.subject.toLowerCase().includes(subj) && profile.studentclass.toLowerCase().includes(deptsec)))
        }
    }

    
    useEffect(()=>{

        axios.get("https://vjitfeedback2.cyclic.app/allfeedbacks",{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data) )

    },[])
    
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }

    
    return (
        <div >
            <Header2 />
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>feedback portal</h1>
                
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <h5 className="navbar-brand">Browse and find student feedback <span style={{color:"blue"}}> 🤝 </span></h5>

                    </div>
                </nav>

                
                
                <form onSubmit={searchHandler} >
                    <input  type="text" onChange={(e) => setTeacher(e.target.value)} placeholder="Teacher " aria-label="Search" />&nbsp;&nbsp;&nbsp;
                    <input  type="text" onChange={(e) => setDeptsec(e.target.value)} placeholder="dept section " aria-label="Search" />&nbsp;&nbsp;&nbsp;
                    <input  type="text" onChange={(e) => setSubj(e.target.value)} placeholder="subject" aria-label="Search" />&nbsp;&nbsp;&nbsp;

                    <input className="btn btn-outline-success" type="submit" value="search" />
                </form>


                {data.length >=1 ?
                <center>
                <table className="table" id="stocksData">
                <thead>
                    <tr>
                    <th scope="col">Index</th>
                        <th scope="col">Teacher</th>
                        <th scope="col">Dept</th>
                        <th scope="col">Student</th>
                        <th scope="col">ClgID</th>
                        <th scope="col">Subject</th>

                        <th scope="col">subjectKnowledge </th>
                        <th scope="col">communication</th>
                        <th scope="col">presentationSkills</th>
                        <th scope="col">punctuality</th>
                        <th scope="col">controlOverTheClass</th>
                        <th scope="col">audibility</th>

                        <th scope="col">professionalism</th>
                        <th scope="col">contentOfLecture</th>
                        <th scope="col">clarificationOfDoubts</th>
                        <th scope="col">explanationWithExamples</th>
                        <th scope="col">Comment</th>
                    
                    </tr>
                </thead>
                <tbody>
                {data.map((singleitem,index) => 
                    <tr key={index}>
                    
                        <td>{index}</td>
                        <td>{singleitem.teacherName}</td>
                        <td>{singleitem.studentclass}</td>
                        <td>{singleitem.studentName}</td>
                        <td>{singleitem.studentclgId}</td>
                        <td>{singleitem.subject}</td>

                        <td>{singleitem.subjectKnowledge }</td>
                        <td>{singleitem.communication}</td>
                        <td>{singleitem.presentationSkills}</td>
                        <td>{singleitem.punctuality}</td>
                        <td>{singleitem.controlOverTheClass}</td>

                        
                        <td>{singleitem.audibility }</td>
                        <td>{singleitem.professionalism}</td>
                        <td>{singleitem.contentOfLecture}</td>
                        <td>{singleitem.clarificationOfDoubts}</td>
                        <td>{singleitem.explanationWithExamples}</td>
                        <td>{singleitem.comment}</td>
                        
                    </tr>
                    )}
                
                </tbody>
                </table>
                </center>
                :
                <h4>Search with valid fields</h4>
                }


                <center>
                    <ReactHTMLTableToExcel className="btn btn-success"
                    table = "stocksData"
                    filename="reportexcel"
                    sheet="sheet"
                    buttonText="Export excel"/>
                </center>
                        
                
                <br /><br /><br /><br /><br /><br /><br />

            </section>

        </div>
    )
}

export default AdminDashboard



