import React from 'react'

const QuestionCard = ( {data} ) => {
    const {question ,options, answer}= data;
  return (
    <div className='bg-gray-800 p-6 rounded-2xl shadow-1g w-full max-w-xl border border-gray-700'>
     questioncard {question}
    </div>
  )
}

export default QuestionCard
