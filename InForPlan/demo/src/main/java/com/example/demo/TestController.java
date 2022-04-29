package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/vscode")
public class TestController {
    
    @GetMapping(value = {"", "/"})
    public String enter() {
        System.out.println("hello");
        return "Hello VS Code";
    }
}
