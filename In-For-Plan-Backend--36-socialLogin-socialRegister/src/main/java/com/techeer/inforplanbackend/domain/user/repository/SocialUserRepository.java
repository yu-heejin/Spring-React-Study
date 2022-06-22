package com.techeer.inforplanbackend.domain.user.repository;

import com.techeer.inforplanbackend.domain.user.domain.entity.SocialUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SocialUserRepository extends JpaRepository<SocialUsers, Long> {
    Optional<SocialUsers> findByEmail(String email);
}
