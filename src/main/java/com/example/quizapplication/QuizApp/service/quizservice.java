package com.example.quizapplication.QuizApp.service;

import com.example.quizapplication.QuizApp.Entity.Question;
import com.example.quizapplication.QuizApp.Entity.User;

import java.util.List;
import java.util.Optional;

public interface quizservice {
    public List<User> getUser();
    public User verifyUser(User s);
    public User createUser(User s);
    public User updateUser(User s);
    public void deleteUser(String email);
    public Question createQuestion(Question question);
    public List<Question> getAllQuestions();
    public Question updateQuestion(Question question);
    public void deleteQuestion(Long id);
    Optional<Question> getQuestionById(Long id);
    List<String> getAllSubjects();
    List<Question> getQuestionsForUser(Integer numOfQuestions, String subject);


}
