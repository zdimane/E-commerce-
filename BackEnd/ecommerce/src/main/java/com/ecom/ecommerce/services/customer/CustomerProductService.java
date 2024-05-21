package com.ecom.ecommerce.services.customer;

import com.ecom.ecommerce.dto.ProductDto;

import java.util.List;

public interface CustomerProductService {
    List<ProductDto> searchProductByTitle(String title);
    List<ProductDto> getAllProducts();
}
