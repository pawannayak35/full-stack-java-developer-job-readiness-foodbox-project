package com.simplilearn.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.foodbox.entity.ProductList;

@Repository
public interface ProductListRepository extends JpaRepository<ProductList, Integer> {

}
