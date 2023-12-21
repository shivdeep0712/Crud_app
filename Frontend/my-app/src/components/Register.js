import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
// import { adddata } from './context/ContextProvider';

const Register = () => {

    // const { udata, setUdata } = useContext(adddata);

    // const history = useHistory();
     const Navigate=useNavigate();
    const [formData, setFormData] = useState({name: "",email: "",age: "",mobile: "",work: "",add: "",desc: ""})


    const changeHandler = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const submitHandler = async (e) => {
        e.preventDefault();

       
      try{
        console.log(formData)
        const { name, email, age,mobile,work, add, desc } = formData;
      const response = await axios.post('http://localhost:4000/api/v1/userDetails/register',formData);
     
      console.log("data added successfully");
      Navigate('/dashboard')
      }
      catch(error){
        alert("data not added");
        console.log(error);
        console.log("data not added");
      }
       
    }

    return (
        <div className=" bg-black">
        <div className="container bg-slate-500">
           
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label font-semibold">Name</label>
                        <input type="text" value={formData.name} onChange={changeHandler} name="name" className="form-control border-2 border-blue-600 font-bold bg-slate-100" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label font-semibold">email</label>
                        <input type="email" value={formData.email} onChange={changeHandler} name="email" className=" bg-slate-100 form-control border-2 border-blue-600 font-bold" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label font-semibold">age</label>
                        <input type="text" value={formData.age} onChange={changeHandler} name="age" className="bg-slate-100 form-control border-2 border-blue-600 font-bold" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label font-semibold">Mobile</label>
                        <input type="number" value={formData.mobile} onChange={changeHandler} name="mobile" className="bg-slate-100 form-control border-2 border-blue-600" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label font-semibold">Work</label>
                        <input type="text" value={formData.work} onChange={changeHandler} name="work" className="bg-slate-100 font-bold form-control border-2 border-blue-600" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label font-semibold">Address</label>
                        <input type="text" value={formData.add} onChange={changeHandler} name="add" className="bg-slate-100 font-bold form-control border-2  border-blue-600" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label font-semibold">Description</label>
                        <textarea name="desc" value={formData.desc} onChange={changeHandler} className="bg-slate-100 font-bold form-control border-2 border-blue-600" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={submitHandler} className="btn btn-primary bg-slate-800 text-lg font-bold text-amber-50">Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Register;