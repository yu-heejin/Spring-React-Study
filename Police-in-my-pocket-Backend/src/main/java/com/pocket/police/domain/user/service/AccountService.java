package com.pocket.police.domain.user.service;

import com.pocket.police.domain.user.dto.AccountRequestDto;
import com.pocket.police.domain.user.dto.AccountResponseDto;
import com.pocket.police.domain.user.entity.Account;
import com.pocket.police.domain.user.repository.AccountRepository;
import com.pocket.police.global.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor // 꼭 필요한 요소(final) 자동 생성
@Service // 이 클래스는 서비스임을 알려줌
public class AccountService {
    private final AccountRepository accountRepository;

    @Transactional
    public String save(final AccountRequestDto params) {
        Account entity = accountRepository.save(params.toEntity());
        return entity.getUserId();
    }

    public List<AccountResponseDto> findAll() {

        Sort sort = Sort.by(Sort.Direction.DESC, "id", "createdDate");
        List<Account> list = accountRepository.findAll(sort);
        return list.stream().map(AccountResponseDto::new).collect(Collectors.toList());
    }

    @Transactional
    public String update(final String id, final AccountRequestDto params) {

        Account entity = accountRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 아이디가 존재하지 않습니다."));
        entity.update(params.getUserId(), params.getPassword(), params.getName(), params.getBirth(), params.getAddress(), params.getPhoneNumber(),
                params.getUserSirenCode(), params.getGender());
        return id;
    }

}
