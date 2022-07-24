package com.pocket.police.domain.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@NoArgsConstructor
@Table
@Entity
public class Token {
    @Id
    @Column(name = "token_key")
    private String key;

    @Column(name = "token_value")
    private String value;
}
