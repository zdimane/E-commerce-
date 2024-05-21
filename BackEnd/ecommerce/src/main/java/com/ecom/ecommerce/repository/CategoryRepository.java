package com.ecom.ecommerce.repository;


import com.ecom.ecommerce.entity.Category;
import com.ecom.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Locale;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
