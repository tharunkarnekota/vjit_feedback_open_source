import React,{useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'

import Header from "../headers/Header"
import "./Dashboard.css"

const Dashboard = () => {
    const [search,setSearch] = useState(null);
    const [data,setDataa] = useState ([]);



    
    useEffect(()=>{
        console.log(localStorage.getItem('dept'));
        axios.post("https://vjitfeedback2.cyclic.app/getAllTeachers2",{dept : localStorage.getItem('dept')}).then(res => setDataa(res.data) )

        
    },[])


    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }


   

    
    
    
    return (
        <div >
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>feedback portal</h1>
                
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <h5 className="navbar-brand">Browse and give your feedback </h5>

                        
                        
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
                                    <h2 style={{"color":"green"}}>{profile.teacherName}</h2>
                                    <h3>{profile.Department}</h3>
                                    <p>{profile.teachermob}</p>
                                    <p>{profile.teacheremail}</p>
                                    <h3><b>{profile.subject}</b></h3>
                                </div>

                                

                                <Link to={`/feedback/${profile.teacherName}/${profile._id}`} className="btn btn-primary">Feedback</Link>

                                <br />
                                <br />
                            </center>
                        </div>
                        </div>
                        )
                        
                    : 
                    <h4>Loading...</h4>

                }
                </div>
                </div>
                
                <br /><br /><br />

                { localStorage.getItem("dept")[0] === "3" ?
                
                    
                <div className="profile bg-light card " style={{"margin":"10px","width": "20rem",boxShadow: "10px 10px 5px lightblue"}}>
                <center>
                    <img 
                        className="round-img"
                        src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                        height="100" width="150"
                        alt="userPhoto"  
                    />  
                    
                    <div>
                        <h2 style={{"color":"green"}}>OE - 1</h2>
                        
                    </div>

                    <Link to={`/feedback2`} className="btn btn-primary">Feedback</Link>

                    <br />
                    <br />
                </center>
            </div>
            
                :
                
                null}


{ localStorage.getItem("dept")[0] === "4" ?
                
                    
                <div className="profile bg-light card " style={{"margin":"10px","width": "20rem",boxShadow: "10px 10px 5px lightblue"}}>
                <center>
                    <img 
                        className="round-img"
                        src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                        height="100" width="150"
                        alt="userPhoto"  
                    />  
                    
                    <div>
                        <h2 style={{"color":"green"}}>OE - 3</h2>
                        
                    </div>

                    <Link to={`/feedback3`} className="btn btn-primary">Feedback</Link>

                    <br />
                    
                    <br />
                </center>
            </div>
            
                :
                
                null}
                <br /><br />

<h3 style={{textAlign:"center",backgroundColor:"black",color:"white"}}>Developed By <b style={{color:"orange"}}>Tharun Karnekota</b> <small>[ IT Dept ( 19-23 Batch) ]</small></h3>
                
                <br /><br /><br /><br />

            </section>

        </div>
    )
}

export default Dashboard



