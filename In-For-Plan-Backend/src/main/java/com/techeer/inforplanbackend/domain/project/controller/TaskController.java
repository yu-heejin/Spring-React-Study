package com.techeer.inforplanbackend.domain.project.controller;

import com.techeer.inforplanbackend.domain.project.domain.entity.Task;
import com.techeer.inforplanbackend.domain.project.dto.request.TaskRequestDto;
import com.techeer.inforplanbackend.domain.project.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/tasks")
public class TaskController {

    private TaskService taskService;

    @PostMapping("/test")
    public Task save(@RequestBody TaskRequestDto taskRequestDto) {
        return taskService.save(taskRequestDto);
    }

}
