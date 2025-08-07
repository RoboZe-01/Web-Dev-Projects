 export const questions = [
  {
    question: "Which hook is used to manage side effects in functional components?",
    options: ["useState", "useContext", "useEffect", "useReducer"],
    answer: "useEffect",
  },
  {
    question: "What does lifting state up in React mean?",
    options: [
      "Passing state to a child component",
      "Moving state to a common ancestor component",
      "Using useState in nested components",
      "Using Redux for global state",
    ],
    answer: "Moving state to a common ancestor component",
  },
  {
    question: "What is the purpose of the `key` prop in React lists?",
    options: [
      "To style list items",
      "To optimize re-rendering performance",
      "To identify the data type of list items",
      "To encrypt component data",
    ],
    answer: "To optimize re-rendering performance",
  },
  {
    question: "How does React handle forms differently from plain HTML?",
    options: [
      "React requires use of Redux for forms",
      "React uses controlled components with state",
      "React only supports GET methods for forms",
      "React doesn't support form submission",
    ],
    answer: "React uses controlled components with state",
  },
  {
    question: "What will happen if you call `setState` inside `useEffect` without a dependency array?",
    options: [
      "The component will never re-render",
      "The component will re-render once and stop",
      "It will cause an infinite re-render loop",
      "React will ignore the setState call",
    ],
    answer: "It will cause an infinite re-render loop",
  }
];
