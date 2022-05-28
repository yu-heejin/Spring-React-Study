package com.techeer.inforplanbackend.config.auth.dto;

import com.techeer.inforplanbackend.domain.user.domain.entity.Users;

import java.io.Serializable;
import java.util.Locale;

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
