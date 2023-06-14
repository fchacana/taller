package com.nttlab.apitienda.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nttlab.apitienda.app.models.Product;

public interface ProductRespository extends JpaRepository<Product, Long> {

}
