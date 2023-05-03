package com.simplilearn.foodbox.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class ProductList {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pListId;
	private String dishName;
	private String cuisine;
	private double price;
	private String description;
	private int quantity;
	private double rating;
	private int reviews;
	private String imgURL;
	private int active=1;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private Date creationDateTime;
	
	@PrePersist
	private void onCreate() {
		creationDateTime = new Date();
	}

	public ProductList() {}

	public ProductList(String dishName, String cuisine, double price, String description, int quantity, double rating,
			int reviews, String imgURL, int active, Date creationDateTime) {
		this.dishName = dishName;
		this.cuisine = cuisine;
		this.price = price;
		this.description = description;
		this.quantity = quantity;
		this.rating = rating;
		this.reviews = reviews;
		this.imgURL = imgURL;
		this.active = active;
		this.creationDateTime = creationDateTime;
	}

	public int getpListId() {
		return pListId;
	}

	public void setpListId(int pListId) {
		this.pListId = pListId;
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

	public String getImgURL() {
		return imgURL;
	}

	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}

	public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}

	public Date getCreationDateTime() {
		return creationDateTime;
	}

	public void setCreationDateTime(Date creationDateTime) {
		this.creationDateTime = creationDateTime;
	}

	@Override
	public String toString() {
		return "ProductList [pListId=" + pListId + ", dishName=" + dishName + ", cuisine=" + cuisine + ", price="
				+ price + ", description=" + description + ", quantity=" + quantity + ", rating=" + rating
				+ ", reviews=" + reviews + ", imgURL=" + imgURL + ", active=" + active + ", creationDateTime="
				+ creationDateTime + "]";
	}
	
	
	
	
	
	
}
