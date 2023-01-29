import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Logo from './Logo'

const Home = () => {
    return (
        <div className='img'>
            <center>

             <Logo />  
            <div className='hom'>
                <section  style={{"marginTop":"170px"}}>
                
                    <h1  className='home-heading' style={{"paddingTop":"2rem"}} ><b>VJIT feedback portal</b></h1>
                    <p>
                        create a student profile and feedback on your teachers
                    </p>
                    
                    <Link to='/admin' className="btn btn-primary">Admin</Link>&nbsp;&nbsp;&nbsp;
                    <Link to='/login' className="btn btn-success">LogIn</Link>
                
                </section>
            </div>

            </center>
        </div>
        
    )
}

export default Home
