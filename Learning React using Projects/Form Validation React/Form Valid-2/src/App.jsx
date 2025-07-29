import { useForm } from "react-hook-form"

import './App.css'

function App() {
  
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm ();
  return (
    <>
    <h1>Hello ji </h1>
    <form action="">
      <div>
        <label htmlFor="">First Name </label>
      </div>
    </form>
    </>
  );
}

export default App
