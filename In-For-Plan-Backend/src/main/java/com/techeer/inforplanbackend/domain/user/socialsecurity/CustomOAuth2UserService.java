package com.techeer.inforplanbackend.domain.user.socialsecurity;

import ch.qos.logback.core.pattern.Converter;
import com.nimbusds.jose.crypto.impl.MACProvider;
import com.nimbusds.oauth2.sdk.OAuth2Error;
import io.jsonwebtoken.lang.Assert;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.RequestEntity;
import org.springframework.security.oauth2.client.http.OAuth2ErrorResponseErrorHandler;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequestEntityConverter;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

public class CustomOAuth2UserService extends DefaultOAuth2User {
    private static final String MISSING_USER_INFO_URL_ERROR_CODE = "missing_user_info_uri";
    private static final String MISSING_USER_NAME_ATTRIBUTE_ERROR_CODE = "missing_user_name_attribute";
    private static final String INVALID_USER_INFO_RESPONSE_ERROR_CODE = "invalid_user_info_response";
    private static final ParameterizedTypeReference<Map<String, Object>> PARAMETERIZED_TYPE_REFERENCE = new ParameterizedTypeReference<Map<String, Object>>() {};
    private Converter<OAuth2UserRequest, RequestEntity<?> requestRequestEntityConverter = new OAuth2UserRequestEntityConverter();

    private RestOperations restOperations;

    public CustomOAuth2UserService() {
        super();
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setErrorHandler(new OAuth2ErrorResponseErrorHandler());
        this.restOperations = restTemplate;
    }

    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        Assert.notNull(userRequest, "userResuest cannot be null");
        if(!StringUtils.hasText(userRequest.getClientRegistration().getProviderDetails().getUserInfoEndpoint()) {
            OAuth2Error oAuth2Error = new OAuth2Error(
                    MISSING_USER_INFO_URL_ERROR_CODE,
                    "Missing required UserInfo Uri in UserInfoEndpoint for Client Registration: " +
                            userRequest.getClientRegistration().getRegistrationId(),
                    null
            );
            throw new OAuth2AuthenticationException(oAuth2Error, oAuth2Error.toString());
        }

        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();

        if(!StringUtils.hasText(userNameAttributeName)) {
            OAuth2Error oAuth2Error = new OAuth2Error(
                    MISSING_USER_NAME_ATTRIBUTE_ERROR_CODE,

            )
        }
    }
}
