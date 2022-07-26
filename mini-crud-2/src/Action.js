import axios from "axios";
import swal from "sweetalert";


export const fetchData = () => {
    return async(dispatch,getstate)=>{

        const response = await axios.get(
          "https://62def331976ae7460be56dba.mockapi.io/books"
        );
        console.log(response.data)
        dispatch({
            type:"FETCH_DATA",
            payload:response.data
        })
    }
}



export const addUser=( title,author,year)=>{
    return(dispatch)=>{
        axios.post("https://62def331976ae7460be56dba.mockapi.io/books", {
            title,
            author,
            year,
          })
          .then((response) => {
            console.log(response.data);
            dispatch({
              type: "ADD_USER",
              payload: response.data,
            }).catch((error) => {
              console.log(error);
            });
          });
    }
}


export const updateUser = async(data,id) => {
    const response = await axios.put(
      `https://62def331976ae7460be56dba.mockapi.io/books/${id}`,
      data
    );
    // window.location.href = "http://localhost:3001";
    swal({
            title: "Good job!",
            text: "Book updated successfully!",
            icon: "success",
            button: "ok!",
          }).then(function() {
            window.location.href="/";
        });
    return (dispatch)=>{
        
           dispatch({
               type:'UPDATE_USER',
               payload:response.user
           })
  };
}

export const deleteUser = async(id) => {
    const response = await axios.delete(
      `https://62def331976ae7460be56dba.mockapi.io/books/${id}`
    );
    // window.location.href = "http://localhost:3001";
    swal({
        title: "Good job!",
        text: "Book deleted successfully!",
        icon: "success",
        button: "ok!",
      }).then(function() {
        window.location.href="/";
    });
    return (dispatch)=>{
        
           dispatch({
               type:'DELETE_USER',
               payload:id
           })
  };
}

export const CheckUser= (email,password ,islogged)=>{

    return (dispatch)=>{
if(email== "assma@gmail.com" && password=="123"){
    islogged =true;
    // window.alert('succesfuly login');
  window.location.href = "http://localhost:3000";
}else if (email !== "assma@gmail.com" && password !== "123") {
  islogged = false;
}
    dispatch({
        type:'CHECK_USER',
        payload:islogged
    })


}}



