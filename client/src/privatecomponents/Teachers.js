import React, { useEffect, useState } from 'react'
import Header3 from '../headers/Header3'
import axios from 'axios'

const Teachers = () => {
    const [teachersData,setTeachersData] = useState([])
    const [presentuser,setpresentuser] = useState("")
    const [search,setSearch] = useState(null);

    const [data,setData]=useState({
        teacherName:'',
        teacherRole:'',
        teacherDepartment:'',
        teacheremail:'',
        teachermob:'',
        teacherqualification:'',
        teachersub:''
    })
    const {teacherName,teacherRole,teacherDepartment,teacheremail,teachermob,teacherqualification,teachersub} = data

    const teacherchangeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const teachersubmithandler = e =>{
        e.preventDefault();
        if(teacherName && teacherRole && teacherDepartment && teacheremail && teachermob && teacherqualification && teachersub)
        {
            axios.post('https://vjitfeedback2.cyclic.app/addTeacher',data,{
                    headers : {
                        'x-token' : localStorage.getItem('token')
                    }
                }).then(res => {alert(res.data.message); setTeachersData(res.data.update)})

            setData({teacherName:[''],teacherRole:[''],teacherDepartment:[''],teacheremail:[''],teachermob:[''],teacherqualification:[''],teachersub:['']});
        }
        else{
            alert("fill complete details")
        }
    }


    useEffect(()=>{
        axios.get('https://vjitfeedback2.cyclic.app/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setpresentuser(res.data))

        axios.get('https://vjitfeedback2.cyclic.app/getAllTeachers',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => 
            !search ? setTeachersData(res.data) : setTeachersData(res.data.filter(profile => profile.teacherName.toLowerCase().includes(search.toLowerCase())  | profile.teacherDepartment.includes(search.toUpperCase()) | profile.teacherRole.toLowerCase().includes(search.toLowerCase()) |  profile.teachersub.toLowerCase().includes(search.toLowerCase()) )))
            
    },[search])


    return (
        <div>
            <Header3 />
             
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Teacher's Hub</h1>
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <h3 className="navbar-brand">Browse and connect with Teachers <span style={{color:"blue"}}> 🤝 </span></h3>

                        <form className="d-flex" >
                            <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="name / branch" aria-label="Search" />
                            {/* <input className="btn btn-outline-success" type="submit" value="search" /> */}
                        </form>
                        
                    </div>
                </nav>


                <div className="profiles ">
                <div className = "row" >
                    {teachersData.length>=1 ? 
                        teachersData.map((profile,index) => 
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
                                    <h3>{profile.teacherDepartment}</h3>
                                    <h4>{profile.teacherRole}</h4>
                                    <p><b>{profile.teacherqualification}</b></p>
                                    <p>{profile.teachermob}</p>
                                    <p>{profile.teacheremail}</p>
                                    
                                </div>

                                <ul>
                                    {profile.teachersub.split(",").map((skill,index) => <li key={index} className="text-primary" style={{listStyleType:"none",marginLeft:"-30px"}}>{skill}</li>
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


                {presentuser === "admin" ?
                <div>
                    <center>
                        <h1>Add New Teacher </h1>
                        <form onSubmit={teachersubmithandler}>
                            <input type="text" className="form-control-lg m-1 border" value={teacherName} name="teacherName" placeholder="teacher Name" onChange={teacherchangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={teacherRole} name="teacherRole" placeholder="teacher Role" onChange={teacherchangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={teacherDepartment} name="teacherDepartment" placeholder="teacher Department" onChange={teacherchangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={teacheremail} name="teacheremail" placeholder="teacher Email" onChange={teacherchangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={teachermob} name="teachermob" placeholder="teacher mob" onChange={teacherchangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={teacherqualification} name="teacherqualification" placeholder="teacher qualification" onChange={teacherchangeHandler} /><br />
                            <input type="text" className="form-control-lg m-1 border" value={teachersub} name="teachersub" placeholder="teacher Teaching Subjects" onChange={teacherchangeHandler} /><br />
                            <input type="submit" className="btn btn-primary" value="submit" /><br /><br />
                        </form>
                    </center>
                </div>
                    :
                null}
                

            <br /><br /><br /><br /><br /><br /><br />
            </section>

        </div>
    )
}

export default Teachers
