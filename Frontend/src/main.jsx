import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginForm from './component/Login.jsx'
import SignupForm from './component/Signup.jsx'
import Home from './component/Home.jsx'
import Admin from './component/Admin.jsx'
import AddQuestion from './component/AddQuestion.jsx'
import GetAllQuiz from './component/GetAllQuiz.jsx'
import UpdateQuestion from './component/UpdateQuestion.jsx'
import Quiz from './component/Quiz.jsx'
import QuizStepper from './component/QuizStapper.jsx'



const router=createBrowserRouter(
  [
    {
      path : '/',
      element :(
        <LoginForm/>
      )
    },
    {
      path : '/signup',
      element :(
        <SignupForm/>
      )
    },
    {
      path:'/home',
      element:(
        <Home/>
      )
    },
    {
      path:'/admin',
      element:(
        <Admin/>
      )
    },
    {
      path : 'quiz-stepper',
      element : (<QuizStepper/>)
    },
    {
      path:'/create-quiz',
      element:(
        <AddQuestion/>
      )
    },
    {
      path:'/all-quizzes',
      element:(
        <GetAllQuiz/>
      )
    },
    {
      path:'/update-quiz/:id',
      element:(<UpdateQuestion/>)
    },
    {
      path:'/take-quiz',
      element:(
        <Quiz selectedSubject = "Java" selectedNumQuestions= "1"/>
      )
    }

  

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
