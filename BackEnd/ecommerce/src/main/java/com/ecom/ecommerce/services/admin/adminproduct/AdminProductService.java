package com.ecom.ecommerce.services.admin.adminproduct;

import com.ecom.ecommerce.dto.ProductDto;

import java.io.IOException;
import java.util.List;

public interface AdminProductService {
    ProductDto addProduct(ProductDto productDto) throws IOException;
    List<ProductDto> getAllProducts();

    List<ProductDto> getAllProductByName(String name);
    boolean deleteProduct(Long id);
}
