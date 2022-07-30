package com.techeer.inforplanbackend.domain.todolist.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor
public class TodoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long todoListId;

    private Long userId;

    private boolean isCheck;

    private String todoTitle;

    @Builder
    public TodoList(Long userId, boolean isCheck, String todoTitle) {
        this.userId = userId;
        this.isCheck = isCheck;
        this.todoTitle = todoTitle;
    }

    public void update(boolean isCheck, String todoTitle) {
        this.todoTitle = todoTitle;
        this.isCheck = isCheck;
    }
}
