import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../App.css';

const Dashboard = () => {
  const Navigate = useNavigate();
  const handleAddUser = () => {
    Navigate('/register');
  };

 

  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state

  const getAllData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/userDetails/getAllData');
      setAllData(response.data.allUsers);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      alert('Error while fetching');
      console.log('Error while fetching');
    }
  };

  const handleDelete=async(id)=>{
    try{
    const response =await axios.delete(`http://localhost:4000/api/v1/userDetails/deleteUser/${id}`);
   
    getAllData()
    }
    catch(error){
      alert(error.response.data.deletedUser);
      console.log(error)
    }
}


  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <button className="btn btn-primary" onClick={handleAddUser}>
            Add data
          </button>
        </div>

        {loading ? (
          // Display a spinner while loading
          // <div className="spinner-border flex justify-center text-center" role="status">
            // <span className="visually-hidden">Loading...</span>
          // </div>
<div className="container center-spinner">
  <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
</div>

        ) : (
          // Display table when data is loaded
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">email</th>
                <th scope="col">Job</th>
                <th scope="col">Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {allData.map((element, i) => {
                return (
                  <tr key={element._id}>
                    <th scope="row">{i + 1}</th>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.work}</td>
                    <td>{element.mobile}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`/detail/${element._id}`}>
                        <button className="btn btn-success">
                          <RemoveRedEyeIcon />
                        </button>
                      </NavLink>
                      <NavLink to={`/edit/${element._id}`}>
                      <button className="btn btn-primary">
                        <CreateIcon />
                      </button>
                      </NavLink>
                     
                      <button className="btn btn-danger"
                      onClick={()=>handleDelete(element._id)}
                      >
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
