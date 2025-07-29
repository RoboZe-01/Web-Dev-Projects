import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  // Let's get our form hooks ready
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm();

  // This is where the magic happens when we submit
  const onSubmit = async (data) => {
    console.log("Yo! Form is submitting...");
    console.log("Here's the data:", data);
    
    // Fake API call - like we're really talking to a server!
    console.log("Wait wait... calling API...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Phew! API call done!");
  };

  return (
    <div className="App">
      <h1>My Awesome Form</h1>
      
      {/* Here's our form - the star of the show */}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* First Name - with all the validations! */}
        <div>
          <label>First Name</label>
          <input
            {...register("firstName", { 
              required: "Bro, you need a first name!",
              minLength: {
                value: 3,
                message: "Come on, at least 3 letters!"
              },
              maxLength: {
                value: 10,
                message: "Whoa! Maximum 10 letters please!"
              }
            })}
            className={errors.firstName ? "input-error" : ""}
          />
          {errors.firstName && (
            <p className="error-message">⚠️ {errors.firstName.message}</p>
          )}
        </div>

        {/* Middle Name - optional but we'll track it */}
        <div>
          <label>Middle Name </label>
          <input
            {...register("middleName")}
          />
          {/* No errors here - it's optional! */}
        </div>

        {/* Last Name - with fancy pattern matching */}
        <div>
          <label>Last Name</label>
          <input
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters please! No numbers or symbols!"
              }
            })}
            className={errors.lastName ? "input-error" : ""}
          />
          {errors.lastName && (
            <p className="error-message">❌ {errors.lastName.message}</p>
          )}
        </div>

        {/* The submit button - with loading state */}
        <button 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Submitting... (be patient!)"
          ) : (
            "Submit My Awesome Info!"
          )}
        </button>

        {/* Little debug area - because why not? */}
        {isSubmitting && (
          <p style={{ color: 'gray' }}>
            Hang tight! We're submitting your data...
          </p>
        )}
      </form>
    </div>
  );
}

export default App;