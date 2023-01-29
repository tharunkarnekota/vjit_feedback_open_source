import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
 import './Register.css'

const Admin = () => {
    

    const [info,setInfo] = useState({
        username : '',
        passwordv : ''
    })
    const {username,passwordv} = info

    

    
    const [allow,setAllow] = useState(false)     

    const changeHandler3 = e =>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    const verifyHandler = e =>{
        e.preventDefault();
        console.log(username + passwordv)
        
        if(username && passwordv)
        {
        axios.post('https://vjitfeedback2.cyclic.app/verifyadminlogin',{username:username,passwordv:passwordv}).then(
            res => { 
                if(res.data.token)
                    {
                        localStorage.setItem('token',res.data.token);
                       
                        setAllow(true)
                    }
                else{
                        alert(res.data);
                }
            }
            )
        }
        else{
            alert("inValid Details");
        }
    }

    if(allow){
        return <Navigate to="/adminDashboard"/>
    }
    
  
   


    return (
        <div className='image'>
            <nav className="navbar bg-dark justify-content-left">
                <h1 style={{"marginLeft":"5px"}}>
                    <Link style={{"textDecoration": "none"}}  to='/'>VJIT Feedback portal</Link>
                </h1>
                <div className="justify-content-left" >
                    <h5 >
                        <Link to="/login" className="btn btn-secondary" style={{marginRight:"10px"}}>Student Login</Link>&nbsp;&nbsp;
                    </h5>
                </div>
            </nav>





                <section className="container">
                    <h1 className="large " style={{"color":"orange","marginTop":"100px","marginBottom":"1rem"  }} >Admin Sign In</h1>
                    <p className="lead" style={{"paddingBottom":"1rem"}}><b>Only Admins are allowed</b></p>
                    <form onSubmit={verifyHandler}>
                        <input className="form-control-lg m-1 border" style={{width:"50%"}} type="email"    placeholder="Enter Admin username"    name="username" value={username}   onChange={changeHandler3} /><br /><br />
                        <input className="form-control-lg m-1 border" style={{width:"50%"}} type="password" placeholder="Enter password" name="passwordv" value={passwordv} onChange={changeHandler3} /><br /><br />
                        <input type="submit" className="btn btn-primary" value="verify Admin"  style={{"marginBottom":"1rem"}} />
                    </form>
                    
                </section>

            



            <br /><br /><br /><br /><br /><br /><br /><br />

            
        </div>
    )
}

export default Admin
