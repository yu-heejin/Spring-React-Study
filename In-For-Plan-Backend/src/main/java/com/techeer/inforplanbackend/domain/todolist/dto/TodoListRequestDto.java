package com.techeer.inforplanbackend.domain.todolist.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class TodoListRequestDto {
    private Long userId;
    private boolean isCheck;
    private String todoTitle;
}
