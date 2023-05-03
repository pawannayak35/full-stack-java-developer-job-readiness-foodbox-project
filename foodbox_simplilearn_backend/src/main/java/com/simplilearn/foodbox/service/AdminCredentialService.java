package com.simplilearn.foodbox.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.foodbox.entity.AdminCredential;
import com.simplilearn.foodbox.repository.AdminCredentialRepository;

@Service
public class AdminCredentialService {
	
	@Autowired
	private AdminCredentialRepository adminCredentialRepository;
	
	// Post Method
	public AdminCredential saveAdminCredential(AdminCredential adminCredential) {
		return adminCredentialRepository.save(adminCredential);
	}
	
	// Get Method
	public List<AdminCredential> getAdminCredentials() {
		return adminCredentialRepository.findAll();
	}
	
	public AdminCredential getAdminCredentialById(int id) {
		return adminCredentialRepository.findById(id).orElse(null);
	}
	
	// Put Method
	public AdminCredential updateAdminCredential(AdminCredential adminCredential, int id) {
		
		AdminCredential existingAdminCredential = adminCredentialRepository.findById(id).orElse(null);
		
		existingAdminCredential.setUsername(adminCredential.getUsername());
		existingAdminCredential.setPassword(adminCredential.getPassword());
		
		return adminCredentialRepository.save(existingAdminCredential);
		
	}
	
	

}
