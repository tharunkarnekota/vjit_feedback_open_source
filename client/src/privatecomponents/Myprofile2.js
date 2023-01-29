import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Header from '../headers/Header';
import "./Myprofile.css"

const Myprofile = () => {
    const [data,setData] = useState (null);
    const [review,setReview] = useState([])

    const [newgithub,setNewgithub] = useState("")
    const [newlinkedin,setNewlinkedin] = useState("")
    const [newskill,setNewskill] = useState("")
    const [description,setDescription] = useState("")
    const [project,setProject] = useState("")
    
    
    const [g,setG] = useState(0);       //github
    const [l,setL] = useState(0);       //linkedin
    const [s,setS] = useState(0);       //skills edit
    const [d,setD] = useState(0);       //description
    const [p,setP] = useState(0);       //project
    const [del,setDel] = useState(0);       //delete my account
    const [returnToLoginAfterDelAcc,setReturnToLoginAfterDelAcc] = useState(0);      //return to login page after deleting account

    const gHandler = () =>{
        if(githubhandler === 0){
            setG(1)
        }
        if(g === 1){
            setG(0)
        }
    }

    const lHandler = () =>{
        if(l === 0){
            setL(1)
        }
        if(l === 1){
            setL(0)
        }
    }

    const sHandler = () =>{
        if(s === 0){
            setS(1)
        }
        if(s === 1){
            setS(0)
        }
    }


    const dHandler = () =>{
        if(d === 0){
            setD(1)
        }
        if(d === 1){
            setD(0)
        }
    }

    const pHandler = () =>{
        if(p === 0){
            setP(1)
        }
        if(p === 1){
            setP(0)
        }
    }

    const delAccHandler = () =>{
        if(del === 0){
            setDel(1)
        }
        if(del === 1){
            setDel(0)
        }
    }

    const x="https://studentshubvjit2.netlify.app/indprofile/"
    const y="https://studentshubvjit2.netlify.app/indprofile2/"

    useEffect(()=>{
        axios.get('https://vjitfeedback2.cyclic.app/myprofile',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res => {
                setData(res.data);
                setProject(res.data.project ? res.data.project : "");
                setDescription(res.data.description ? res.data.description : "");
                setNewskill(res.data.skill)
            })

        
        axios.get('https://vjitfeedback2.cyclic.app/myreview',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(response => setReview(response.data))

    },[])



   

    const githubhandler = e =>{
        e.preventDefault();
        if(newgithub.substr(0,19) === "https://github.com/" || newgithub.substr(0,19) === "https://Github.com/")
        {
            axios.put(`https://studentshubvjit2.herokuapp.com/updatemygithub/${data._id}`,{newgithub:newgithub},{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data); }
            )
            setNewgithub("")
        }
        else{
            alert('invalid github link plz make sure link starts with https')
        }
    }
  
    const linkedinhandler = e =>{
        e.preventDefault();
        if(newlinkedin.substr(0,25) === "https://www.linkedin.com/" )
        {
            axios.put(`https://studentshubvjit2.herokuapp.com/updatemylinkedin/${data._id}`,{newlinkedin:newlinkedin},{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data); }
            )
            setNewlinkedin("")
        }
        else{
            alert('invalid Linkedin link plz make sure link starts with https')
        }
    }

    const skillsubmithandler = e  =>{
        e.preventDefault();
        if(newskill){
            axios.put(`https://studentshubvjit2.herokuapp.com/updatemyprofile/${data._id}`,{newSkill:newskill},{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {alert(response.data.message); setData(response.data.update)}
            );
        }
        setNewskill("")
    }
    
    const descriptionsubmithandler = e  =>{
        e.preventDefault();
        if(description){
            axios.put(`https://studentshubvjit2.herokuapp.com/updatemydescription/${data._id}`,{ description:description },{headers : {'x-token' : localStorage.getItem('token')}}).then(
            response => {alert(response.data.message); setData(response.data.update)}
            );
        }
        else{
            alert("Please Enter some content")
        }
        setDescription("")
    }


    const projectsubmithandler = e  =>{
        e.preventDefault();
        if(project){
            axios.put(`https://studentshubvjit2.herokuapp.com/updatemyproject/${data._id}`,{ project:project },{headers : {'x-token' : localStorage.getItem('token')}}).then(
                response => {
                    alert(response.data.message); 
                    setData(response.data.update)
                }
            );
        }
        else{
            alert("Please Enter some content")
        }
        setProject("")
    }

    const msgBHandler = index =>
    {
        axios.put(`https://studentshubvjit2.herokuapp.com/msgblock/${index}`).then(
            response => {
                alert(response.data.message); 
                setData(response.data.update)
            }
        ); 
    }

    const msgAHandler = index =>
    {
        axios.put(`https://studentshubvjit2.herokuapp.com/msgallow/${index}`).then(
            response => {
                alert(response.data.message); 
                setData(response.data.update)
            }
        );
    }

    const deletereviewhandler = id =>{
        axios.delete(`https://studentshubvjit2.herokuapp.com/deletereview/${id}`,{headers : {'x-token' : localStorage.getItem('token')}}).then(
          arr =>{ 
            alert(arr.data.message); 
            setReview(arr.data.update) 
            }
        )
    }

    const deleteHandler = id =>{
        axios.delete(`https://studentshubvjit2.herokuapp.com/delete/${id}`,{headers : {'x-token' : localStorage.getItem('token')}}).then(
          arr => alert(arr.data)          
        )
        setReturnToLoginAfterDelAcc(1);
    }

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

                                {/* {data.github || data.github === "-" ?  */}
                                {data.github ? 
                                    <div><b>Github : </b><a href={data.github} rel="noreferrer" target="_blank">{data.github}</a></div> 
                                : 
                                    <div>
                                        <button className="btn btn-primary" onClick={()=>gHandler()}>Add Github</button><br /><br />
                                        { g === 1 ? 
                                            <div>
                                                <form onSubmit={githubhandler}>
                                                <small>https://github.com/ is must at starting</small><br />
                                                    <small><b>Example :</b> https://github.com/tharunkarnekota</small><br />
                                                    
                                                    <input type="text" placeholder="Enter your github link" name="newgithub" value={newgithub} onChange={e => setNewgithub(e.target.value) } />&nbsp;&nbsp;
                                                    <input type="submit" className="btn btn-success" value="submit" />
                                                </form>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                }

                                {/* {data.linkedin || data.linkedin === "-" ?  */}
                                {data.linkedin  ? 
                                    <div><b>Linkedin : </b><a href={data.linkedin} rel="noreferrer" target="_blank">{data.linkedin}</a></div> 
                                    : 
                                    <div>
                                        <br />
                                        <button className="btn btn-primary" onClick={()=>lHandler()}>Add Linkedin</button><br /><br />
                                        { l === 1 ? 
                                            <div>
                                                <form onSubmit={linkedinhandler}>
                                                <small>https://www.linkedin.com/ is must at starting</small><br />
                                                    <small><b>Example :</b> https://www.linkedin.com/in/tharun-karnekota/</small><br />
                                                    <input type="text" placeholder="Enter your linkedin link" name="newlinkedin" value={newlinkedin} onChange={e => setNewlinkedin(e.target.value) } />&nbsp;&nbsp;
                                                    <input type="submit" className="btn btn-success" value="submit" />
                                                </form>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                }


                                <p>India</p>
                            </div>




                    {/* ------ skills ------ */}

                                <h4><u>Skills</u>:-</h4>
                                <ul>
                                    {data.skill.split(",").map((skills,index) => {
                                        return <li key={index} className="text-primary" style={{ listStyleType: "none", marginLeft: "-30px" }}>{skills}</li>;
                                    }
                                    )}
                                </ul>

                                <center>
                                    <center>
                                    <div>
                                        <button className="btn btn-success" onClick={()=>  sHandler() }> Edit </button> <br /><br />
                                    </div>
                                    </center>
                                    
                                    { s === 1 ? 
                                        <div> 
                                            <small>seperate skills with comma(,)</small>
                                            <form onSubmit={skillsubmithandler}>
                                                <input type="text" placeholder="Enter your complete skills" value={newskill} onChange={(e)=> setNewskill(e.target.value)} />&nbsp;
                                                <input type="submit" value="submit" className="btn btn-primary" />
                                            </form><br />
                                        </div> 
                                        : 
                                        null 
                                    }
                                </center>




                    {/* ------- description / Bio ------- */}

                                <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />    
                                <h1>Bio:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                        {data.description ?   
                                            <pre>{data.description}</pre> 
                                        : 
                                            <p>No Bio Added Yet</p> 
                                        }
                                    </div>
                                    <br />

                                    <center>
                                        
                                        { !data.description ? 
                                            <div><button className="btn btn-success" onClick={()=>  dHandler() }> Add Bio </button> <br /><br /></div> 
                                        : 
                                            <div><button className="btn btn-success" onClick={()=>  dHandler() }> Edit </button> <br /><br /></div> 
                                        }
                                        
                                        { d === 1 ? 
                                            <div> 
                                                <form onSubmit={descriptionsubmithandler}>
                                                    <textarea className='textareaa' placeholder="Enter your Bio" value={description} onChange={(e)=> setDescription(e.target.value)}  rows="3" cols="50"></textarea><br />
                                                    <input type="submit" value="submit" className="btn btn-primary" />
                                                </form><br />
                                            </div> 
                                            : 
                                            null 
                                        }

                                    </center>
                                </center>
                                </div><br />




                    {/* ------- projects ------- */}
                            
                                <div className="card" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                                <h1>Projects:-</h1>
                                <center>
                                    <div className="card" style={{"width":"85%",borderRadius:"10px"}}><br />
                                        {data.project ?  
                                            <pre>{data.project}</pre>
                                        : 
                                            <p>No project Added Yet</p> 
                                        }
                                    </div>
                                    <br />

                                    <center>

                                        { !data.project ? 
                                            <div><button className="btn btn-success" onClick={()=>  pHandler() }> Add project </button> <br /><br /></div> 
                                        : 
                                            <div><button className="btn btn-success" onClick={()=>  pHandler() }> Edit </button> <br /><br /></div> 
                                        }
                                            
                                            
                                        { p ===1 ? 
                                            <div> 
                                                <form onSubmit={projectsubmithandler}>
                                                    <textarea className='textareaa' value={project} placeholder="Enter your projects info" onChange={(e)=> setProject(e.target.value)}  rows="3" cols="50"> </textarea><br />
                                                    <input type="submit" value="submit" className="btn btn-primary" />
                                                </form><br />
                                            </div> 
                                            : 
                                            null 
                                        }
                                    </center>
                                </center>
                                </div><br /><br /><br />




                    {/* ------- Message ------- */}
                        
                            <div className="card msg" style={{"width":"80%",boxShadow: "10px 10px 5px lightblue"}}><br />
                            <center>
                                <h2 style={{"color":"palevioletred"}}>Messages From Friends:-</h2><br />
                            </center>

                            {review.length>=1 ?

                                    review.map((review,index) =>
                                        <div key={index}>
                                            <center>
                                            <div className="card " style={{"width":"85%",textAlign:"center",display:'flex',flexDirection:'row',padding:"15px",overflow: 'auto',boxShadow: "2px 2px 0.5px  black"}}>
                                            <div style={{width:"90%",alignItems:"center"}}>

                                                {review.messageSenderclgId ?
                                                    <div>
                                                        {/* if review.messageSenderclgId.length === 10 then it is student profile
                                                        if not then it is alumini profile, who has sent msg to you */}
                                                        {review.messageSenderclgId.length === 10 ?   
                                                            <div>
                                                                {review.messageSenderId ? 
                                                                    <div><a href={x+review.messageSenderId}> <h4>{review.messageSender}</h4> </a></div>
                                                                    :
                                                                    <h4 >{review.messageSender}</h4> 
                                                                }
                                                            </div>
                                                            :
                                                            <div>
                                                                {review.messageSenderId ? 
                                                                    <div><a href={y+review.messageSenderId}><h4 >{review.messageSender}</h4> </a></div>
                                                                    :
                                                                    <h4 >{review.messageSender}</h4> 
                                                                }
                                                            </div>
                                                        }
                                                    </div>
                                                    :
                                                    <h4 >{review.messageSender}</h4> 
                                                }

                                                <pre >{review.message}</pre>
                                                {review.date ? 
                                                    <div><p><b>Date:</b>{review.date.slice(0,10)}</p></div>
                                                    : 
                                                    null
                                                }
                                            </div>
                                            <div style={{width:"10%",alignItems:"center",marginTop:'10px'}}>
                                                <button className="btn btn-danger" onClick={()=>deletereviewhandler(review._id)}>X</button>
                                            </div>
                                            </div>
                                            <br />
                                            </center>
                                        </div>
                                    )
                                :
                                    <p>No Message received yet</p>
                            }
                                    
                            </div><br />
                            
                    

                            { data.msg ? 
                                <div>
                                    <br />
                                    { data.msg === "allow"  ? 
                                        <div>Not intersted to get messages from others - <button className="btn btn-danger" onClick={()=>  msgBHandler(data._id) }>Block Messages</button><br /><br /></div> 
                                        : 
                                        <div>willing to get messages from others - <button className="btn btn-success" onClick={()=>  msgAHandler(data._id) }>Allow Messages</button><br /><br /></div> 
                                    }
                                </div >
                                :
                                null
                            }
                    </center>
                </div>
            :
                <h3 style={{textAlign:"center"}}>Loading...</h3>
            }




            {/* ------- Delete My Account ------- */}

            <br />
            <center>
                <button className="btn btn-danger" onClick={()=> delAccHandler() }>Delete my Account</button><br /><br />
          
                {del === 1 && 
                    <div><p><b>Are you sure?</b></p> <button className="btn btn-danger" onClick={()=>  deleteHandler(data._id) }>yes</button> &nbsp;&nbsp; <button className="btn btn-success" onClick={()=> setDel(0) }>No</button></div> 
                } 
            </center>
            <br /><br /><br /><br /><br />

            { returnToLoginAfterDelAcc===1 && <Navigate to='/login' /> }
        </div>
    )
}

export default Myprofile
