package com.techeer.inforplanbackend.domain.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OAuth2Controller {
    @GetMapping("api/v1/login")
    public String login() {
        return "login";
    }

    @GetMapping("api/v1/login_success")
    public String loginSuccess() {
        return "hello";
    }

    @GetMapping("api/v1/login_fail")
    public String loginFail() {
        return "bye";
    }
}
