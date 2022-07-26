import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchData } from "../Action";
import React, { useEffect, useState } from "react";


const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  console.log(users);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
          <h1 style={{ color: "white" }}> Our Books</h1>
        </div>
      </span>
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
 
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
