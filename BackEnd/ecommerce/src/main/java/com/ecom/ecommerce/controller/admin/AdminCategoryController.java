package com.ecom.ecommerce.controller.admin;

import com.ecom.ecommerce.dto.CategoryDto;
import com.ecom.ecommerce.entity.Category;
import com.ecom.ecommerce.entity.User;
import com.ecom.ecommerce.repository.CategoryRepository;
import com.ecom.ecommerce.services.admin.category.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminCategoryController {

     @Autowired
     private CategoryService categoryService;

    @PostMapping("/category")
    public  Category createCategory(@RequestBody CategoryDto categoryDto){
        Category category = categoryService.createcategory(categoryDto);
        return category;
    }
    @GetMapping("")
    public ResponseEntity<List<Category>> getAllCategories(){
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

}
