package com.simplilearn.foodbox.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.foodbox.entity.Customer;
import com.simplilearn.foodbox.entity.OrderResponse;
import com.simplilearn.foodbox.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	// 1. save the data/customer to the database (Post Method)
	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}
	
	// 2. fetch the data/customer from the database (Get Method)
	public List<Customer> getCustomers() {
		return customerRepository.findAll();
	}
	
	public Customer getCustomerById(int id) {
		return customerRepository.findById(id).orElse(null);
	}
	
	// 3. Delete the data/customer from database (Delete Method)
	public String deleteCustomerById(int id) {
		customerRepository.deleteById(id);
		return "Customer Removed Successfully. Which is ID "+id;
	}
	
	// 4. Join the Customer and Product table
	public List<OrderResponse> getCustomerProductJoinInfos() {
		return customerRepository.joinCustomerProductTable();
	}

}
