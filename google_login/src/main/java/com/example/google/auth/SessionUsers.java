package com.example.google.auth;

import com.example.google.entity.SocialUsers;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUsers implements Serializable {

    private String name;
    private String email;
    private String picture;

    public SessionUsers(SocialUsers users){
        this.name = users.getName();
        this.email = users.getEmail();
        this.picture = users.getUrl();
    }
}