# 🛒 FreshKart — Modern Indian Food E-Commerce Platform

<div align="center">

![FreshKart Logo](https://placehold.co/800x200/F97316/white?text=🛒+FreshKart+-+Fresh+Indian+Food+Online)

**A full-stack MERN e-commerce platform for authentic Indian food products**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?logo=mongodb)](https://mongodb.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[![Deploy with Vercel](https://vercel.com/button)](https://freshkart-mern.vercel.app)

[🌐 Live Demo on Vercel](https://freshkart-mern.vercel.app) · [📦 GitHub Repository](https://github.com/Manikantaparripati/freshkart-mern) · [📖 Analysis Proposal](ASSIGNMENT_ANALYSIS.md)

</div>

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Problem Identified](#problem-identified)
- [Key Improvements](#key-improvements)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Demo Credentials](#demo-credentials)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)

---

## 🎯 Project Overview

**FreshKart** is a modern, full-stack Indian food e-commerce platform built as part of a Full Stack MERN Internship assignment. The project is inspired by analyzing traditional Indian food e-commerce websites and identifying significant opportunities for improvement in UX, performance, and conversion optimization.

FreshKart sells authentic Indian food products including pickles, snacks, sweets, spices, ready-to-eat meals, dry fruits, beverages, and gift packs — all delivered fresh with a premium brand experience.

This is **not a clone** of any existing website. It is an original product designed from the ground up with modern web development best practices.

---

## 🔍 Problem Identified

After analyzing traditional Indian food e-commerce websites, the following critical issues were identified:

| Problem | Impact |
|---------|--------|
| **Poor navigation** — flat categories with no hierarchy | Users can't find products quickly → high bounce rate |
| **No search suggestions** — typing into search returns zero feedback | Friction in product discovery → lost sales |
| **No personalization** — same experience for every visitor | Low customer retention and repeat purchase rate |
| **No wishlist** — users must re-find products they liked | Lost conversion opportunities |
| **Basic product pages** — no gallery, no reviews, no recommendations | Low trust → low add-to-cart rate |
| **Slow checkout** — single-page form with no validation feedback | High cart abandonment |
| **No order tracking** — after purchase users can't see order status | Poor post-purchase experience |
| **Not mobile-optimized** — desktop-first layout poorly adapted | 70%+ traffic is mobile but poor mobile UX |
| **No performance optimization** — all JS loaded upfront | Slow first load → high bounce rate |
| **No SEO basics** — generic page titles, no meta tags | Low organic traffic |
| **No admin panel** — no way to manage products/orders | Operational inefficiency |

---

## 🚀 Key Improvements

### 1. 🔍 Smart Search
- Debounced search with instant suggestions dropdown
- Search by product name, category, or tags
- Clean search results page with filters
- Empty state with suggestions when no results

### 2. 🧠 Product Recommendations
- "Recommended For You" section based on category + tags
- "Frequently Bought Together" on product pages
- Simple recommendation algorithm extensible to ML

### 3. 👀 Recently Viewed Products
- Track last 6 viewed products in localStorage
- Persistent across sessions
- Display in product pages and homepage (when logged in)

### 4. 👤 Personalized Experience
- Welcome back message for returning users
- Personalized dashboard with order history
- Saved addresses for faster checkout
- Wishlist across sessions

### 5. 🛒 Better Cart & Checkout
- Slide-in cart drawer for quick access
- Multi-step checkout (Address → Delivery → Payment → Review)
- Real-time validation
- Coupon code support with backend validation
- Shipping and tax calculation

### 6. 📦 Visual Order Tracking
- Step-by-step tracking: Placed → Confirmed → Processing → Shipped → Delivered
- Timeline component with dates and statuses
- Email notification architecture (Nodemailer-ready)

### 7. 📱 Mobile-First Design
- Dedicated mobile bottom navigation
- Touch-friendly product cards
- Collapsible filter sidebar
- Full-screen search on mobile

### 8. 🔐 Secure Authentication
- JWT-based auth with refresh token architecture
- Password hashing (bcrypt, 12 rounds)
- Protected routes (user + admin)
- Role-based access control

### 9. 🏪 Admin Dashboard
- Revenue and order analytics
- Product CRUD with image URL support
- Order status management
- User management
- Coupon management

### 10. ⚡ Performance
- Lazy-loaded routes (code splitting)
- Image lazy loading
- Debounced search to minimize API calls
- Paginated product listings
- Optimistic UI updates for cart/wishlist

### 11. 🔍 SEO
- Dynamic page titles per route
- Meta descriptions on all pages
- Semantic HTML throughout
- SEO-friendly URLs (`/products/andhra-mango-pickle`)
- Open Graph metadata

### 12. ♿ Accessibility
- Proper ARIA labels
- Keyboard navigation support
- Sufficient color contrast
- Focus state management
- Alt text on all images

---

## ✨ Features

### Customer Features
- 🏠 Premium homepage with hero, categories, bestsellers, new arrivals, offers
- 🔍 Smart search with suggestions
- 📂 Category browsing with filters (price, rating, availability)
- 📦 Product detail pages with image gallery, reviews, nutrition info
- ❤️ Wishlist add/remove/move to cart
- 🛒 Full cart with quantity management, coupon codes
- 🚀 Multi-step checkout
- 💳 Cash on Delivery + Demo online payment
- 📋 Order history and visual tracking
- 👤 User profile with saved addresses
- ⭐ Product reviews and ratings
- 🎁 Countdown timer for limited-time offers
- 📧 Newsletter subscription
- 📱 Mobile-optimized with bottom navigation

### Admin Features
- 📊 Dashboard with key metrics and recent orders
- 📦 Product management (add/edit/delete/stock update)
- 🗂️ Category management
- 🛍️ Order management with status updates
- 👥 User management and role assignment
- 🎟️ Coupon management

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2 | UI framework |
| Vite | 5.0 | Build tool |
| React Router | 6.x | Client-side routing |
| Redux Toolkit | 2.x | State management |
| Tailwind CSS | 3.4 | Styling |
| Axios | 1.6 | HTTP client |
| Lucide React | 0.303 | Icons |
| React Hot Toast | 2.4 | Notifications |
| React Helmet Async | 2.0 | SEO meta tags |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 18+ | Runtime |
| Express.js | 4.18 | Web framework |
| MongoDB | 7.0 | Database |
| Mongoose | 8.0 | ODM |
| JWT | 9.0 | Authentication |
| bcryptjs | 2.4 | Password hashing |
| express-validator | 7.0 | Input validation |
| Morgan | 1.10 | HTTP logging |

---

## 📁 Project Structure

```
freshkart/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/           # ProtectedRoute, AdminRoute
│   │   │   ├── cart/           # CartDrawer, CartItem, CartSummary
│   │   │   ├── checkout/       # AddressStep, PaymentStep, etc.
│   │   │   ├── footer/         # Footer
│   │   │   ├── home/           # HeroSection, BestSellers, etc.
│   │   │   ├── navbar/         # Navbar, SearchBar, MobileBottomNav
│   │   │   ├── product/        # ProductCard, ProductFilters, Reviews
│   │   │   └── ui/             # Button, Modal, Skeleton, Toast
│   │   ├── hooks/              # useDebounce, useRecentlyViewed
│   │   ├── layouts/            # MainLayout, AdminLayout
│   │   ├── pages/
│   │   │   ├── admin/          # Dashboard, Products, Orders, Users
│   │   │   ├── HomePage.jsx
│   │   │   ├── ProductsPage.jsx
│   │   │   ├── ProductDetailPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── CheckoutPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── OrdersPage.jsx
│   │   │   ├── WishlistPage.jsx
│   │   │   └── SearchPage.jsx
│   │   ├── services/           # API service layer
│   │   ├── store/              # Redux store + slices
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                     # Express backend
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/            # Business logic
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── categoryController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── reviewController.js
│   │   ├── wishlistController.js
│   │   ├── couponController.js
│   │   └── adminController.js
│   ├── middleware/
│   │   ├── auth.js             # JWT protect + admin check
│   │   └── errorHandler.js
│   ├── models/                 # Mongoose schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Order.js
│   │   ├── Review.js
│   │   ├── Cart.js
│   │   ├── Wishlist.js
│   │   └── Coupon.js
│   ├── routes/                 # Express routers
│   ├── seed/
│   │   └── seedData.js         # Demo data
│   ├── utils/
│   │   └── generateToken.js
│   ├── .env.example
│   └── server.js
│
├── .gitignore
├── .env.example
├── package.json                # Root concurrently runner
├── README.md
└── ASSIGNMENT_ANALYSIS.md
```

---

## ⚙️ Installation

### Prerequisites
- Node.js 18+
- MongoDB (local) or MongoDB Atlas account
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/yourusername/freshkart.git
cd freshkart
```

### Install All Dependencies
```bash
# Install root, server, and client dependencies
npm run install:all
```

Or install manually:
```bash
# Root
npm install

# Backend
cd server && npm install

# Frontend
cd ../client && npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the `server/` directory:

```bash
cp .env.example server/.env
```

Then edit `server/.env`:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/freshkart
JWT_SECRET=your_super_secret_jwt_key_change_this_min_32_chars
JWT_EXPIRE=30d
```

Optional (for image uploads, email, payments):
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your@gmail.com
SMTP_PASSWORD=your_app_password
```

---

## 🚀 Running Locally

### 1. Start MongoDB
```bash
# Local MongoDB
mongod --dbpath=/data/db

# Or use MongoDB Atlas (update MONGO_URI in .env)
```

### 2. Seed the Database
```bash
npm run seed
```

This creates:
- 8 categories
- 96 authentic Indian food products across 8 categories (12 products per category)
- 2 demo users
- 5 coupons
- Sample orders and reviews

### 3. Start Development Servers

```bash
# Start both frontend and backend together
npm run dev
```

Or start separately:
```bash
# Backend (port 5000)
cd server && npm run dev

# Frontend (port 5173)
cd client && npm run dev
```

### 4. Access the App
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api
- **API Health**: http://localhost:5000/api/health

---

## 🔑 Demo Credentials

### Customer Account
```
Email:    test@freshkart.in
Password: Test@123
```

### Admin Account
```
Email:    admin@freshkart.in
Password: Admin@123
```

### Demo Coupon Codes
| Code | Discount | Min Order |
|------|----------|-----------|
| WELCOME10 | 10% off | ₹0 |
| SAVE20 | 20% off | ₹500 |
| FRESH50 | ₹50 flat | ₹200 |
| NEWUSER15 | 15% off | ₹300 |
| FESTIVE30 | 30% off | ₹1000 |

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
```
POST   /api/auth/register       Register new user
POST   /api/auth/login          Login user
GET    /api/auth/me             Get current user (protected)
PUT    /api/auth/profile        Update profile (protected)
PUT    /api/auth/password       Change password (protected)
```

### Products
```
GET    /api/products                    Get products (with filters)
GET    /api/products/featured           Featured products
GET    /api/products/bestsellers        Bestsellers
GET    /api/products/new-arrivals       New arrivals
GET    /api/products/search?q=query     Search products
GET    /api/products/:slug              Get product by slug
GET    /api/products/:id/recommended    Get recommendations
POST   /api/products                    Create product (admin)
PUT    /api/products/:id                Update product (admin)
DELETE /api/products/:id                Delete product (admin)
```

### Categories
```
GET    /api/categories                  Get all categories
GET    /api/categories/:slug            Get category by slug
POST   /api/categories                  Create category (admin)
PUT    /api/categories/:id              Update category (admin)
DELETE /api/categories/:id              Delete category (admin)
```

### Cart
```
GET    /api/cart                        Get cart (protected)
POST   /api/cart                        Add item to cart (protected)
PUT    /api/cart/:productId             Update item quantity (protected)
DELETE /api/cart/:productId             Remove item (protected)
DELETE /api/cart                        Clear cart (protected)
```

### Orders
```
POST   /api/orders                      Create order (protected)
GET    /api/orders/my                   Get my orders (protected)
GET    /api/orders/:id                  Get order by ID (protected)
PUT    /api/orders/:id/cancel           Cancel order (protected)
GET    /api/admin/orders                All orders (admin)
PUT    /api/admin/orders/:id/status     Update order status (admin)
```

### Reviews
```
GET    /api/reviews/:productId          Get product reviews
POST   /api/reviews/:productId          Create review (protected)
PUT    /api/reviews/:id                 Update review (protected)
DELETE /api/reviews/:id                 Delete review (protected)
```

### Wishlist
```
GET    /api/wishlist                    Get wishlist (protected)
POST   /api/wishlist                    Add to wishlist (protected)
DELETE /api/wishlist/:productId         Remove from wishlist (protected)
```

### Coupons
```
POST   /api/coupons/validate            Validate coupon code
GET    /api/admin/coupons               All coupons (admin)
POST   /api/admin/coupons               Create coupon (admin)
PUT    /api/admin/coupons/:id           Update coupon (admin)
DELETE /api/admin/coupons/:id           Delete coupon (admin)
```

### Admin
```
GET    /api/admin/dashboard             Dashboard stats (admin)
GET    /api/admin/users                 All users (admin)
PUT    /api/admin/users/:id/role        Update user role (admin)
```

---

## 🚢 Deployment

### Frontend → Vercel / Netlify

```bash
cd client
npm run build
# Deploy the dist/ folder to Vercel or Netlify
```

**Vercel:**
```bash
npm install -g vercel
cd client
vercel --prod
```

Add environment variable: `VITE_API_URL=https://your-backend.railway.app/api`

### Backend → Railway / Render

1. Push code to GitHub
2. Create new project on [Railway](https://railway.app) or [Render](https://render.com)
3. Connect GitHub repo, set root to `server/`
4. Set environment variables (MONGO_URI, JWT_SECRET, etc.)
5. Deploy

### Database → MongoDB Atlas

1. Create account at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a free M0 cluster
3. Whitelist your IP (or 0.0.0.0/0 for all)
4. Create database user
5. Copy connection string to `MONGO_URI` env var

---

## 📸 Screenshots

> Screenshots will be added after deployment. Key screens include:

- Homepage with hero and product sections
- Product listing with filters sidebar
- Product detail with image gallery and reviews
- Cart drawer and cart page
- Multi-step checkout
- Order tracking page
- Admin dashboard
- Mobile views

---

## 🔮 Future Improvements

### High Priority
- [ ] **Real Payment Gateway** — Razorpay integration for actual payments
- [ ] **AI Recommendations** — ML-based product recommendations using user behavior
- [ ] **WhatsApp Support** — WhatsApp Business API for customer support
- [ ] **Push Notifications** — Browser push notifications for order updates
- [ ] **Email Notifications** — Nodemailer for order confirmation, shipping updates

### Medium Priority
- [ ] **Advanced Analytics** — Charts for revenue, top products, customer behavior
- [ ] **Loyalty Points** — Earn and redeem points on purchases
- [ ] **Referral System** — Refer-a-friend with discount rewards
- [ ] **PWA** — Progressive Web App for offline capability and app-like experience
- [ ] **Multi-language** — Hindi and regional language support

### Low Priority
- [ ] **Voice Search** — Search by voice using Web Speech API
- [ ] **AR Preview** — View product packaging in AR
- [ ] **Subscription Orders** — Monthly delivery subscriptions
- [ ] **Bulk Orders** — B2B bulk order portal
- [ ] **Vendor Portal** — Multi-vendor marketplace support

---

## 🎤 What to Demonstrate During Interview

1. **Start the app** — `npm run dev` in root
2. **Register a new user** — show form validation and JWT
3. **Browse products** — filters, search suggestions, category pages
4. **Product detail** — image gallery, add to cart, wishlist, reviews
5. **Cart management** — add/remove items, coupon code, price calculation
6. **Checkout flow** — multi-step, mock payment, order confirmation
7. **Order tracking** — visual timeline component
8. **Admin panel** — dashboard, product CRUD, order status update
9. **Mobile view** — responsive design, bottom navigation
10. **API docs** — show REST endpoints in browser/Postman

---

## 📄 License

MIT License — see [LICENSE](LICENSE) file.

---

<div align="center">

Made with ❤️ for the FreshKart MERN Internship Assignment

**FreshKart** — _Fresh Indian Flavours, Delivered to Your Door_ 🌶️

</div>
