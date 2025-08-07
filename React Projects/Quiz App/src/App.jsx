import { useState } from "react"
import QuestionCard from "./components/QuestionCard"
import { questions } from "./data/questions"

function App() {
  const [currentQuestion , setCurrentQuestion]=useState(0)



  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col" >
     
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-500 mb-2">Quiz App 

        </h1>
       <p className="text-gray-400">Test your knowledge </p>
      
      </div>
       <QuestionCard data ={questions[currentQuestion]}/>
    </div>
  )
}

export default App
