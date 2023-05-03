package com.simplilearn.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.foodbox.entity.AdminCredential;

@Repository
public interface AdminCredentialRepository extends JpaRepository<AdminCredential, Integer>{

}
