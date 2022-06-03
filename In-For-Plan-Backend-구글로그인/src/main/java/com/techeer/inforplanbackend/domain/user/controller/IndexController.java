package com.techeer.inforplanbackend.domain.user.controller;

import com.techeer.inforplanbackend.domain.user.config.auth.SessionUsers;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequiredArgsConstructor
public class IndexController {
    private final HttpSession httpSession;

    @GetMapping("/login")
    public String index(Model model){
        //model.addAttribute("posts", postsService.findAllDesc());

        SessionUsers user = (SessionUsers) httpSession.getAttribute("user");

        if(user != null){
            model.addAttribute("userName", user.getName());
        }
        return "index";
    }
}