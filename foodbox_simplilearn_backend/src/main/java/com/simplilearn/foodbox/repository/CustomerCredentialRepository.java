package com.simplilearn.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.foodbox.entity.CustomerCredential;

@Repository
public interface CustomerCredentialRepository extends JpaRepository<CustomerCredential, Integer>{

}
