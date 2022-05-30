package com.techeer.inforplanbackend.config.auth.dto;

import com.techeer.inforplanbackend.domain.user.entity.Users;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {
    private String name;
    private String email;
    private String url;

    public SessionUser(Users users) {
        this.name = users.getName();
        this.email = users.getEmail();
        this.url = users.getUrl();
    }
}
