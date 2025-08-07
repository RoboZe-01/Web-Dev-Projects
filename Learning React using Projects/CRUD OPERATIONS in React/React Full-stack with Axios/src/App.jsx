import { useEffect } from "react";
import { getPost } from "./api/PostApi"
import './App.css'
const App = ()=>{
  
  const getPostData = async ()=>{
   const res = await getPost();
    
   console.log(res.data);

  };

  useEffect( ()=> {
    getPostData();
  },[]);

  
  return  <h1>React Axios</h1>;

}

export default App