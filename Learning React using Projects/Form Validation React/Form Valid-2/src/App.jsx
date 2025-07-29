import { useForm } from "react-hook-form"  


import './App.css'

function App() {
  
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm ();


  function onSubmit (data){
    console.log("submitting the form" , data);
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      
      {/* Div of first Name  */}
      <div>
        <label >First Name : </label>
        <input {...register('firstName')} />
      </div>
      <br />
      {/* Middle Name div  */}
      <div>
        <label >Middle Name : </label>
        <input {...register('middleName')} />
      </div>
       <br />
       
       {/* Last name div  */}
      
      <div>
        
        <label>Last Name : </label>
        <input {...register('lastName')} />
      </div>
      
      <br />
      <input type="submit" />
    </form>
    </>
  );
}

export default App
