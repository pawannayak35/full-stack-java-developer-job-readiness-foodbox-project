package com.simplilearn.foodbox.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.foodbox.entity.CustomerCredential;
import com.simplilearn.foodbox.repository.CustomerCredentialRepository;

@Service
public class CustomerCredentialService {
	
	@Autowired
	private CustomerCredentialRepository customerCredentialRepository;
	
	// Post Method
	public CustomerCredential saveCustomerCredential(CustomerCredential customerCredential) {
		return customerCredentialRepository.save(customerCredential);
	}
	
	// Get Method
	public List<CustomerCredential> getCustomerCredentials(){
		return customerCredentialRepository.findAll();
	}
	
	public CustomerCredential getCustomerCredentialById(int id) {
		return customerCredentialRepository.findById(id).orElse(null);
	}
	
	// Put Method
	public CustomerCredential updateCustomerCredential(CustomerCredential customerCredential, int id) {
		
		CustomerCredential existingCustomerCredential = customerCredentialRepository.findById(id).orElse(null);
		
		existingCustomerCredential.setUsername(customerCredential.getUsername());
		existingCustomerCredential.setPassword(customerCredential.getPassword());
		
		return customerCredentialRepository.save(existingCustomerCredential);
	}
	
	

}
