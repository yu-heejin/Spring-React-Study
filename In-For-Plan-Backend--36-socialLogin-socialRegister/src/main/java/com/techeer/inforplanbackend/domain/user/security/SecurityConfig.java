package com.techeer.inforplanbackend.domain.user.security;

import org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;

import static com.techeer.inforplanbackend.domain.user.security.SocialType.GOOGLE;

@Order(200)
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //회원 로그인인
   @Override
    public void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.authorizeRequests()
                .antMatchers("/", "/oauth2/**", "/api/v1/**", "/login/**", "/css/**", "/images/**", "/js/**", "/console/**", "/favicon.ico/**")
                .permitAll()
                .antMatchers("/google").hasAnyAuthority(GOOGLE.getRoleType())
                .anyRequest().authenticated()
                .and()
                .oauth2Login()
                .userInfoEndpoint().userService(new CustomOAuth2UserService())
                .and()
                .defaultSuccessUrl("/api/v1/success")
                .failureUrl("/api/v1/fail")
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new LoginUrlAuthenticationEntryPoint("/api/v1/google"));
    }

    //회원 등록을 위한 메소드
    private ClientRegistration getRegistration(OAuth2ClientProperties clientProperties, String client) {
       if("google".equals(client)) {
           OAuth2ClientProperties.Registration registration = clientProperties.getRegistration().get("google");

           return CommonOAuth2Provider.GOOGLE.getBuilder(client)
                   .clientId(registration.getClientId())
                   .clientSecret(registration.getClientSecret())
                   .scope("email", "profile")
                   .build();
       }

       return null;
    }

}
