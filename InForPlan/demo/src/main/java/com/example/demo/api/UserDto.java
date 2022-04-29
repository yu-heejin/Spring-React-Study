package com.example.demo.api;

public class UserDto {
    private String id;
    private String pw;
    
    public UserDto(String id, String pw) {
        this.id = id;
        this.pw = pw;
    }

    public String toString() {
        return "id : " + id + "\npw : " + pw;
    }
}
