package com.example.google;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class GoogleLoginApplication {

    public static void main(String[] args) {
        SpringApplication.run(GoogleLoginApplication.class, args);
    }

}
