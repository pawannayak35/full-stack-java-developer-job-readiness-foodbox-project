package com.simplilearn.foodbox.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.foodbox.entity.ProductList;
import com.simplilearn.foodbox.repository.ProductListRepository;

@Service
public class ProductListService {
	
	@Autowired
	private ProductListRepository productListRepository;
	
	// 1. save the data/ProductList into the database (Post Method)
	public ProductList saveProductList(ProductList productList) {
		return productListRepository.save(productList);
	}
	
	// 2. fetch the data from the database (Get Method)
	public List<ProductList> getProductLists() {
		return productListRepository.findAll();
	} 
	
	
	public ProductList getProductListById(int id) {
		return productListRepository.findById(id).orElse(null);
	}
	
	// 3. delete the data from the database(Delete Method)
	
	public String deleteProductListById(int id) {
		productListRepository.deleteById(id);
		return "Data "+id+" Deleted Successfully";
	}
	
	// 4. Update the data into the database (Put Method)
	public ProductList updateProductList(ProductList productList, int id) {
		
		ProductList existingProductList = productListRepository.findById(id).orElse(null);
		
		existingProductList.setDishName(productList.getDishName());
		existingProductList.setCuisine(productList.getCuisine());
		existingProductList.setPrice(productList.getPrice());
		existingProductList.setDescription(productList.getDescription());
		existingProductList.setQuantity(productList.getQuantity());
		existingProductList.setRating(productList.getRating());
		existingProductList.setReviews(productList.getReviews());
		existingProductList.setImgURL(productList.getImgURL());
		
		
		return productListRepository.save(existingProductList);
		
	}

}
