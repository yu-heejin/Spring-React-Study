package com.techeer.inforplanbackend.domain.todolist.dto;

import lombok.Builder;

@Builder
public class TodoListResponseDto {
    public boolean isCheck;
    public String todoTitle;
}
