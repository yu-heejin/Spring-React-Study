package com.example.demo.api;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000") //해당 origin 승인하기
@RequestMapping(value = "/api")
public class ApiController {
    
    //@GetMapping(value = "/hello")
    //이런 형식으로 작성하면 주소는 /api/hello가 됨
    @GetMapping(value = {"", "/"}) 
    //이렇게 작성해야 주소는 /api
    public HashMap<String, Object> getHello() {
        HashMap<String, Object> result = new HashMap<String, Object>();
        result.put("message", "Hi Hi Roo");

        return result;
    }
}
