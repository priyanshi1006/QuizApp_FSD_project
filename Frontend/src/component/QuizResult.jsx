import React from "react"
import { useLocation,useNavigate} from "react-router-dom"
import Navbar from "./Header"
import '/src/component/quizresult.css';

 const QuizResult = () => {
		const location = useLocation()
        const navigate=useNavigate()
        const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)

        
    const handleOKClick = () => {
        // Redirect to the home page
        navigate("/home");
    };

		

		return (
            <>
            <Navbar/>
            <div className="quizresult-container">
            
			<section className="container">
				<h3>Your Quiz Result Summary</h3>
				<hr />
				<h5 className="text-info">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<p>Your total score is {percentage}%.</p>
                <br>
                </br>
                <button className="btn btn-primary btn-lg" onClick={handleOKClick}>OK</button>
			</section>
            </div>

            </>
		)
 }

 export default QuizResult
