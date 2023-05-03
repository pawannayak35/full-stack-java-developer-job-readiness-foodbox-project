package com.simplilearn.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.foodbox.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer>{

}
