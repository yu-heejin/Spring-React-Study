package com.techeer.inforplanbackend.domain.user.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Role {    //각 사용자의 권한을 관리할 클래스 생성

    USER("ROLE_USER", "사용자"),
    ADMIN("ROLE_ADMIN", "관리자"),
    GUEST("ROLE_GUEST",  "손님");

    private String key;
    private String value;

}
