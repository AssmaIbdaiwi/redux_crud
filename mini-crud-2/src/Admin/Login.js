import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { CheckUser } from '../Action';
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [islogged, setislogged] = useState('');
    const dispatch=useDispatch();
    
    const users=useSelector((state)=>state);
    console.log(islogged)
    const handleClick=(e)=>{
      e.preventDefault();
      dispatch(CheckUser(email,password,islogged));
    }

  return (
    <div style={{ display: "flex" }}>
      <div
        class="container"
        style={{ width: "30%", marginLeft: "20%", marginTop: "10%" }}
      >
        <h1
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          {" "}
          Login
        </h1>
        <form>
          <div class="form-group">
            <label
              for="exampleInputEmail1"
              style={{ color: "white", fontSize: "25px" }}
            >
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label
              for="exampleInputPassword1"
              style={{ color: "white", fontSize: "25px" }}
            >
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary mt-5"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}