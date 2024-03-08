package com.example.quizapplication.QuizApp.dao;

import com.example.quizapplication.QuizApp.Entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface questiondao extends JpaRepository<Question,Long> {
    @Query("SELECT DISTINCT q.subject FROM Question q WHERE q.subject IS NOT NULL")
    List<String> findDistinctSubject();
    Page<Question> findBySubject(String subject, Pageable pageable);


}
