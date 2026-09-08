const asyncHandler = require('express-async-handler');
const Coupon = require('../models/Coupon');

exports.validateCoupon = asyncHandler(async (req, res) => {
  const { code, orderAmount } = req.body;
  const coupon = await Coupon.findOne({ code: code.toUpperCase(), isActive: true });
  
  if (!coupon) {
    res.status(400);
    throw new Error('Invalid coupon code');
  }
  
  if (new Date(coupon.expiresAt) < new Date()) {
    res.status(400);
    throw new Error('Coupon has expired');
  }
  
  if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) {
    res.status(400);
    throw new Error('Coupon usage limit reached');
  }
  
  if (orderAmount < coupon.minOrderAmount) {
    res.status(400);
    throw new Error(`Minimum order amount of ₹${coupon.minOrderAmount} required`);
  }
  
  let discount = 0;
  if (coupon.discountType === 'percentage') {
    discount = (orderAmount * coupon.discountValue) / 100;
  } else {
    discount = coupon.discountValue;
  }
  
  res.json({ coupon, discount });
});

exports.getAllCoupons = asyncHandler(async (req, res) => {
  const coupons = await Coupon.find({});
  res.json(coupons);
});

exports.createCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.create(req.body);
  res.status(201).json(coupon);
});

exports.updateCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (coupon) {
    res.json(coupon);
  } else {
    res.status(404);
    throw new Error('Coupon not found');
  }
});

exports.deleteCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.findByIdAndDelete(req.params.id);
  if (coupon) {
    res.json({ message: 'Coupon removed' });
  } else {
    res.status(404);
    throw new Error('Coupon not found');
  }
});
