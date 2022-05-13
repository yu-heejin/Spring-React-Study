package com.techeer.inforplanbackend.domain.project.dto.request;

import com.techeer.inforplanbackend.domain.project.domain.entity.List;
import com.techeer.inforplanbackend.domain.project.domain.entity.Project;
import lombok.AllArgsConstructor;
import lombok.Builder;

import lombok.Getter;
import java.sql.Date;


@Getter   //dto에는 setter 사용하면 안됨
@Builder
@AllArgsConstructor
public class TaskRequestDto {
    public List list_id;

    public Project project_id;

    public String description;

    public java.sql.Date start_date;

    public java.sql.Date end_date;

    public String file_url;

    public String task_title;
}
