import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useHistory ,useNavigate} from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';

const Detail=()=>{
    const [loading, setLoading] = useState(true);

    const Navigate=useNavigate();
    const [userData,setUserData]=useState({})
    console.log(userData)
    const {id}=useParams();
    console.log("id dhund rhe h")
    console.log(id);

   
const getSpecificUser=async()=>{
    try{
        console.log("jaya qt")
        console.log(id)
        console.log("backend pe api call krne ja rhe next line me")
        console.log(id)
      const response = await axios.get(`http://localhost:4000/api/v1/userDetails/detail/${id}`);
      console.log(response)
      console.log('backend se data aa gya so is line tak agye')
      console.log("data fetched from backend->"+response)
      setUserData(response.data.specificUser);
      setLoading(false)
      console.log(response.data.specificUser);
    }
    catch(error){
    //   alert('not able to get data');
    console.log(error)
      console.log(error.response.data.message)
    }
}

const handleDelete=async(id)=>{
    try{
    const response =await axios.delete(`http://localhost:4000/api/v1/userDetails/deleteUser/${id}`);
   Navigate('/dashboard')
   
    }
    catch(error){
      alert(error.response.data.deletedUser);
      console.log(error)
    }
}

useEffect(()=>{
    getSpecificUser();
},[])



    return (
        <div className="container mt-3">
           
           { loading?(
            <div className="container center-spinner">
  <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
</div>
            ):
            (

            <>
            <h1 style={{ fontWeight: 600 ,fontSize:30, marginBottom:15}}>Welcome {userData.name}</h1>

            <Card sx={{ maxWidth: 600 ,border:1,bgcolor:'grey',borderColor:'blue',boxShadow:5}}>
                <CardContent>
                    <div className="add_btn">
                       <NavLink to={`/edit/${id}`}><button className="btn btn-primary mx-2 "><CreateIcon /></button></NavLink> 
                        <button className="btn btn-danger"  onClick={()=>handleDelete(id)} ><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            {/* <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
                            <Avatar src='https://example.com/user-profile-image.jpg'>
                               <AccountCircleIcon />
                            </Avatar>
                            <h3 className="mt-3 text-lg text-neutral-50">Name: <span >{userData.name}</span></h3>
                            <h3 className="mt-3 text-lg text-neutral-50">Age: <span >{userData.age}</span></h3>
                            <p className="mt-3 text-lg text-neutral-50"><MailOutlineIcon />Email: <span>{userData.email}</span></p>
                            <p className="mt-3 text-lg text-neutral-50"><WorkIcon />Occuption: <span>{userData.work}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5 text-lg text-neutral-50"><PhoneAndroidIcon />mobile: <span>{userData.mobile}</span></p>
                            <p className="mt-3 text-lg text-neutral-50"><LocationOnIcon />location: <span>{userData.add}</span></p>
                            <p className="mt-3 text-lg text-neutral-50">Description: <span>{userData.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
            </>
            )}
           
        </div>
            
    )
}

export default Detail

