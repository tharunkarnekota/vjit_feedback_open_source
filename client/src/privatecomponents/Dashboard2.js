import React,{useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'

import Header from "../headers/Header"
import "./Dashboard.css"

const Dashboard = () => {
    const [search,setSearch] = useState(null);
    const [data,setData] = useState ([]);
    
    useEffect(()=>{
        axios.get('https://vjitfeedback2.cyclic.app/allprofiles',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.collegeId.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.skill.toLowerCase().includes(search.toLowerCase()) | profile.branch.includes(search.toUpperCase()))))

        
    },[search])


    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }


    const searchHandler = e =>{
        e.preventDefault();
        console.log(search);
        axios.get('https://vjitfeedback2.cyclic.app/allprofiles',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => 
                !search ? console.log(res.data) : console.log(res.data.filter(profile => profile.collegeId===search | profile.email.toLowerCase()===search | profile.branch.toUpperCase()===search)))
                
    }
    
    
    return (
        <div >
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Students Hub</h1>
                
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <h5 className="navbar-brand">Browse and connect <span style={{color:"blue"}}> 🤝 </span></h5>

                        <form className="d-flex" onSubmit={searchHandler} >
                            <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="clgId /email /skill /branch" aria-label="Search" />
                            <input className="btn btn-outline-success" type="submit" value="search" />
                        </form>
                        
                    </div>
                </nav>


                <div className="profiles">
                <div className = "row" >
                    { data.length>=1 ?

                        data.map((profile,index) => 
                            <div className='col-md-4' key={index}>
                            <div className="profile bg-light card " style={{"margin":"10px","width": "20rem",boxShadow: "10px 10px 5px lightblue"}}>
                            <center>
                                <img 
                                    className="round-img"
                                    src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                                    height="100" width="150"
                                    alt="userPhoto"  
                                />  
                                <div>
                                    <h2 style={{"color":"green"}}>{profile.fullname}</h2>
                                    <h3>{profile.collegeId}</h3>
                                    <h4>{profile.branch}</h4>
                                    <p>{profile.email}</p>
                                    
                                    <Link to={`/indprofile/${profile._id}`} className="btn btn-primary">View Profile</Link>
                                </div>

                                <ul>
                                    {profile.skill.split(",").map((skill,index) => <li key={index} className="text-primary" style={{listStyleType:"none",marginLeft:"-30px"}}>{skill}</li>
                                        )}
                                    
                                </ul>
                            </center>
                        </div>
                        </div>
                        )
                    : 
                    <h4>Loading...</h4>

                }
                </div>
                </div>
                
                <br /><br /><br /><br /><br /><br /><br />

            </section>

        </div>
    )
}

export default Dashboard



