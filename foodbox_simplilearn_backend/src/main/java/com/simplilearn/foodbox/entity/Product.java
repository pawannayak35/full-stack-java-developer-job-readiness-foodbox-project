package com.simplilearn.foodbox.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.PrePersist;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	private String dishName;
	private String cuisine;
	private double price;
	private String description;
	private int quantity;
	private double rating;
	private int reviews;
	
	@ManyToMany(mappedBy = "products", fetch = FetchType.LAZY)
	@JsonBackReference
	private List<Customer> customers;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private Date orderDateTime;
	
	@PrePersist
	private void onCreate() {
		orderDateTime = new Date();
	}

	public Product() {}

	public Product(String dishName, String cuisine, double price, String description, int quantity, double rating,
			int reviews, List<Customer> customers, Date orderDateTime) {
		this.dishName = dishName;
		this.cuisine = cuisine;
		this.price = price;
		this.description = description;
		this.quantity = quantity;
		this.rating = rating;
		this.reviews = reviews;
		this.customers = customers;
		this.orderDateTime = orderDateTime;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
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

	public List<Customer> getCustomers() {
		return customers;
	}

	public void setCustomers(List<Customer> customers) {
		this.customers = customers;
	}

	public Date getOrderDateTime() {
		return orderDateTime;
	}

	public void setOrderDateTime(Date orderDateTime) {
		this.orderDateTime = orderDateTime;
	}

	@Override
	public String toString() {
		return "Product [pid=" + pid + ", dishName=" + dishName + ", cuisine=" + cuisine + ", price=" + price
				+ ", description=" + description + ", quantity=" + quantity + ", rating=" + rating + ", reviews="
				+ reviews + ", customers=" + customers + ", orderDateTime=" + orderDateTime + "]";
	}
	
	
	
	
	
	

}
