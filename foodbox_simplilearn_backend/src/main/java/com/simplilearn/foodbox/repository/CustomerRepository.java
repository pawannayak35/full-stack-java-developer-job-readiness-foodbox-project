package com.simplilearn.foodbox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.simplilearn.foodbox.entity.Customer;
import com.simplilearn.foodbox.entity.OrderResponse;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query("SELECT new com.simplilearn.foodbox.entity.OrderResponse(c.cusId, c.name, c.email, c.mobile, c.address, p.dishName, p.cuisine, p.price, p.description, p.quantity, p.rating, p.reviews, p.orderDateTime) FROM Customer c JOIN c.products p")
	public List<OrderResponse> joinCustomerProductTable();

}
