import React, { useEffect, useState } from 'react'
import { button } from 'bootstrap'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../Action';
import {addUser} from '../Action';
import axios from 'axios';
import swal from 'sweetalert';

// import { Connect } from 'react-redux/es/components/connect';
const Add = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const dispatch=useDispatch();
    const users=useSelector((state)=>state);
    console.log(users)
    const handleCklick=(e)=>{
      e.preventDefault();

      const userInfo={
        name:name,
        email:email,
        address:address
      }
      dispatch(addUser(name,email,address));
      swal({
        title: "Good job!",
        text: "Adding book success!",
        icon: "success",
        button: "ok!",
      }).then(function() {
        window.location.href="/";
    });
  
    }

      

    return (
      <div style={{ display: "flex",  }}>
        <div style={{ width: "40%", marginLeft: "15%", marginTop:'5%' }}>
          <h1 style={{ color: "white", display: "flex", justifyContent: "center" }}> Add book</h1>
          <form>
            <div class="form-group pt-5">
              <label
                for="formGroupExampleInput mt-1"
                style={{ color: "white", fontSize: "25px" }}
              >
                {" "}
                Book title
              </label>
              <input
                type="text"
                class="form-control mt-3"
                id="formGroupExampleInput"
                placeholder="Enter book  name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="form-group pt-4">
              <label
                for="formGroupExampleInput2"
                style={{ color: "white", fontSize: "25px" }}
              >
                Book author
              </label>
              <input
                type="text"
                class="form-control mt-2"
                id="formGroupExampleInput2"
                placeholder="Enter book author"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group pt-4">
              <label
                for="formGroupExampleInput2"
                style={{ color: "white", fontSize: "25px" }}
              >
                Book year
              </label>
              <input
                type="text"
                class="form-control mt-2"
                id="formGroupExampleInput2 "
                placeholder="Enter year publish"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success mt-5"
              style={{ width: "100px" }}
              onClick={handleCklick}
            >
              Add{" "}
            </button>
          </form>
        </div>
      </div>
    );
}
export default  Add;

// export default Connect(null,{addUser})( Add);

