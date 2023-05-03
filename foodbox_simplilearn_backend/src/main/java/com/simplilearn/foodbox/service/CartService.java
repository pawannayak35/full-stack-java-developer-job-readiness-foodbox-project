package com.simplilearn.foodbox.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.foodbox.entity.Cart;
import com.simplilearn.foodbox.repository.CartRepository;

@Service
public class CartService {
	
	@Autowired
	private CartRepository cartRepo;
	
	// 1. insert/save the cart data to the database (POST Method)
	public Cart saveCart(Cart cart) {
		return cartRepo.save(cart);	
	}
	
	// 2. get the cart data from database (GET Method)
	
	public List<Cart> getCarts() {
		return cartRepo.findAll();
	}
	
	public Cart getCartById(int id) {
		return cartRepo.findById(id).orElse(null);
	}
	
	// 3. delete the cart data from database (DELETE Method)
	public String deleteCartById(int id) {
		cartRepo.deleteById(id);
		return "Data "+id+" Removed Successfully";
	}

}
