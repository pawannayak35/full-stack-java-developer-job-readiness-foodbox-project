package com.simplilearn.foodbox.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(value = Include.NON_DEFAULT)
public class OrderResponse {
	
	private int cusId;
	private String name;
	private String email;
	private String mobile;
	private String address;
	private String dishName;
	private String cuisine;
	private double price;
	private String description;
	private int quantity;
	private double rating;
	private int reviews;
	private Date orderDateTime;
	
	
	public OrderResponse() {}


	public OrderResponse(int cusId, String name, String email, String mobile, String address, String dishName,
			String cuisine, double price, String description, int quantity, double rating, int reviews,
			Date orderDateTime) {
		this.cusId = cusId;
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.address = address;
		this.dishName = dishName;
		this.cuisine = cuisine;
		this.price = price;
		this.description = description;
		this.quantity = quantity;
		this.rating = rating;
		this.reviews = reviews;
		this.orderDateTime = orderDateTime;
	}


	public int getCusId() {
		return cusId;
	}


	public void setCusId(int cusId) {
		this.cusId = cusId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getDishName() {
		return dishName;
	}


	public void setDishName(String dishName) {
		this.dishName = dishName;
	}


	public String getCuisine() {
		return cuisine;
	}


	public void setCuisine(String cuisine) {
		this.cuisine = cuisine;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public double getRating() {
		return rating;
	}


	public void setRating(double rating) {
		this.rating = rating;
	}


	public int getReviews() {
		return reviews;
	}


	public void setReviews(int reviews) {
		this.reviews = reviews;
	}


	public Date getOrderDateTime() {
		return orderDateTime;
	}


	public void setOrderDateTime(Date orderDateTime) {
		this.orderDateTime = orderDateTime;
	}
	
	
	
	
	
	

}
