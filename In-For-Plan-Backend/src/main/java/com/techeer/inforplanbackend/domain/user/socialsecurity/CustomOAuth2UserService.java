package com.techeer.inforplanbackend.domain.user.socialsecurity;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;

public class CustomOAuth2UserService extends DefaultOAuth2UserService {
    private static final String MISSING_USER_INFO_URI_ERROR_CODE = "missing_user_info_uri";
    private static final String MISSING_USER_NAME_ATTRIBUTE_ERROR_CODE = "missing_user_name_attribute";
}
