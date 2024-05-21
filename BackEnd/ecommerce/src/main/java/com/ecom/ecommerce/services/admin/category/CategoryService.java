package com.ecom.ecommerce.services.admin.category;

import com.ecom.ecommerce.dto.CategoryDto;
import com.ecom.ecommerce.entity.Category;

import java.util.List;

public interface CategoryService {
    Category createcategory(CategoryDto categoryDto);

    List<Category> getAllCategories();
}
