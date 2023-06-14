package com.nttlab.apitienda.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nttlab.apitienda.app.models.Sales;



public interface SalesRepository extends JpaRepository<Sales, Long> {

	
} 