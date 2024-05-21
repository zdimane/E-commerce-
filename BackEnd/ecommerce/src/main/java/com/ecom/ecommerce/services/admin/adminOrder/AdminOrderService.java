package com.ecom.ecommerce.services.admin.adminOrder;

import com.ecom.ecommerce.dto.OrderDto;

import java.util.List;

public interface AdminOrderService {
    List<OrderDto> getAllPlacedOrders();
}
