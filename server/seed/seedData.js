const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Coupon = require('../models/Coupon');
const Order = require('../models/Order');
const Review = require('../models/Review');
const Cart = require('../models/Cart');
const Wishlist = require('../models/Wishlist');
const connectDB = require('../config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Review.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await User.deleteMany();
    await Coupon.deleteMany();
    await Cart.deleteMany();
    await Wishlist.deleteMany();

    // 1. Users (using save() to trigger bcrypt pre-save hook)
    const adminUser = await new User({ name: 'Admin User', email: 'admin@freshkart.in', password: 'Admin@123', role: 'admin' }).save();
    const testUser = await new User({ name: 'Test Customer', email: 'test@freshkart.in', password: 'Test@123', role: 'user', phone: '9876543210' }).save();
    const adminUserId = adminUser._id;
    const testUserId = testUser._id;


    // 2. Categories
    const categoriesData = [
      { name: 'Snacks', description: 'Crunchy and tasty Indian snacks' },
      { name: 'Pickles', description: 'Authentic Indian pickles' },
      { name: 'Sweets', description: 'Delicious traditional sweets' },
      { name: 'Spices', description: 'Aromatic Indian spices' },
      { name: 'Ready to Eat', description: 'Quick and easy meals' },
      { name: 'Dry Fruits', description: 'Premium quality dry fruits' },
      { name: 'Beverages', description: 'Refreshing Indian drinks' },
      { name: 'Gift Packs', description: 'Perfect gifts for every occasion' }
    ];
    const createdCategories = await Category.insertMany(categoriesData);

    // 3. Products
    const productsData = [
      {
        name: 'Andhra Mango Pickle',
        description: 'Spicy and tangy authentic Andhra style mango pickle.',
        price: 250,
        originalPrice: 300,
        images: ['https://placehold.co/600x600/F97316/white?text=Andhra+Mango+Pickle'],
        category: createdCategories[1]._id,
        stock: 50,
        weight: '500g',
        tags: ['spicy', 'mango', 'authentic'],
        isBestSeller: true,
        ingredients: 'Mangoes, Mustard Powder, Chilli Powder, Salt, Oil',
        nutrition: { calories: '150kcal', protein: '1g', carbs: '5g', fat: '14g' }
      },
      {
        name: 'Kaju Katli',
        description: 'Premium cashew fudge sweetened to perfection.',
        price: 800,
        originalPrice: 1000,
        images: ['https://placehold.co/600x600/F97316/white?text=Kaju+Katli'],
        category: createdCategories[2]._id,
        stock: 30,
        weight: '1kg',
        tags: ['sweet', 'cashew', 'festival'],
        isFeatured: true,
        ingredients: 'Cashew Nuts, Sugar, Ghee, Silver Vark',
        nutrition: { calories: '400kcal', protein: '8g', carbs: '45g', fat: '22g' }
      },
      {
        name: 'Masala Chai Powder',
        description: 'Aromatic blend of tea leaves and Indian spices.',
        price: 150,
        originalPrice: 180,
        images: ['https://placehold.co/600x600/F97316/white?text=Masala+Chai+Powder'],
        category: createdCategories[6]._id,
        stock: 100,
        weight: '250g',
        tags: ['tea', 'spices', 'morning'],
        isNewArrival: true,
        ingredients: 'Tea leaves, Cardamom, Ginger, Clove, Cinnamon',
        nutrition: { calories: '2kcal', protein: '0g', carbs: '0.5g', fat: '0g' }
      }
    ];

    // Generate remaining 27 products to meet 30+ requirement
    const sampleNames = ['Haldiram Bhujia', 'Gulab Jamun', 'Garam Masala', 'Almonds', 'Paneer Tikka Masala', 'Filter Coffee', 'Festive Hamper', 'Mixed Pickle', 'Rasgulla', 'Turmeric Powder', 'Dal Makhani', 'Cashews', 'Rooh Afza', 'Diwali Gift Box', 'Murukku', 'Lemon Pickle', 'Soan Papdi', 'Cumin Seeds', 'Palak Paneer', 'Pistachios', 'Mango Lassi', 'Corporate Gift', 'Banana Chips', 'Garlic Pickle', 'Mysore Pak', 'Coriander Powder', 'Chana Masala'];
    
    for (let i = 0; i < sampleNames.length; i++) {
      const categoryIndex = i % 8;
      productsData.push({
        name: sampleNames[i],
        description: `High quality ${sampleNames[i]} for your daily needs.`,
        price: 100 + (i * 20),
        originalPrice: 120 + (i * 25),
        images: [`https://placehold.co/600x600/F97316/white?text=${sampleNames[i].replace(/ /g, '+')}`],
        category: createdCategories[categoryIndex]._id,
        stock: Math.floor(Math.random() * 90) + 10,
        weight: '500g',
        tags: ['fresh', 'tasty', 'premium'],
        isFeatured: i % 5 === 0,
        isBestSeller: i % 7 === 0,
        isNewArrival: i % 4 === 0,
        ingredients: 'Premium ingredients',
        nutrition: { calories: '200kcal', protein: '5g', carbs: '20g', fat: '10g' }
      });
    }

    const createdProducts = await Product.insertMany(productsData);

    // 4. Coupons
    const coupons = [
      { code: 'WELCOME10', discountType: 'percentage', discountValue: 10, minOrderAmount: 500, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
      { code: 'SAVE20', discountType: 'percentage', discountValue: 20, minOrderAmount: 1000, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
      { code: 'FRESH50', discountType: 'flat', discountValue: 50, minOrderAmount: 300, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
      { code: 'NEWUSER15', discountType: 'percentage', discountValue: 15, minOrderAmount: 600, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
      { code: 'FESTIVE30', discountType: 'percentage', discountValue: 30, minOrderAmount: 2000, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) }
    ];
    await Coupon.insertMany(coupons);

    // 5. Sample Orders
    const ordersData = [
      {
        user: testUserId,
        items: [
          { product: createdProducts[0]._id, name: createdProducts[0].name, quantity: 2, price: createdProducts[0].price, image: createdProducts[0].images[0] }
        ],
        shippingAddress: { street: '123 Main St', city: 'Mumbai', state: 'MH', zipCode: '400001', country: 'India' },
        paymentMethod: 'COD',
        paymentStatus: 'Completed',
        orderStatus: 'Delivered',
        totalPrice: 500,
        shippingPrice: 0,
        taxPrice: 0,
        trackingHistory: [{ status: 'Delivered', comment: 'Delivered successfully' }]
      },
      {
        user: testUserId,
        items: [
          { product: createdProducts[1]._id, name: createdProducts[1].name, quantity: 1, price: createdProducts[1].price, image: createdProducts[1].images[0] }
        ],
        shippingAddress: { street: '123 Main St', city: 'Mumbai', state: 'MH', zipCode: '400001', country: 'India' },
        paymentMethod: 'Card',
        paymentStatus: 'Completed',
        orderStatus: 'Shipped',
        totalPrice: 800,
        shippingPrice: 50,
        taxPrice: 40,
        trackingHistory: [{ status: 'Shipped', comment: 'Order dispatched' }]
      },
      {
        user: adminUserId,
        items: [
          { product: createdProducts[2]._id, name: createdProducts[2].name, quantity: 3, price: createdProducts[2].price, image: createdProducts[2].images[0] }
        ],
        shippingAddress: { street: '456 MG Road', city: 'Delhi', state: 'DL', zipCode: '110001', country: 'India' },
        paymentMethod: 'COD',
        paymentStatus: 'Pending',
        orderStatus: 'Processing',
        totalPrice: 450,
        shippingPrice: 0,
        taxPrice: 20,
        trackingHistory: [{ status: 'Processing', comment: 'Order confirmed' }]
      }
    ];
    await Order.insertMany(ordersData);

    // 6. Sample Reviews
    const reviewsData = [
      { product: createdProducts[0]._id, user: testUserId, rating: 5, comment: 'Amazing taste! Reminds me of home.', isVerifiedPurchase: true },
      { product: createdProducts[0]._id, user: adminUserId, rating: 4, comment: 'Good quality, a bit too spicy for me.', isVerifiedPurchase: false },
      { product: createdProducts[1]._id, user: testUserId, rating: 5, comment: 'Very soft and delicious Kaju Katli.', isVerifiedPurchase: true },
      { product: createdProducts[2]._id, user: testUserId, rating: 4, comment: 'Nice flavor and aroma.', isVerifiedPurchase: false },
      { product: createdProducts[3]._id, user: testUserId, rating: 5, comment: 'Great quality and packing.', isVerifiedPurchase: false }
    ];
    await Review.insertMany(reviewsData);
    
    // Update product ratings
    for (const rev of reviewsData) {
      const product = await Product.findById(rev.product);
      if (product) {
        const productReviews = await Review.find({ product: rev.product });
        product.numReviews = productReviews.length;
        product.rating = productReviews.reduce((acc, item) => item.rating + acc, 0) / productReviews.length;
        await product.save();
      }
    }

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error with seed data: ${error.message}`);
    process.exit(1);
  }
};

importData();
