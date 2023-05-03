package com.simplilearn.foodbox.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartId;
	private String dishName;
	private String cuisine;
	private double price;
	private String description;
	private double rating;
	private int reviews;
	private String imgURL;
	private int quantity;
	
	
	public Cart() {}


	public Cart(String dishName, String cuisine, double price, String description, double rating, int reviews,
			String imgURL, int quantity) {
		this.dishName = dishName;
		this.cuisine = cuisine;
		this.price = price;
		this.description = description;
		this.rating = rating;
		this.reviews = reviews;
		this.imgURL = imgURL;
		this.quantity = quantity;
	}


	public int getCartId() {
		return cartId;
	}


	public void setCartId(int cartId) {
		this.cartId = cartId;
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


	public String getImgURL() {
		return imgURL;
	}


	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", dishName=" + dishName + ", cuisine=" + cuisine + ", price=" + price
				+ ", description=" + description + ", rating=" + rating + ", reviews=" + reviews + ", imgURL=" + imgURL
				+ ", quantity=" + quantity + "]";
	}
	
	
	
	
	
	

}
