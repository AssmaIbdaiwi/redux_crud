import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { updateUser } from '../Action';
import { useParams } from 'react-router-dom';
import { fetchData } from '../Action';
import swal from 'sweetalert';
const Update = () => {
  const {id}=useParams();
 
    const [selectedUser,setselectedUser]=useState({
      });

      const dispatch= useDispatch();
     
     let y={}
       const updateSelected=useSelector((state)=>state);
useEffect(()=>{
        dispatch(fetchData());
      },[dispatch])
 for(let i=0;i<updateSelected.length;i++){
 if(updateSelected[i].id==id){
    y['title']=updateSelected[i].title;
    y['author']=updateSelected[i].author;
    y['year']=updateSelected[i].year;
 }
 }
 
 useEffect(()=>{
        setselectedUser(y);
      },[updateSelected])
      
         console.log(selectedUser)
         
      const handleCklick=(e)=>{
        e.preventDefault();

     dispatch(updateUser(selectedUser,id));
      
     swal({
          title: "Good job!",
          text: "Adding user success!",
          icon: "success",
          button: "ok!",
        }).then(function() {
          window.location.href="/";
      });
      
      }
    
      const onChange=(e)=>{
        e.preventDefault();
        const value=e.target.value
        setselectedUser({...selectedUser,[e.target.name]:value})
       }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40%", marginLeft: "15%", marginTop: "5%" }}>
        <h1
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          {" "}
          Update book
        </h1>

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
              class="form-control mt-2"
              id="formGroupExampleInput"
              placeholder="Enter book title"
              name="title"
              value={selectedUser.title}
              onChange={onChange}
            />
          </div>
          <div class="form-group pt-5">
            <label
              for="formGroupExampleInput2"
              style={{ color: "white", fontSize: "25px" }}
            >
              Author name
            </label>
            <input
              type="text"
              class="form-control mt-2"
              id="formGroupExampleInput2"
              placeholder="Enter author name"
              name="author"
              value={selectedUser.author}
              onChange={onChange}
            />
          </div>
          <div class="form-group pt-5">
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
              placeholder="Enter publish year"
              name="year"
              value={selectedUser.year}
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success mt-5"
            onClick={handleCklick}
          >
            edit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update
