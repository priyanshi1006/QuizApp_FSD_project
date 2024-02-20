package com.example.quizapplication.QuizApp.Controller;

import com.example.quizapplication.QuizApp.Entity.Question;
import com.example.quizapplication.QuizApp.Entity.User;
import com.example.quizapplication.QuizApp.service.quizservice;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class mycontroller {
      @Autowired
    quizservice quizservice;


    @GetMapping("/signup")
    public List<User> getUser() {
        return this.quizservice.getUser();
    }

    @PostMapping("/signup")
    public User createUser(@RequestBody User s){

        return this.quizservice.createUser(s);
    }

    @PutMapping("/signup")
    public User updateUser(@RequestBody User s)
    {
        return this.quizservice.updateUser(s);
    }
    @PutMapping("/update-question")
    public  Question updateQuestion(@RequestBody Question question){
        return this.quizservice.updateQuestion(question);
    }
    @PostMapping("/verifyUser")
    public User verifyUser(@RequestBody User s){

        return this.quizservice.verifyUser(s);
    }
    @DeleteMapping("/signup/{email}")
    public ResponseEntity<HttpStatus> deleteuser(@PathVariable String email) {
        try {
            this.quizservice.deleteUser(email);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/delete-question/{id}")
    public ResponseEntity<HttpStatus>  deleteQuestion(@PathVariable Long id){
        try {
            this.quizservice.deleteQuestion(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/create-new-question")
    public Question createQuestion(@Valid @RequestBody Question question){
        return this.quizservice.createQuestion(question);
    }

    @GetMapping("/all-questions")
    public List< Question> getAllQuestions(){
        return this.quizservice.getAllQuestions();
    }

    @GetMapping("/question/{id}")
    public Optional<Question> getQuestionByID(@PathVariable Long id){
        return this.quizservice.getQuestionById(id);
    }

    @GetMapping("/subjects")
    public ResponseEntity<List<String>> getAllSubjects(){
        List<String> subjects = quizservice.getAllSubjects();
        return ResponseEntity.ok(subjects);
    }

    @GetMapping("/quiz/fetch-questions-for-user/{numOfQuestions}/{subject}")
    public ResponseEntity<List<Question>> getQuestionsForUser(
            @PathVariable Integer numOfQuestions, @PathVariable String subject){
        List<Question> allQuestions = quizservice.getQuestionsForUser(numOfQuestions, subject);

        List<Question> mutableQuestions = new ArrayList<>(allQuestions);
        Collections.shuffle(mutableQuestions);

        int availableQuestions = Math.min(numOfQuestions, mutableQuestions.size());
        List<Question> randomQuestions = mutableQuestions.subList(0, availableQuestions);
        return ResponseEntity.ok(randomQuestions);
    }



}
