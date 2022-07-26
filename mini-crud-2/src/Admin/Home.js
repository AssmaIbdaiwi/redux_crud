import { useSelector,useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../Action';
import React, { useEffect, useState } from 'react'
import { deleteUser ,updateUser} from '../Action';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';




const Home = () => {

 const dispatch=useDispatch();
 const users=useSelector((state)=>state)
 console.log(users)
   useEffect(()=>{
     dispatch(fetchData());
   },[])


  return (
    <div style={{ width: "50%" }}>
      <span
        style={{
          color: "white",
          fontSize: "25px",
          marginTop: "10px",
          marginLeft: "550px",
        }}
      >
        {" "}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ color: "white" }}> BOOKS LIST</h1>
        </div>
      </span>
      <div style={{ display: "flex", width: "97%", marginLeft: "15%" ,  marginTop: "5%",}}>
        <Link
          to={"/add"}
          className="btn btn-primary"
          style={{ width: "100px" }}
        >
          {" "}
          Add new{" "}
        </Link>
      </div>
      <table
        class="table"
        style={{
          color: "white",
          marginLeft: "15%",
          marginTop: "5%",
          fontSize: "25px",
        }}
      >
        <thead>
          <tr style={{ color: "white" }}>
            <th scope="col">Book Title</th>
            <th scope="col">Author Name</th>
            <th scope="col">Publish Year</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((el) => {
              return (
                <tr>
                  <td>{el.title}</td>
                  <td>{el.author}</td>
                  <td>{el.year}</td>
                  <td>
                    <Link
                      to={"/edit/" + el.id}
                      className="btn btn-success"
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(deleteUser(el.id));
                      }}
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Home
