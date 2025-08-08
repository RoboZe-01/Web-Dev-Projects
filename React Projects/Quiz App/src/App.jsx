import { useState } from "react"
import QuestionCard from "./components/QuestionCard"
import { questions } from "./data/questions"

function App() {
  const [currentQuestion , setCurrentQuestion]=useState(0);
  const [selectedAnswer , setSelectedAnswer]= useState(null);
  const[score , setScore]= useState(0);
  const[isFinished,setFinished]=useState(false);
  const[showFeedback , setShowFeedback] = useState(false);

  const handelAnswerr = (option) =>{
    if (showFeedback) return;
    setSelectedAnswer(option);
    setShowFeedback(true);
    if (option === questions[currentQuestion].answer){
      setScore (score+1);
    }
  }



  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col p-4" >
     
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-500 mb-2">Quiz App 

        </h1>
       <p className="text-gray-400">Test your knowledge </p>
      
      </div>
       <QuestionCard data ={questions[currentQuestion]}/>
    </div>
  )
}

export default App
