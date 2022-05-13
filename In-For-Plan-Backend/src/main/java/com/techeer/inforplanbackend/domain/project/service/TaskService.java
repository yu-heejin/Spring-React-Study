package com.techeer.inforplanbackend.domain.project.service;

import com.techeer.inforplanbackend.domain.project.domain.entity.Task;
import com.techeer.inforplanbackend.domain.project.dto.mapper.TaskMapper;
import com.techeer.inforplanbackend.domain.project.dto.request.TaskRequestDto;
import com.techeer.inforplanbackend.domain.project.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TaskService {
    private TaskRepository taskRepository;
    private final TaskMapper taskMapper;
,
    public Task save(TaskRequestDto taskRequestDto) {
        return taskMapper.toEntity(taskRequestDto);
    }

}
