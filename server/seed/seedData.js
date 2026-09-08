const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");
const Coupon = require("../models/Coupon");
const Order = require("../models/Order");
const Review = require("../models/Review");
const Cart = require("../models/Cart");
const Wishlist = require("../models/Wishlist");
const connectDB = require("../config/db");
const productsData = require("./productsData");

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

    // 1. Users
    const adminUser = await new User({
      name: "Admin User",
      email: "admin@freshkart.in",
      password: "Admin@123",
      role: "admin"
    }).save();

    const testUser = await new User({
      name: "Test Customer",
      email: "test@freshkart.in",
      password: "Test@123",
      role: "user",
      phone: "9876543210"
    }).save();

    const adminUserId = adminUser._id;
    const testUserId = testUser._id;

    // 2. Categories
    const categoriesData = [
      { name: "Snacks", slug: "snacks", description: "Crunchy and tasty Indian snacks and namkeens" },
      { name: "Pickles", slug: "pickles", description: "Authentic traditional homemade pickles and chutneys" },
      { name: "Sweets", slug: "sweets", description: "Delicious traditional Indian sweets, mithai and halwas" },
      { name: "Spices", slug: "spices", description: "Aromatic pure Indian whole and blended spices" },
      { name: "Ready to Eat", slug: "ready-to-eat", description: "Quick, natural and easy ready-to-eat Indian meals" },
      { name: "Dry Fruits", slug: "dry-fruits", description: "Premium quality cashews, almonds, walnuts and dry fruits" },
      { name: "Beverages", slug: "beverages", description: "Refreshing Indian teas, chai blends, and traditional drinks" },
      { name: "Gift Packs", slug: "gift-packs", description: "Festive gift hampers and celebration packs for every occasion" }
    ];

    const createdCategories = await Category.insertMany(categoriesData);

    // Map category slug to MongoDB ObjectId
    const categoryMap = {};
    createdCategories.forEach((cat) => {
      categoryMap[cat.slug] = cat._id;
    });

    // 3. Products (96 products from productsData.js)
    const productsToInsert = productsData.map((p) => {
      const categoryId = categoryMap[p.categorySlug];
      if (!categoryId) {
        throw new Error("Category not found for slug: " + p.categorySlug);
      }
      return {
        name: p.name,
        slug: p.slug,
        description: p.description,
        price: p.price,
        originalPrice: p.originalPrice,
        discount: p.discount || Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100),
        images: p.images,
        category: categoryId,
        stock: p.stock,
        rating: p.rating || 4.5,
        numReviews: p.numReviews || 10,
        ingredients: p.ingredients,
        nutrition: p.nutrition,
        weight: p.weight,
        tags: p.tags,
        isFeatured: Boolean(p.isFeatured),
        isBestSeller: Boolean(p.isBestSeller),
        isNewArrival: Boolean(p.isNewArrival),
        isActive: true
      };
    });

    const createdProducts = await Product.insertMany(productsToInsert);
    console.log("Inserted " + createdProducts.length + " products across " + createdCategories.length + " categories.");

    // 4. Coupons
    const coupons = [
      { code: "WELCOME10", discountType: "percentage", discountValue: 10, minOrderAmount: 500, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
      { code: "SAVE20", discountType: "percentage", discountValue: 20, minOrderAmount: 1000, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
      { code: "FRESH50", discountType: "flat", discountValue: 50, minOrderAmount: 300, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
      { code: "NEWUSER15", discountType: "percentage", discountValue: 15, minOrderAmount: 600, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) },
      { code: "FESTIVE30", discountType: "percentage", discountValue: 30, minOrderAmount: 2000, expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) }
    ];
    await Coupon.insertMany(coupons);

    // 5. Sample Orders
    const ordersData = [
      {
        user: testUserId,
        items: [
          { product: createdProducts[0]._id, name: createdProducts[0].name, quantity: 2, price: createdProducts[0].price, image: createdProducts[0].images[0] },
          { product: createdProducts[12]._id, name: createdProducts[12].name, quantity: 1, price: createdProducts[12].price, image: createdProducts[12].images[0] }
        ],
        shippingAddress: { street: "123 Marine Drive", city: "Mumbai", state: "Maharashtra", zipCode: "400020", country: "India" },
        paymentMethod: "COD",
        paymentStatus: "Completed",
        orderStatus: "Delivered",
        totalPrice: createdProducts[0].price * 2 + createdProducts[12].price,
        shippingPrice: 0,
        taxPrice: 0,
        trackingHistory: [{ status: "Delivered", comment: "Package delivered at customer doorstep" }]
      },
      {
        user: testUserId,
        items: [
          { product: createdProducts[24]._id, name: createdProducts[24].name, quantity: 2, price: createdProducts[24].price, image: createdProducts[24].images[0] }
        ],
        shippingAddress: { street: "45 Lavelle Road", city: "Bengaluru", state: "Karnataka", zipCode: "560001", country: "India" },
        paymentMethod: "Card",
        paymentStatus: "Completed",
        orderStatus: "Shipped",
        totalPrice: createdProducts[24].price * 2,
        shippingPrice: 49,
        taxPrice: 35,
        trackingHistory: [{ status: "Shipped", comment: "Dispatched via express delivery" }]
      },
      {
        user: adminUserId,
        items: [
          { product: createdProducts[36]._id, name: createdProducts[36].name, quantity: 1, price: createdProducts[36].price, image: createdProducts[36].images[0] }
        ],
        shippingAddress: { street: "78 MG Road", city: "Hyderabad", state: "Telangana", zipCode: "500003", country: "India" },
        paymentMethod: "COD",
        paymentStatus: "Pending",
        orderStatus: "Processing",
        totalPrice: createdProducts[36].price,
        shippingPrice: 0,
        taxPrice: 20,
        trackingHistory: [{ status: "Processing", comment: "Order verified and packed" }]
      }
    ];
    await Order.insertMany(ordersData);

    // 6. Sample Reviews
    const reviewsData = [
      { product: createdProducts[0]._id, user: testUserId, rating: 5, comment: "Crisp, fresh and delicious! Exactly the traditional taste I was longing for.", isVerifiedPurchase: true },
      { product: createdProducts[0]._id, user: adminUserId, rating: 5, comment: "Exceptional texture and rich butter aroma. Packaged very safely.", isVerifiedPurchase: true },
      { product: createdProducts[12]._id, user: testUserId, rating: 5, comment: "Pure authentic Andhra style spicy pickle. Oil quality is pristine.", isVerifiedPurchase: true },
      { product: createdProducts[24]._id, user: testUserId, rating: 5, comment: "Melt-in-mouth Kaju Katli with perfect sweetness. Highly recommended!", isVerifiedPurchase: true },
      { product: createdProducts[36]._id, user: testUserId, rating: 5, comment: "Aromatic and fresh spices, makes everyday curries restaurant-grade.", isVerifiedPurchase: true },
      { product: createdProducts[60]._id, user: testUserId, rating: 5, comment: "Super crunchy and jumbo sized cashews. Fresh harvest quality.", isVerifiedPurchase: true }
    ];
    await Review.insertMany(reviewsData);

    console.log("Data Imported successfully with 96 products across 8 categories!");
    process.exit(0);
  } catch (error) {
    console.error("Error with seed data: " + error.message);
    process.exit(1);
  }
};

importData();
