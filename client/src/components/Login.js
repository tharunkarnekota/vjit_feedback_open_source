import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'


const Login = () => {
    const [auth,setAuth] = useState(false)
    const [data,seData] = useState({
        email : '',
        clgId : '',
    })
    const {email,clgId} = data

    const changeHandler = e =>{
        seData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e =>{
        e.preventDefault();
        axios.post('https://vjitfeedback2.cyclic.app/login',data).then(
            res => { 
                if(res.data.token)
                    {
                        localStorage.setItem('token',res.data.token);
                        localStorage.setItem('dept',res.data.id);
                        setAuth(true)
                    }
                else{
                        alert(res.data);
                }
            }
            )
    }
    

    if(auth){
        return <Navigate to='/instructions' />
    }
    

    return (

        <div className='con' >
            <nav className="navbar bg-dark justify-content-left">
                <h1 className='heading' style={{"marginLeft":"5px"}}>
                    <Link style={{"textDecoration": "none"}} to='/'>VJIT Feedback portal</Link>
                </h1>
                
            </nav>

            <div  className='box'>             
                <section className="container">
                    <h1 className="large " style={{"color":"orange","marginTop":"100px","marginBottom":"1rem"  }} >Sign In</h1>
                    <p className="lead" style={{"paddingBottom":"1rem"}}><b>Sign into Your Account</b></p>
                    <form onSubmit={submitHandler}>
                        <input className="form-control-lg m-1 border" style={{width:"50%"}} type="email"    placeholder="Enter email"    name="email" value={email}   onChange={changeHandler} /><br /><br />
                        <input className="form-control-lg m-1 border" style={{width:"50%"}} type="clgId" placeholder="Enter rollno / collegeId" name="clgId" value={clgId} onChange={changeHandler} /><br /><br />
                        <input type="submit" className="btn btn-primary" value="login"  style={{"marginBottom":"1rem"}} />
                    </form>
                    
                </section>
            </div>
        </div>
        
    )  
}

export default Login
 