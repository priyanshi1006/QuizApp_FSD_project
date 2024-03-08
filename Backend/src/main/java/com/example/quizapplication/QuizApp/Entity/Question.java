package com.example.quizapplication.QuizApp.Entity;





import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String question;

    private String subject;

    private String questionType;
    @ElementCollection
    private List<String> choices;
    @ElementCollection
    private List<String> correctAnswers;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="email_FK",referencedColumnName = "email")
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Question() {
        super();
    }
}