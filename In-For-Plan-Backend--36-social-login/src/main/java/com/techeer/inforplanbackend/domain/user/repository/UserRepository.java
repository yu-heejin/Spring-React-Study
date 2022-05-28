package com.techeer.inforplanbackend.domain.user.repository;

import com.techeer.inforplanbackend.domain.user.domain.entity.Users;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    Optional<User> findByEmail(String email);
    /*
        Optional<User> findByEmail(String email);
        소셜 로그인으로 반환되는 값 중 email을 통해 이미 생성된 사용자인지
        처음 가입하는 사용자인지 판단하기 위한 메소드
     */
}
