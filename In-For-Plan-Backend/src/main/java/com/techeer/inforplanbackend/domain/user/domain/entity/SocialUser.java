package com.techeer.inforplanbackend.domain.user.domain.entity;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class SocialUser {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "profile", nullable = true)
    private String url;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_role", nullable = false)
    private Role user_role;
}
