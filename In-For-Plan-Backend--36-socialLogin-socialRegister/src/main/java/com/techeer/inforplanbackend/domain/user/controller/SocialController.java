package com.techeer.inforplanbackend.domain.user.controller;

import com.techeer.inforplanbackend.domain.user.security.SessionUsers;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import javax.servlet.http.HttpSession;

@Controller
@RequiredArgsConstructor
public class SocialController {
    private final HttpSession httpSession;

    @GetMapping("/api/v1/social")
    public String index(Model model){
        //model.addAttribute("posts", postsService.findAllDesc());

        SessionUsers user = (SessionUsers) httpSession.getAttribute("user");

        if(user != null){
            model.addAttribute("userName", user.getName());
        }
        return "login";
    }
}