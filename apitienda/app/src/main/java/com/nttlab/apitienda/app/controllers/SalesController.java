package com.nttlab.apitienda.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nttlab.apitienda.app.repository.SalesRepository;
import com.nttlab.apitienda.app.exceptions.ResourceNotFoundException;
import com.nttlab.apitienda.app.models.Sales;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class SalesController {

    @Autowired
    private SalesRepository salesRepository;

    @GetMapping("/sales")
    public List<Sales> getAllSales() {
        return (List<Sales>) salesRepository.findAll();
    }

    @PostMapping("/sales")
    public ResponseEntity<Sales> createSale(@RequestBody Sales sale) {
        Sales savedSale = salesRepository.save(sale);
        return new ResponseEntity<Sales>(savedSale, HttpStatus.CREATED);
    }
    
    @GetMapping("/sales/{id}")
    public ResponseEntity<Sales> getSaleById(@PathVariable Long id) {
        Sales sale = salesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(("the sale " + id + " does not exist")));

        return ResponseEntity.ok(sale);
    }

    
}
