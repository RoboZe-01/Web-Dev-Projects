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
        <input className={errors.firstName ?'input-error' : ""}
        {...register('firstName' , 
          {required:true ,
           minLength:{value:3 , message:'Min len atleast 2'} , /** Here we learned that we can assign min and max length and validate accordingly */
           maxLength:{value:12, message:'Keep your name under 12 characters'}})} />

           {errors.firstName && <p className='error-msg'>{errors.firstName.message} </p>}
      
      
      </div>
      <br />
     
     
      {/* Middle Name div  */}
      <div>
        <label >Middle Name : </label>
        <input {...register('middleName', {required:true})} />
      </div>
       <br />
       
       {/* Last name div  */}
      
      <div>
        
        <label>Last Name : </label>
        <input {...register('lastName' , {required:true})} />
      </div>
      
      <br />
      <input type="submit" />
    </form>
    </>
  );
}

export default App
