import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:9192/api/quizzes"
})

export const createQuestion = async(quizQustion) =>{
  try {
    const response = await api.post("/create-new-question", quizQustion)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getAllQuestions = async() =>{
  try {
    const response = await api.get("http://localhost:9090/all-questions")
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchQuizForUser = async(number, subject) =>{
  try {
    const response = await api.get(
			`http://localhost:9090/quiz/fetch-questions-for-user/${number}/${subject}`
		)
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getSubjects = async() =>{
  try {
    const response = await api.get("http://localhost:9090/subjects")
    return response.data
  } catch (error) {
    console.error(error)

  }
}

export const updateQuestion = async(id, question) =>{
  try {
    const response = await api.put(`/question/${id}/update`, question)
    return response.data
  } catch (error) {
    console.error(error)

  }
}

export const getQuestionById = async(id) =>{
  try {
    const response = await api.get(`http://localhost:9090/question/${id}`)
		return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteQuestion = async(id) =>{
  try {
    const response = await api.delete(`/question/${id}/delete`)
		return response.data
  } catch (error) {
    console.error(error)
  }
}