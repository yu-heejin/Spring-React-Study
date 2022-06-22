package com.techeer.inforplanbackend.domain.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
public class SocialController {
    @GetMapping("/api/v1/google")
    public String login() {
        return "login";
    }

    @GetMapping("/api/v1/success")
    public String success() {
        return "success";
    }

    @GetMapping("/api/v1/fail")
    public String fail() {
        return "fail";
    }
}