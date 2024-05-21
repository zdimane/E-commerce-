package com.ecom.ecommerce.services.admin.coupon;

import com.ecom.ecommerce.entity.Coupon;

import java.util.List;

public interface AdminCouponService {
    Coupon createCoupon(Coupon coupon);
    List<Coupon> getAllCoupons();
}
