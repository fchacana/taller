package com.nttlab.apitienda.app.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nttlab.apitienda.app.exceptions.ResourceNotFoundException;
import com.nttlab.apitienda.app.models.Product;
import com.nttlab.apitienda.app.repository.ProductRespository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductRespository repositoryProduct;

    @GetMapping("/products")
    public List<Product> getAllProduct() {
        return repositoryProduct.findAll();
    }

    @PostMapping("/products")
    public Product saveProduct(@RequestBody Product product) {
        return repositoryProduct.save(product);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = repositoryProduct.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(("the product " + id + " does not exist")));

        return ResponseEntity.ok(product);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productBody) {
        Product product = repositoryProduct.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(("the product does not exist : " + id)));

        product.setName(productBody.getName());
        product.setPrice(productBody.getPrice());
        product.setQuantity(productBody.getQuantity());

        Product productUpdated = repositoryProduct.save(product);

        return ResponseEntity.ok(productUpdated);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarEmpleado(@PathVariable Long id) {
        Product product = repositoryProduct.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("the product does not exist : " + id));

        repositoryProduct.delete(product);
        Map<String, Boolean> res = new HashMap<>();
        res.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(res);
    }

}
