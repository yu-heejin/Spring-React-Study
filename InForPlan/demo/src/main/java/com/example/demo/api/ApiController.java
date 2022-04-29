package com.example.demo.api;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@CrossOrigin(origins = "http://localhost:3000") //해당 origin 승인하기
@RequestMapping(value = "/users", method={RequestMethod.GET, RequestMethod.POST})
public class ApiController {
    @PostMapping("/login")
    @ResponseBody
    public String loginInfo(UserDto user) {
        return user.toString();
    }
}
