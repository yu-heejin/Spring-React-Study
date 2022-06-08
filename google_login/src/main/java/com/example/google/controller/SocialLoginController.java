package com.example.google.controller;

import com.example.google.auth.SessionUsers;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
public class SocialLoginController {
    private final HttpSession httpSession;

    @GetMapping(path = "/login")
    public ModelAndView index(Model model){
        //model.addAttribute("posts", postsService.findAllDesc());
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index.html");

        SessionUsers user = (SessionUsers) httpSession.getAttribute("user");

        if(user != null){
            model.addAttribute("userName", user.getName());
        }
        return modelAndView;
    }
}