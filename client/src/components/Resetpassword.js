import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Resetpassword = () => {
    const [code,setCode] = useState("")
    const [auth,setAuth] = useState(false)
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("")

    const submitHandler = e =>{
        e.preventDefault();
        console.log(code)
        if(password === confirmpassword ){
            if(code.length===40){
                if(password.length >= 6){
                    axios.post(`https://vjitfeedback2.cyclic.app/resetpassword/${code}`,{password:password,confirmpassword:confirmpassword}).then(
                    res => {
                        alert(res.data)
                        setAuth(true)
                    }
                )
                }
                else{
                    alert("password should minimum 6 characters")
                }
            }
            else{
                alert("Invalid code, plz enter valid code sent to your mail")
            }
            
        }
        else{
            alert("password and confirm password doesnt match")
        }
        
        
    }

    if(auth){
        return <Navigate to='/login' />
    }


    return (
        <div>
            
            <nav className="navbar bg-dark justify-content-left">
                <h1 style={{"marginLeft":"5px"}}>
                    <Link to='/'>VJIT'ians Hub</Link>
                </h1> 
                <div className="justify-content-left" >
                    <h5 >
                        <Link to="/register" className="btn btn-secondary" style={{margin:"12px"}}>Register</Link>
                        <Link to="/login" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
                    </h5>
                </div>
            </nav>
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"100px"}} >Reset password</h1><br />
                <small><b>Note :</b>Make sure you fill three inputs given below and then press Enter [ or ] click reset button given below</small><br />
                <small><b>Note :</b>If You got alert as "undefined" then try these forget password after few minutes</small><br /><br />

                <p className="lead"><b><b>Verify your code:</b></b></p>
                <form onSubmit={submitHandler}>
                    <input className="form-control-lg m-1 border" style={{width:"40%"}} type="text"    placeholder="Enter code received in your mail"    name="code" value={code}   onChange={ e => setCode(e.target.value) } /><br />
                    <small><b>Note :</b>Long press on the code shown in your mail gives option of copying it and paste it above</small><br /><br />
                    <p className="lead"><b><b>Change Password:</b></b></p>
                    <input className="form-control-lg m-1 border" style={{width:"40%"}} type="text"    placeholder="Enter new password"    name="password" value={password}   onChange={ e => setPassword(e.target.value) } /><br /><br />
                    <input className="form-control-lg m-1 border" style={{width:"40%"}} type="text"    placeholder="Enter new confirm password"    name="confirmpassword" value={confirmpassword}   onChange={ e => setConfirmpassword(e.target.value) } /><br /><br />

                    <input type="submit" className="btn btn-primary" value="Reset" />
                </form>
                <p>
                    Don't received mail? <Link to="/forgetpassword">Resend mail</Link>
                </p>
                <br /><br /><br /><br />
            </section>

        </div>
    )
}

export default Resetpassword
