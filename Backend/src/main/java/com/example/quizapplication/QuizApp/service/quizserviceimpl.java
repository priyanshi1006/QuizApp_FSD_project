package com.example.quizapplication.QuizApp.service;

import com.example.quizapplication.QuizApp.Entity.Question;
import com.example.quizapplication.QuizApp.Entity.User;
import com.example.quizapplication.QuizApp.dao.questiondao;
import com.example.quizapplication.QuizApp.dao.userdao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class quizserviceimpl implements quizservice{
    @Autowired
    questiondao questiondao;
    @Autowired
    userdao  userdao;

    public quizserviceimpl() {
        super();
    }

    @Override
    public List<User> getUser() {
            return  userdao.findAll();
    }

    @Override
    public User verifyUser(User s){
        String email = s.getEmail();
        User s1 = userdao.findByEmail(email);

        if (s1!= null && s1.getPassword().equals(s.getPassword())) {
            return s1;

        } else
            return null;
    }

    @Override
    public User createUser(User s) {
         userdao.save(s);
         return  s;
    }

    @Override
    public User updateUser(User s) {
         userdao.save(s);
         return s;
    }

    @Override
    public void deleteUser(String email) {
        User entity=userdao.getOne(email);
        userdao.delete(entity);

    }

    @Override
    public Question createQuestion(Question question) {
        questiondao.save(question);
        return question;
    }

    @Override
    public List<Question> getAllQuestions() {
        return questiondao.findAll();
    }

    @Override
    public Question updateQuestion(Question question) {
        questiondao.save(question);
        return question;
    }

    @Override
    public void deleteQuestion(Long id) {
        Question question1=questiondao.getOne(id);
        questiondao.delete(question1);

    }
    @Override
    public Optional<Question> getQuestionById(Long id) {
        return questiondao.findById(id);
    }

   @Override
        public List<String> getAllSubjects() {
            return questiondao.findDistinctSubject();
        }

    @Override
    public List<Question> getQuestionsForUser(Integer numOfQuestions, String subject) {
        Pageable pageable = PageRequest.of(0, numOfQuestions);
        return questiondao.findBySubject(subject, pageable).getContent();
    }


}
