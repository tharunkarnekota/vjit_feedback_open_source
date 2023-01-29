import React,{useEffect, useState} from 'react'
import Header from '../headers/Header'


import axios from 'axios'

const Contact = () => {

    
    
   
    const [supportteam,setSupportteam] = useState([])

    
   


    useEffect(()=>{

        axios.get('https://vjitfeedback2.cyclic.app/getsupportteam').then(res => setSupportteam(res.data))

        

    },[])

    return (
        <div>
            <Header />
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Supporting Team</h1>
                <p className="lead">
                    Contact us for any queries
                </p>


                <div className="profiles ">

                    {supportteam.length>=1 ? 
                        supportteam.map( (profile,index) => 
                            <div className="profile bg-light card " key={index} style={{"margin":"20px",boxShadow: "10px 10px 5px lightblue"}}>
                            <center>
                                <img 
                                    className="round-img"
                                    src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                                    height="250" width="400"
                                    alt="userPhoto"
                                />
                                <div>
                                    <h2 style={{"color":"green"}}>{profile.name}</h2>
                                    <h3>{profile.clgid}</h3>
                                    <h4>{profile.position}</h4>
                                    <p><b>Mobile : </b>{profile.mobile}</p>
                                    <p><b>Email : </b>{profile.email}</p>
                                    
                                </div>
                                
                            </center>
                            </div>
                            )
                    : 
                        <h4>Loading...</h4>
                    }
                    
                </div>
                <br /><br />
              
                <br /><br />


                
                <br /><br /><br /><br /><br />
  
            </section>
        </div>
    )
}

export default Contact
