package com.pocket.police.domain.token.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LoginTokenResponseDto {
    private String accessToken;
    private String refreshToken;
}
