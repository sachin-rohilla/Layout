import React from 'react'
import axios from 'axios'
import Button from "@mui/material/Button";


const Axios = () => {
    

  const getHandle=()=>{
    axios.get("http://jsonplaceholder.typicode.com/todos")
    .then(res=>console.log(res.data))
    .catch(err=>console.error(err))
  }
  const postHandle=()=>{
    axios
      .post("http://jsonplaceholder.typicode.com/todos", { title: "sagar" })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err)); 
  }
  const putHandle=()=>{
    axios
      .put("http://jsonplaceholder.typicode.com/todos/1", {
        title: "sachin",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err)); 
  }
  const patchHandle=()=>{
    axios
      .patch("http://jsonplaceholder.typicode.com/todos/1", {
        title: "sushant",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err)); 
  }
  const deleteHandle = () => {
    axios
      .delete("http://jsonplaceholder.typicode.com/todos/1")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }
  
  return (
    <>
      <Button color="primary" onClick={getHandle}>
        get
      </Button>
      <Button color="secondary" onClick={postHandle}>
        post
      </Button>
      <Button color="primary" onClick={putHandle}>
        put
      </Button>
      <Button color="secondary" onClick={patchHandle}>
        patch
      </Button>
      <Button color="primary" onClick={deleteHandle}>
        delete
      </Button>
     
    </>
  );
}

export default Axios