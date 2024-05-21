package com.ecom.ecommerce.dto;

import com.ecom.ecommerce.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String email;
    private String name;
    private UserRole userRole;
}
