import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Header from '../headers/Header';
import "./Myprofile.css"

const Myprofile = () => {
    const [data,setData] = useState (null);
    const [total,setTotal] = useState("");
    const [given,setGiven] = useState("");

    

    useEffect(()=>{
        axios.get('https://vjitfeedback2.cyclic.app/myprofile',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => {
                setData(res.data);
              
            })


            
        axios.get('https://vjitfeedback2.cyclic.app/nooftotalfeedbacks',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
            }).then(res => {
                if(localStorage.getItem('dept')[0] === "3" || localStorage.getItem('dept')[0] === "4"){
                    setTotal(res.data.length+1)
                }else{
                    setTotal(res.data.length)
                }
                
            })


        axios.get('https://vjitfeedback2.cyclic.app/noofgivenfeedbacks',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
            }).then(res => {
                setGiven(res.data.length);
                
            })

 

    },[])




    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    

    return (
        <div>
            <Header />

            {data ?
                <div className="profile bg-light card " style={{"margin":"10px"}}>
                    <center>
                            <img 
                                className="round-img"
                                src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                                height="250" width="450"
                                alt="userPhoto"
                            />  
                            <div>
                                <h2 style={{"color":"orange"}}><b>{data.fullname}</b></h2>
                                <h3>{data.collegeId}</h3>
                                <h4>{data.branch}</h4>
                                <p>{data.email}</p>
                                <p><b>Mobile : </b>{data.mobile}</p>
                                <h5>Number of feedbacks exists : <span style={{color:"red", fontSize:"40px"}}>{total}</span></h5>
                                <h5>Number of feedbacks given : <span style={{color:"red", fontSize:"40px"}}>{given}</span></h5>
                            </div>
                    </center>
                </div>
                :
                <h1>Loading...</h1>
            }


            <br /><br /><br /><br /><br />

        </div>
    )
}

export default Myprofile
