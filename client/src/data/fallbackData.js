// FreshKart Fallback Catalog: 96 realistic Indian food products across 8 categories
export const FALLBACK_CATEGORIES = [
  {
    "_id": "cat-1",
    "name": "Snacks",
    "slug": "snacks",
    "description": "Crunchy and tasty Indian snacks"
  },
  {
    "_id": "cat-2",
    "name": "Pickles",
    "slug": "pickles",
    "description": "Authentic traditional homemade pickles"
  },
  {
    "_id": "cat-3",
    "name": "Sweets",
    "slug": "sweets",
    "description": "Delicious traditional sweets and halwas"
  },
  {
    "_id": "cat-4",
    "name": "Spices",
    "slug": "spices",
    "description": "Aromatic pure Indian spices and blends"
  },
  {
    "_id": "cat-5",
    "name": "Ready to Eat",
    "slug": "ready-to-eat",
    "description": "Quick, natural and easy meals"
  },
  {
    "_id": "cat-6",
    "name": "Dry Fruits",
    "slug": "dry-fruits",
    "description": "Premium quality cashews, almonds & nuts"
  },
  {
    "_id": "cat-7",
    "name": "Beverages",
    "slug": "beverages",
    "description": "Refreshing Indian teas, chai & syrups"
  },
  {
    "_id": "cat-8",
    "name": "Gift Packs",
    "slug": "gift-packs",
    "description": "Festive gift hampers for every celebration"
  }
];

export const FALLBACK_PRODUCTS = [
  {
    "_id": "p-1",
    "name": "Crispy Butter Murukku",
    "slug": "crispy-butter-murukku",
    "description": "Crispy, golden spiral snack crafted with roasted rice flour, creamy white butter, and aromatic cumin seeds. Handcrafted following generations-old South Indian festival recipes. Perfect tea-time companion.",
    "shortDescription": "Traditional spiral snack made with rice flour and pure butter.",
    "price": 139,
    "originalPrice": 160,
    "discount": 13,
    "images": [
      "/images/products/crispy-butter-murukku.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 65,
    "rating": 4.8,
    "numReviews": 128,
    "weight": "300g",
    "ingredients": "Rice Flour, Urad Dal, Pure White Butter, Cumin Seeds, White Sesame, Asafoetida, Rock Salt",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "murukku",
      "snacks",
      "south-indian",
      "butter",
      "crunchy"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-2",
    "name": "Spicy Masala Coated Peanuts",
    "slug": "spicy-masala-coated-peanuts",
    "description": "Premium peanuts coated in a bold spicy masala batter and oven-roasted to perfection. Packed with protein and bold Indian spices.",
    "shortDescription": "Crunchy peanuts coated with spicy masala batter.",
    "price": 99,
    "originalPrice": 120,
    "discount": 18,
    "images": [
      "/images/products/spicy-masala-coated-peanuts.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 120,
    "rating": 4.5,
    "numReviews": 87,
    "weight": "250g",
    "ingredients": "Peanuts, Chickpea Flour, Red Chilli, Cumin, Coriander, Salt, Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "peanuts",
      "snacks",
      "spicy",
      "masala"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-3",
    "name": "Authentic Kerala Banana Chips",
    "slug": "authentic-kerala-banana-chips",
    "description": "Made from premium raw Nendran bananas sliced thin and fried in pure cold-pressed coconut oil. Lightly salted with a hint of turmeric. A beloved Kerala classic.",
    "shortDescription": "Crispy raw banana chips fried in pure coconut oil.",
    "price": 120,
    "originalPrice": 140,
    "discount": 14,
    "images": [
      "/images/products/authentic-kerala-banana-chips.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 90,
    "rating": 4.7,
    "numReviews": 203,
    "weight": "200g",
    "ingredients": "Raw Banana, Coconut Oil, Turmeric, Salt",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "banana-chips",
      "kerala",
      "snacks",
      "coconut-oil"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-4",
    "name": "Special Aloo Bhujia",
    "slug": "special-aloo-bhujia",
    "description": "Finely extruded potato sev seasoned with carom seeds, black pepper, and dried mango powder. Ultra-thin, ultra-crispy, and bursting with authentic flavours.",
    "shortDescription": "Fine potato sev with aromatic spices — a North Indian classic.",
    "price": 89,
    "originalPrice": 110,
    "discount": 19,
    "images": [
      "/images/products/special-aloo-bhujia.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 150,
    "rating": 4.4,
    "numReviews": 165,
    "weight": "200g",
    "ingredients": "Potato, Chickpea Flour, Carom Seeds, Black Pepper, Dried Mango Powder, Salt, Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "bhujia",
      "aloo",
      "snacks",
      "sev"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-5",
    "name": "South Indian Kara Boondi",
    "slug": "south-indian-kara-boondi",
    "description": "Tiny perfectly round chickpea flour balls deep-fried and tossed with curry leaves, mustard seeds, dried red chillies, and peanuts. An addictive South Indian classic.",
    "shortDescription": "Crispy spiced boondi — the ultimate South Indian snack.",
    "price": 110,
    "originalPrice": 130,
    "discount": 15,
    "images": [
      "/images/products/south-indian-kara-boondi.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 80,
    "rating": 4.6,
    "numReviews": 94,
    "weight": "250g",
    "ingredients": "Chickpea Flour, Peanuts, Curry Leaves, Mustard Seeds, Dried Red Chillies, Salt, Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "boondi",
      "kara",
      "snacks",
      "south-indian"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-6",
    "name": "Traditional Ribbon Pakoda",
    "slug": "traditional-ribbon-pakoda",
    "description": "Crispy ribbon-shaped snack made with a blend of rice flour and Bengal gram flour, seasoned with sesame seeds and red chilli. A festival favourite from Tamil Nadu.",
    "shortDescription": "Flat ribbon-shaped rice and gram flour snack.",
    "price": 115,
    "originalPrice": 135,
    "discount": 15,
    "images": [
      "/images/products/traditional-ribbon-pakoda.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 70,
    "rating": 4.5,
    "numReviews": 72,
    "weight": "250g",
    "ingredients": "Rice Flour, Bengal Gram Flour, Sesame Seeds, Red Chilli, Butter, Salt, Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "ribbon-pakoda",
      "snacks",
      "south-indian",
      "festival"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-7",
    "name": "Andhra Chekkalu",
    "slug": "andhra-chekkalu",
    "description": "Flat round rice crackers from Andhra Pradesh made with rice flour, chana dal, sesame seeds, and green chillies. Shallow-fried to a satisfying crunch.",
    "shortDescription": "Traditional Andhra rice crackers with sesame and chillies.",
    "price": 125,
    "originalPrice": 150,
    "discount": 17,
    "images": [
      "/images/products/andhra-chekkalu.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 60,
    "rating": 4.6,
    "numReviews": 58,
    "weight": "200g",
    "ingredients": "Rice Flour, Chana Dal, Sesame Seeds, Green Chilli, Cumin, Salt, Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "chekkalu",
      "andhra",
      "snacks",
      "rice-crackers"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-8",
    "name": "Crispy Nippattu",
    "slug": "crispy-nippattu",
    "description": "A famous Karnataka snack — flat crispy discs made from rice flour, roasted peanuts, sesame seeds, and desiccated coconut. Perfectly spiced and deep-fried.",
    "shortDescription": "Karnataka-style crispy rice crackers with peanuts.",
    "price": 130,
    "originalPrice": 155,
    "discount": 16,
    "images": [
      "/images/products/crispy-nippattu.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 55,
    "rating": 4.7,
    "numReviews": 66,
    "weight": "200g",
    "ingredients": "Rice Flour, Peanuts, Sesame Seeds, Coconut, Red Chilli, Asafoetida, Salt, Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "nippattu",
      "karnataka",
      "snacks",
      "rice-crackers"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-9",
    "name": "Roasted Masala Chana",
    "slug": "roasted-masala-chana",
    "description": "Whole chickpeas roasted to a perfect crunch and coated with chaat masala, black salt, and dried mango powder. A high-protein healthy snack.",
    "shortDescription": "Crunchy roasted chickpeas tossed in tangy masala.",
    "price": 95,
    "originalPrice": 115,
    "discount": 17,
    "images": [
      "/images/products/roasted-masala-chana.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 130,
    "rating": 4.4,
    "numReviews": 112,
    "weight": "250g",
    "ingredients": "Chickpeas, Chaat Masala, Black Salt, Dried Mango Powder, Red Chilli, Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "chana",
      "roasted",
      "snacks",
      "healthy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-10",
    "name": "Spicy South Indian Mixture",
    "slug": "spicy-south-indian-mixture",
    "description": "Classic South Indian snack mixture with fried gram dal, boondi, sev, peanuts, cashew pieces, and curry leaves seasoned with red chilli and asafoetida.",
    "shortDescription": "A zesty blend of fried lentils, sev, and nuts.",
    "price": 145,
    "originalPrice": 170,
    "discount": 15,
    "images": [
      "/images/products/spicy-south-indian-mixture.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 100,
    "rating": 4.7,
    "numReviews": 189,
    "weight": "300g",
    "ingredients": "Gram Dal, Boondi, Sev, Peanuts, Cashew, Curry Leaves, Red Chilli, Salt, Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "mixture",
      "south-indian",
      "snacks",
      "spicy"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-11",
    "name": "Garlic Sev",
    "slug": "garlic-sev",
    "description": "Super-thin chickpea flour sev infused with real garlic paste and aromatic spices. Addictive and bold, perfect as a topping or standalone snack.",
    "shortDescription": "Thin crispy gram flour noodles with bold garlic flavour.",
    "price": 85,
    "originalPrice": 100,
    "discount": 15,
    "images": [
      "/images/products/garlic-sev.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 110,
    "rating": 4.3,
    "numReviews": 76,
    "weight": "200g",
    "ingredients": "Chickpea Flour, Garlic Paste, Carom Seeds, Turmeric, Salt, Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "sev",
      "garlic",
      "snacks",
      "crispy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-12",
    "name": "Pepper Cashews",
    "slug": "pepper-cashews",
    "description": "Premium whole cashews roasted with freshly cracked black pepper and sea salt. A gourmet snack with a satisfying peppery kick.",
    "shortDescription": "Whole cashews roasted with freshly cracked black pepper.",
    "price": 199,
    "originalPrice": 240,
    "discount": 17,
    "images": [
      "/images/products/pepper-cashews.jpg"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 75,
    "rating": 4.8,
    "numReviews": 143,
    "weight": "200g",
    "ingredients": "Cashew Nuts, Black Pepper, Sea Salt, Coconut Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "8g",
      "carbs": "58g",
      "fat": "26g"
    },
    "tags": [
      "cashews",
      "pepper",
      "snacks",
      "roasted",
      "premium"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-13",
    "name": "Andhra Avakaya Raw Mango Pickle",
    "slug": "andhra-avakaya-raw-mango-pickle",
    "description": "The legendary Avakaya — chunks of raw Totapuri mango marinated with coarsely ground mustard seeds, fiery red chilli powder, and rock salt in cold-pressed sesame oil. Sun-cured for authentic flavour.",
    "shortDescription": "Iconic Andhra-style raw mango pickle with mustard and chilli.",
    "price": 199,
    "originalPrice": 240,
    "discount": 17,
    "images": [
      "/images/products/andhra-avakaya-raw-mango-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 85,
    "rating": 4.9,
    "numReviews": 312,
    "weight": "400g",
    "ingredients": "Raw Mango, Mustard Seeds, Red Chilli Powder, Rock Salt, Sesame Oil, Fenugreek Seeds",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "avakaya",
      "mango-pickle",
      "andhra",
      "pickles",
      "spicy"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-14",
    "name": "Traditional Gongura Pachadi",
    "slug": "traditional-gongura-pachadi",
    "description": "Made from freshly harvested red gongura (sorrel) leaves cooked down with green chillies, garlic, and a classic tempering of mustard, cumin, and dried red chillies in sesame oil.",
    "shortDescription": "Tangy Andhra sorrel leaf pickle with bold spices.",
    "price": 179,
    "originalPrice": 210,
    "discount": 15,
    "images": [
      "/images/products/traditional-gongura-pachadi.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 70,
    "rating": 4.8,
    "numReviews": 198,
    "weight": "350g",
    "ingredients": "Gongura Leaves, Green Chillies, Garlic, Sesame Oil, Mustard Seeds, Cumin, Red Chilli",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "gongura",
      "sorrel",
      "andhra",
      "pickles",
      "tangy"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-15",
    "name": "Sun-Dried Spicy Lemon Pickle",
    "slug": "sun-dried-spicy-lemon-pickle",
    "description": "Whole lemons cut and marinated in red chilli, fenugreek, and rock salt, then sun-dried for weeks to develop deep concentrated flavours.",
    "shortDescription": "Whole lemon pickle sun-cured with traditional spices.",
    "price": 159,
    "originalPrice": 190,
    "discount": 16,
    "images": [
      "/images/products/sun-dried-spicy-lemon-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 90,
    "rating": 4.6,
    "numReviews": 145,
    "weight": "400g",
    "ingredients": "Lemon, Red Chilli, Fenugreek, Rock Salt, Sesame Oil, Turmeric",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "lemon-pickle",
      "sun-dried",
      "pickles",
      "tangy"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-16",
    "name": "Desi Mustard Garlic Pickle",
    "slug": "desi-mustard-garlic-pickle",
    "description": "Whole garlic cloves pickled in a bold mustard oil base with crushed mustard seeds, red chilli, and turmeric. Pungent, spicy, and deeply flavourful.",
    "shortDescription": "Punchy garlic cloves in a mustard-based pickle.",
    "price": 169,
    "originalPrice": 200,
    "discount": 16,
    "images": [
      "/images/products/desi-mustard-garlic-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 75,
    "rating": 4.7,
    "numReviews": 118,
    "weight": "300g",
    "ingredients": "Garlic, Mustard Oil, Mustard Seeds, Red Chilli, Turmeric, Salt",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "garlic-pickle",
      "mustard",
      "pickles",
      "spicy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-17",
    "name": "Spicy Tomato Thokku Pickle",
    "slug": "spicy-tomato-thokku-pickle",
    "description": "Fresh tomatoes slow-cooked with green chillies, ginger, garlic, and a generous tempering of mustard seeds, dried chillies, and curry leaves in sesame oil.",
    "shortDescription": "South Indian slow-cooked tomato pickle with tempering.",
    "price": 149,
    "originalPrice": 180,
    "discount": 17,
    "images": [
      "/images/products/spicy-tomato-thokku-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 85,
    "rating": 4.6,
    "numReviews": 134,
    "weight": "350g",
    "ingredients": "Tomato, Green Chilli, Ginger, Garlic, Sesame Oil, Mustard Seeds, Curry Leaves",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "tomato-thokku",
      "south-indian",
      "pickles",
      "spicy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-18",
    "name": "Allam Pachadi Ginger Pickle",
    "slug": "allam-pachadi-ginger-pickle",
    "description": "Fresh ginger cooked down with tamarind, jaggery, red chilli, and sesame seeds. A quintessential Andhra condiment traditionally served with idli and dosa.",
    "shortDescription": "Classic Andhra ginger pickle — the perfect idli-dosa companion.",
    "price": 155,
    "originalPrice": 185,
    "discount": 16,
    "images": [
      "/images/products/allam-pachadi-ginger-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 65,
    "rating": 4.7,
    "numReviews": 97,
    "weight": "300g",
    "ingredients": "Ginger, Tamarind, Jaggery, Red Chilli, Sesame Seeds, Sesame Oil, Salt",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "ginger-pickle",
      "allam-pachadi",
      "andhra",
      "pickles"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-19",
    "name": "Grandma Style Mixed Vegetable Pickle",
    "slug": "grandma-style-mixed-vegetable-pickle",
    "description": "A rustic medley of carrots, raw mango, raw papaya, and green chillies pickled in mustard oil with whole spices, following a traditional family recipe.",
    "shortDescription": "Old-fashioned mixed vegetable pickle with seasonal produce.",
    "price": 175,
    "originalPrice": 210,
    "discount": 17,
    "images": [
      "/images/products/grandma-style-mixed-vegetable-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 60,
    "rating": 4.5,
    "numReviews": 88,
    "weight": "500g",
    "ingredients": "Carrot, Raw Mango, Papaya, Green Chilli, Mustard Oil, Mustard Seeds, Fenugreek, Salt",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "mixed-pickle",
      "vegetables",
      "pickles",
      "traditional"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-20",
    "name": "Stuffed Green Chilli Pickle",
    "slug": "stuffed-green-chilli-pickle",
    "description": "Plump green chillies stuffed with a filling of fennel, mustard, and dried mango powder, then submerged in mustard oil and cured to perfection.",
    "shortDescription": "Whole green chillies stuffed with tangy masala and pickled.",
    "price": 165,
    "originalPrice": 195,
    "discount": 15,
    "images": [
      "/images/products/stuffed-green-chilli-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 55,
    "rating": 4.6,
    "numReviews": 72,
    "weight": "300g",
    "ingredients": "Green Chilli, Fennel Seeds, Mustard Seeds, Dried Mango Powder, Mustard Oil, Salt",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "green-chilli-pickle",
      "stuffed",
      "pickles",
      "spicy"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-21",
    "name": "Tangy Amla Pickle",
    "slug": "tangy-amla-pickle",
    "description": "Fresh amla (Indian gooseberry) pickled with mustard seeds, red chilli, and asafoetida in sesame oil. A traditional immunity-boosting condiment.",
    "shortDescription": "Indian gooseberry pickle loaded with Vitamin C.",
    "price": 149,
    "originalPrice": 175,
    "discount": 15,
    "images": [
      "/images/products/tangy-amla-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 70,
    "rating": 4.5,
    "numReviews": 83,
    "weight": "350g",
    "ingredients": "Amla, Sesame Oil, Mustard Seeds, Red Chilli, Asafoetida, Turmeric, Salt",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "amla-pickle",
      "gooseberry",
      "pickles",
      "healthy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-22",
    "name": "Traditional Tamarind Pickle",
    "slug": "traditional-tamarind-pickle",
    "description": "Seedless tamarind cooked with jaggery, red chilli powder, and a fragrant tempering of mustard, cumin, and curry leaves. Tangy, sweet, and utterly addictive.",
    "shortDescription": "Sweet and spicy tamarind concentrate pickle.",
    "price": 145,
    "originalPrice": 170,
    "discount": 15,
    "images": [
      "/images/products/traditional-tamarind-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 80,
    "rating": 4.6,
    "numReviews": 101,
    "weight": "350g",
    "ingredients": "Tamarind, Jaggery, Red Chilli, Sesame Oil, Mustard Seeds, Cumin, Curry Leaves, Salt",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "tamarind-pickle",
      "sweet-sour",
      "pickles",
      "traditional"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-23",
    "name": "Spicy Red Chilli Pickle",
    "slug": "spicy-red-chilli-pickle",
    "description": "Sun-dried whole red chillies marinated in mustard oil with fenugreek, asafoetida, and lemon juice. Only for those who love serious heat.",
    "shortDescription": "Fiery whole red chilli pickle for heat lovers.",
    "price": 155,
    "originalPrice": 185,
    "discount": 16,
    "images": [
      "/images/products/spicy-red-chilli-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 50,
    "rating": 4.4,
    "numReviews": 62,
    "weight": "250g",
    "ingredients": "Red Chilli, Mustard Oil, Fenugreek, Asafoetida, Lemon Juice, Salt",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "red-chilli-pickle",
      "spicy",
      "pickles",
      "fiery"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-24",
    "name": "Gongura Garlic Pickle",
    "slug": "gongura-garlic-pickle",
    "description": "A powerful combination of red gongura sorrel leaves and whole garlic cloves slow-cooked in sesame oil with chillies and traditional spices.",
    "shortDescription": "The bold combination of gongura and garlic in pickle.",
    "price": 185,
    "originalPrice": 220,
    "discount": 16,
    "images": [
      "/images/products/gongura-garlic-pickle.jpg"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 65,
    "rating": 4.8,
    "numReviews": 115,
    "weight": "350g",
    "ingredients": "Gongura Leaves, Garlic, Sesame Oil, Red Chilli, Mustard Seeds, Cumin, Salt",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "2g",
      "carbs": "12g",
      "fat": "11g"
    },
    "tags": [
      "gongura-garlic",
      "andhra",
      "pickles",
      "tangy",
      "spicy"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-25",
    "name": "Premium Kaju Katli",
    "slug": "premium-kaju-katli",
    "description": "Made from premium whole cashews ground to a fine paste and cooked with pure sugar and cardamom. Finished with edible silver foil. Melts instantly on the tongue.",
    "shortDescription": "Silky smooth cashew fudge — India's most loved sweet.",
    "price": 449,
    "originalPrice": 520,
    "discount": 14,
    "images": [
      "/images/products/premium-kaju-katli.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 80,
    "rating": 4.9,
    "numReviews": 345,
    "weight": "500g",
    "ingredients": "Cashew Nuts, Sugar, Cardamom, Edible Silver Foil, Ghee",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "kaju-katli",
      "cashew",
      "sweets",
      "premium",
      "festival"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-26",
    "name": "Traditional Motichoor Laddu",
    "slug": "traditional-motichoor-laddu",
    "description": "Fine chickpea flour boondi fried in pure ghee and bound together with fragrant saffron sugar syrup. Garnished with pistachios and edible silver leaf.",
    "shortDescription": "Melt-in-mouth tiny boondi laddus perfumed with saffron.",
    "price": 299,
    "originalPrice": 360,
    "discount": 17,
    "images": [
      "/images/products/traditional-motichoor-laddu.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 70,
    "rating": 4.8,
    "numReviews": 278,
    "weight": "500g",
    "ingredients": "Chickpea Flour, Sugar, Ghee, Saffron, Cardamom, Pistachio, Rose Water",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "motichoor",
      "laddu",
      "sweets",
      "festival",
      "ghee"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-27",
    "name": "Homemade Besan Laddu",
    "slug": "homemade-besan-laddu",
    "description": "Bengal gram flour slow-roasted in pure desi ghee until fragrant, then mixed with powdered sugar and rolled into perfect rounds. Simple, rich, and deeply satisfying.",
    "shortDescription": "Roasted gram flour laddus — a timeless Indian sweet.",
    "price": 249,
    "originalPrice": 300,
    "discount": 17,
    "images": [
      "/images/products/homemade-besan-laddu.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 90,
    "rating": 4.7,
    "numReviews": 189,
    "weight": "500g",
    "ingredients": "Bengal Gram Flour, Desi Ghee, Powdered Sugar, Cardamom, Cashew",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "besan-laddu",
      "laddu",
      "sweets",
      "homemade",
      "ghee"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-28",
    "name": "Classic Mysore Pak",
    "slug": "classic-mysore-pak",
    "description": "The iconic royal sweet from the Mysore palace kitchen — chickpea flour cooked in a sea of pure ghee and sugar until it sets into rich, crumbly, melt-in-mouth squares.",
    "shortDescription": "The original ghee-drenched Karnataka sweet.",
    "price": 329,
    "originalPrice": 390,
    "discount": 16,
    "images": [
      "/images/products/classic-mysore-pak.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 60,
    "rating": 4.8,
    "numReviews": 234,
    "weight": "400g",
    "ingredients": "Chickpea Flour, Ghee, Sugar, Cardamom",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "mysore-pak",
      "karnataka",
      "sweets",
      "ghee",
      "festival"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-29",
    "name": "Soft Milk Peda",
    "slug": "soft-milk-peda",
    "description": "Traditional peda made by reducing full-cream milk with sugar until thick and fudgy. Flavoured with green cardamom and garnished with chopped pistachios.",
    "shortDescription": "Soft milk fudge rounds flavoured with cardamom.",
    "price": 279,
    "originalPrice": 330,
    "discount": 15,
    "images": [
      "/images/products/soft-milk-peda.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 75,
    "rating": 4.6,
    "numReviews": 156,
    "weight": "400g",
    "ingredients": "Full-Cream Milk, Sugar, Cardamom, Pistachio, Ghee",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "peda",
      "milk",
      "sweets",
      "soft",
      "traditional"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-30",
    "name": "Traditional Coconut Burfi",
    "slug": "traditional-coconut-burfi",
    "description": "Fresh grated coconut cooked with sugar and cardamom until set into soft white barfi squares. A classic South Indian sweet for every celebration.",
    "shortDescription": "Fresh grated coconut burfi — simple and divine.",
    "price": 219,
    "originalPrice": 260,
    "discount": 16,
    "images": [
      "/images/products/traditional-coconut-burfi.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 85,
    "rating": 4.5,
    "numReviews": 122,
    "weight": "400g",
    "ingredients": "Fresh Coconut, Sugar, Cardamom, Ghee",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "coconut-burfi",
      "sweets",
      "coconut",
      "traditional"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-31",
    "name": "Rich Badam Halwa",
    "slug": "rich-badam-halwa",
    "description": "Premium almonds soaked, blanched, and ground into a coarse paste, then cooked low and slow with sugar, ghee, and saffron strands. A truly regal Indian dessert.",
    "shortDescription": "Slow-cooked almond halwa rich with ghee and saffron.",
    "price": 499,
    "originalPrice": 580,
    "discount": 14,
    "images": [
      "/images/products/rich-badam-halwa.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 45,
    "rating": 4.9,
    "numReviews": 198,
    "weight": "400g",
    "ingredients": "Almonds, Sugar, Ghee, Saffron, Cardamom, Milk",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "badam-halwa",
      "almond",
      "sweets",
      "premium",
      "ghee"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-32",
    "name": "Soft Gulab Jamun",
    "slug": "soft-gulab-jamun",
    "description": "Classic khoya and flour dough balls deep-fried to golden perfection and soaked in fragrant rose water and cardamom sugar syrup. Served warm for the best experience.",
    "shortDescription": "Spongy milk dough balls soaked in rose sugar syrup.",
    "price": 249,
    "originalPrice": 299,
    "discount": 17,
    "images": [
      "/images/products/soft-gulab-jamun.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 100,
    "rating": 4.7,
    "numReviews": 267,
    "weight": "500g",
    "ingredients": "Khoya, Refined Flour, Sugar, Rose Water, Cardamom, Ghee",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "gulab-jamun",
      "sweets",
      "syrup",
      "classic",
      "festival"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-33",
    "name": "Dry Fruit Laddu",
    "slug": "dry-fruit-laddu",
    "description": "A wholesome laddu made from a generous blend of almonds, cashews, walnuts, raisins, and dates bound together with jaggery syrup and ghee. No maida, no refined sugar.",
    "shortDescription": "Nutritious laddus packed with mixed dry fruits and nuts.",
    "price": 399,
    "originalPrice": 470,
    "discount": 15,
    "images": [
      "/images/products/dry-fruit-laddu.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 65,
    "rating": 4.8,
    "numReviews": 143,
    "weight": "400g",
    "ingredients": "Almonds, Cashews, Walnuts, Raisins, Dates, Jaggery, Ghee, Cardamom",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "dry-fruit-laddu",
      "sweets",
      "healthy",
      "jaggery",
      "nuts"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-34",
    "name": "Traditional Boondi Laddu",
    "slug": "traditional-boondi-laddu",
    "description": "Fried chickpea flour boondi soaked in warm sugar syrup and shaped into generous round laddus. Speckled with cloves, cardamom, and raisins. The classic wedding sweet.",
    "shortDescription": "Crispy boondi bound in sugar syrup — a wedding favourite.",
    "price": 249,
    "originalPrice": 299,
    "discount": 17,
    "images": [
      "/images/products/traditional-boondi-laddu.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 90,
    "rating": 4.7,
    "numReviews": 211,
    "weight": "500g",
    "ingredients": "Chickpea Flour, Sugar, Ghee, Cardamom, Raisins, Cloves",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "boondi-laddu",
      "laddu",
      "sweets",
      "wedding",
      "traditional"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-35",
    "name": "Rava Laddu",
    "slug": "rava-laddu",
    "description": "Fine semolina roasted in ghee and mixed with desiccated coconut, sugar, cardamom, cashews, and raisins. Shaped into perfect rounds. Quick to make, impossible to resist.",
    "shortDescription": "Semolina laddus with coconut — a South Indian classic.",
    "price": 199,
    "originalPrice": 240,
    "discount": 17,
    "images": [
      "/images/products/rava-laddu.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 80,
    "rating": 4.5,
    "numReviews": 134,
    "weight": "400g",
    "ingredients": "Semolina, Coconut, Sugar, Ghee, Cardamom, Cashew, Raisins",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "rava-laddu",
      "semolina",
      "sweets",
      "south-indian"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-36",
    "name": "Cashew Coconut Burfi",
    "slug": "cashew-coconut-burfi",
    "description": "A beautiful two-layered burfi combining a rich cashew base with a fragrant coconut top layer, set with cardamom and ghee. Elegant and delicious.",
    "shortDescription": "Delicate cashew and coconut layered barfi.",
    "price": 349,
    "originalPrice": 410,
    "discount": 15,
    "images": [
      "/images/products/cashew-coconut-burfi.jpg"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 55,
    "rating": 4.7,
    "numReviews": 98,
    "weight": "400g",
    "ingredients": "Cashew, Coconut, Sugar, Ghee, Cardamom",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "65g",
      "fat": "18g"
    },
    "tags": [
      "cashew-coconut-burfi",
      "sweets",
      "cashew",
      "coconut"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-37",
    "name": "Premium Turmeric Powder",
    "slug": "premium-turmeric-powder",
    "description": "Stone-ground from premium Erode turmeric rhizomes — known for the highest curcumin content. Deep golden colour, earthy aroma. Tested free of adulterants.",
    "shortDescription": "High-curcumin turmeric powder from Erode, Tamil Nadu.",
    "price": 89,
    "originalPrice": 110,
    "discount": 19,
    "images": [
      "/images/products/premium-turmeric-powder.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 200,
    "rating": 4.8,
    "numReviews": 289,
    "weight": "200g",
    "ingredients": "100% Turmeric (Curcuma longa)",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "turmeric",
      "haldi",
      "spices",
      "premium",
      "organic"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-38",
    "name": "Andhra Red Chilli Powder",
    "slug": "andhra-red-chilli-powder",
    "description": "Made from legendary Guntur Sannam red chillies sun-dried and stone-ground. Deep red colour, high heat, and a complex smoky undertone.",
    "shortDescription": "Fiery Guntur chilli powder — the backbone of Andhra cuisine.",
    "price": 99,
    "originalPrice": 120,
    "discount": 18,
    "images": [
      "/images/products/andhra-red-chilli-powder.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 150,
    "rating": 4.7,
    "numReviews": 198,
    "weight": "200g",
    "ingredients": "100% Guntur Red Chilli",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "red-chilli",
      "guntur",
      "andhra",
      "spices",
      "hot"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-39",
    "name": "Fresh Coriander Powder",
    "slug": "fresh-coriander-powder",
    "description": "Carefully selected coriander seeds roasted lightly and stone-ground to preserve the warm, citrusy aroma. Freshly packed in airtight pouches.",
    "shortDescription": "Sweet and citrusy coriander seed powder.",
    "price": 75,
    "originalPrice": 90,
    "discount": 17,
    "images": [
      "/images/products/fresh-coriander-powder.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 180,
    "rating": 4.6,
    "numReviews": 134,
    "weight": "200g",
    "ingredients": "100% Coriander Seeds",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "coriander",
      "dhania",
      "spices",
      "fresh"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-40",
    "name": "Roasted Cumin Powder",
    "slug": "roasted-cumin-powder",
    "description": "Whole cumin seeds dry-roasted on a griddle until aromatic and then stone-ground. The roasting intensifies the nutty, earthy flavour exponentially.",
    "shortDescription": "Dry-roasted cumin seeds ground for deep smoky flavour.",
    "price": 85,
    "originalPrice": 100,
    "discount": 15,
    "images": [
      "/images/products/roasted-cumin-powder.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 160,
    "rating": 4.7,
    "numReviews": 167,
    "weight": "200g",
    "ingredients": "100% Roasted Cumin Seeds",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "cumin",
      "jeera",
      "roasted",
      "spices"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-41",
    "name": "Homemade Garam Masala",
    "slug": "homemade-garam-masala",
    "description": "A complex blend of 14 whole spices including cardamom, cinnamon, cloves, and black pepper. Ground fresh in small batches to maximise aroma and flavour.",
    "shortDescription": "Aromatic whole-spice blend ground fresh in small batches.",
    "price": 129,
    "originalPrice": 155,
    "discount": 17,
    "images": [
      "/images/products/homemade-garam-masala.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 120,
    "rating": 4.8,
    "numReviews": 223,
    "weight": "100g",
    "ingredients": "Cardamom, Cinnamon, Cloves, Black Pepper, Cumin, Coriander, Bay Leaf, Nutmeg",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "garam-masala",
      "spices",
      "blend",
      "aromatic",
      "homemade"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-42",
    "name": "Authentic Sambar Powder",
    "slug": "authentic-sambar-powder",
    "description": "A classic Karnataka-Tamil Nadu blend of roasted coriander, dried red chilli, chana dal, urad dal, curry leaves, and coconut. Makes authentic sambar every time.",
    "shortDescription": "Traditional South Indian sambar masala blend.",
    "price": 115,
    "originalPrice": 140,
    "discount": 18,
    "images": [
      "/images/products/authentic-sambar-powder.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 140,
    "rating": 4.8,
    "numReviews": 256,
    "weight": "200g",
    "ingredients": "Coriander Seeds, Red Chilli, Chana Dal, Urad Dal, Curry Leaves, Coconut, Turmeric, Pepper",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "sambar-powder",
      "south-indian",
      "spices",
      "blend"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-43",
    "name": "Traditional Rasam Powder",
    "slug": "traditional-rasam-powder",
    "description": "A pungent blend dominated by black pepper, dried red chillies, cumin, and coriander with a hint of turmeric. Makes a soul-warming rasam in minutes.",
    "shortDescription": "Peppery South Indian rasam spice blend.",
    "price": 99,
    "originalPrice": 120,
    "discount": 18,
    "images": [
      "/images/products/traditional-rasam-powder.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 130,
    "rating": 4.7,
    "numReviews": 178,
    "weight": "200g",
    "ingredients": "Black Pepper, Red Chilli, Cumin, Coriander, Turmeric, Curry Leaves",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "rasam-powder",
      "south-indian",
      "spices",
      "pepper"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-44",
    "name": "Hyderabadi Biryani Masala",
    "slug": "hyderabadi-biryani-masala",
    "description": "A premium blend replicating the flavours of Hyderabad biryani — with whole-dried rose petals, stone flower, mace, nutmeg, and saffron-yellow colour.",
    "shortDescription": "Signature Hyderabadi-style biryani spice blend.",
    "price": 149,
    "originalPrice": 180,
    "discount": 17,
    "images": [
      "/images/products/hyderabadi-biryani-masala.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 100,
    "rating": 4.8,
    "numReviews": 312,
    "weight": "100g",
    "ingredients": "Bay Leaf, Cardamom, Cloves, Cinnamon, Mace, Nutmeg, Star Anise, Stone Flower, Dried Rose Petals",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "biryani-masala",
      "hyderabadi",
      "spices",
      "premium"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-45",
    "name": "South Indian Chicken Masala",
    "slug": "south-indian-chicken-masala",
    "description": "A full-bodied masala blend designed for authentic Chettinad and coastal chicken curries — with generous black pepper, kalpasi, marathi mokku, and dried chilli.",
    "shortDescription": "Bold South Indian spice blend for chicken curries.",
    "price": 135,
    "originalPrice": 160,
    "discount": 16,
    "images": [
      "/images/products/south-indian-chicken-masala.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 110,
    "rating": 4.7,
    "numReviews": 189,
    "weight": "100g",
    "ingredients": "Black Pepper, Kalpasi, Red Chilli, Coriander, Cumin, Fennel, Curry Leaves",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "chicken-masala",
      "south-indian",
      "spices",
      "chettinad"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-46",
    "name": "Ground Black Pepper Powder",
    "slug": "ground-black-pepper-powder",
    "description": "Premium Malabar Tellicherry peppercorns with maximum piperine content, stone-ground to a coarse powder that retains the pungent heat and complex aroma.",
    "shortDescription": "Malabar black pepper — freshly stone-ground.",
    "price": 119,
    "originalPrice": 140,
    "discount": 15,
    "images": [
      "/images/products/ground-black-pepper-powder.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 145,
    "rating": 4.7,
    "numReviews": 145,
    "weight": "100g",
    "ingredients": "100% Black Peppercorns (Malabar)",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "black-pepper",
      "malabar",
      "spices",
      "pepper"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-47",
    "name": "Kitchen King Masala",
    "slug": "kitchen-king-masala",
    "description": "A versatile all-purpose spice blend that elevates any vegetable, dal, or paneer dish. Contains 21 carefully blended spices for a well-rounded, warm flavour profile.",
    "shortDescription": "All-purpose masala for everyday North Indian cooking.",
    "price": 109,
    "originalPrice": 130,
    "discount": 16,
    "images": [
      "/images/products/kitchen-king-masala.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 160,
    "rating": 4.6,
    "numReviews": 198,
    "weight": "100g",
    "ingredients": "Coriander, Cumin, Turmeric, Red Chilli, Garam Masala, Dried Mango, Salt",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "kitchen-king",
      "all-purpose",
      "spices",
      "masala"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-48",
    "name": "Classic Chaat Masala",
    "slug": "classic-chaat-masala",
    "description": "The iconic tangy-salty-spicy blend that transforms any snack into street food. Contains black salt, dried mango powder, cumin, dried ginger, and asafoetida.",
    "shortDescription": "Tangy, salty, pungent chaat seasoning blend.",
    "price": 79,
    "originalPrice": 95,
    "discount": 17,
    "images": [
      "/images/products/classic-chaat-masala.jpg"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 200,
    "rating": 4.7,
    "numReviews": 234,
    "weight": "100g",
    "ingredients": "Black Salt, Dried Mango Powder, Cumin, Red Chilli, Dried Ginger, Asafoetida",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "45g",
      "fat": "12g"
    },
    "tags": [
      "chaat-masala",
      "tangy",
      "spices",
      "street-food"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-49",
    "name": "Traditional Ven Pongal Ready to Eat",
    "slug": "traditional-ven-pongal-ready-to-eat",
    "description": "Ready-to-eat Ven Pongal made with parboiled rice, split moong dal, generous ghee, black pepper, and cumin. Heat and eat in minutes.",
    "shortDescription": "Authentic South Indian rice and moong dal comfort dish.",
    "price": 79,
    "originalPrice": 99,
    "discount": 20,
    "images": [
      "/images/products/traditional-ven-pongal-ready-to-eat.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 150,
    "rating": 4.5,
    "numReviews": 98,
    "weight": "300g",
    "ingredients": "Parboiled Rice, Moong Dal, Ghee, Black Pepper, Cumin, Curry Leaves, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "pongal",
      "ready-to-eat",
      "south-indian",
      "breakfast"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-50",
    "name": "South Indian Vegetable Upma",
    "slug": "south-indian-vegetable-upma",
    "description": "Roasted semolina cooked with onions, carrots, peas, curry leaves, and mustard seeds. Ready in 5 minutes — just add hot water or microwave.",
    "shortDescription": "Fluffy semolina upma with vegetables — just heat and eat.",
    "price": 69,
    "originalPrice": 89,
    "discount": 22,
    "images": [
      "/images/products/south-indian-vegetable-upma.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 180,
    "rating": 4.4,
    "numReviews": 112,
    "weight": "250g",
    "ingredients": "Semolina, Onion, Carrot, Peas, Mustard Seeds, Curry Leaves, Oil, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "upma",
      "ready-to-eat",
      "south-indian",
      "breakfast",
      "vegetables"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-51",
    "name": "Instant Poha Breakfast Mix",
    "slug": "instant-poha-breakfast-mix",
    "description": "Thin poha pre-seasoned with turmeric, mustard seeds, curry leaves, and peanuts. Just add water and heat. A beloved Indian breakfast from Maharashtra.",
    "shortDescription": "Classic flattened rice dish — ready in 5 minutes.",
    "price": 65,
    "originalPrice": 85,
    "discount": 24,
    "images": [
      "/images/products/instant-poha-breakfast-mix.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 200,
    "rating": 4.5,
    "numReviews": 134,
    "weight": "250g",
    "ingredients": "Flattened Rice, Peanuts, Onion, Mustard Seeds, Curry Leaves, Turmeric, Oil, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "poha",
      "ready-to-eat",
      "breakfast",
      "maharashtra",
      "instant"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-52",
    "name": "Soft Idli Instant Mix",
    "slug": "soft-idli-instant-mix",
    "description": "Pre-fermented and spray-dried idli batter mix. Just add water, let rest 10 minutes, and steam for perfect idlis every time. No overnight soaking needed.",
    "shortDescription": "Just add water for fluffy, spongy South Indian idlis.",
    "price": 75,
    "originalPrice": 95,
    "discount": 21,
    "images": [
      "/images/products/soft-idli-instant-mix.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 160,
    "rating": 4.6,
    "numReviews": 189,
    "weight": "500g",
    "ingredients": "Parboiled Rice, Urad Dal, Fenugreek Seeds, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "idli",
      "ready-to-eat",
      "south-indian",
      "breakfast",
      "instant"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-53",
    "name": "Crispy Dosa Instant Mix",
    "slug": "crispy-dosa-instant-mix",
    "description": "Specially formulated dosa batter mix that gives you thin, crispy, golden dosas every time. Just mix, rest 5 minutes, and spread on a hot tawa.",
    "shortDescription": "Make perfect crispy dosas at home in minutes.",
    "price": 79,
    "originalPrice": 99,
    "discount": 20,
    "images": [
      "/images/products/crispy-dosa-instant-mix.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 155,
    "rating": 4.6,
    "numReviews": 201,
    "weight": "500g",
    "ingredients": "Rice, Urad Dal, Fenugreek, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "dosa",
      "ready-to-eat",
      "south-indian",
      "breakfast",
      "instant"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-54",
    "name": "Andhra Pulihora Rice Mix",
    "slug": "andhra-pulihora-rice-mix",
    "description": "Authentic Andhra-style pulihora paste made from tamarind, red chilli, peanuts, and a classic tempering. Mix with cooked rice for an instant festival meal.",
    "shortDescription": "Ready-to-use Andhra tamarind rice seasoning paste.",
    "price": 89,
    "originalPrice": 110,
    "discount": 19,
    "images": [
      "/images/products/andhra-pulihora-rice-mix.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 120,
    "rating": 4.7,
    "numReviews": 143,
    "weight": "200g",
    "ingredients": "Tamarind, Red Chilli, Peanuts, Sesame Seeds, Mustard Seeds, Curry Leaves, Oil, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "pulihora",
      "tamarind-rice",
      "andhra",
      "ready-to-eat"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-55",
    "name": "Tangy Lemon Rice Mix",
    "slug": "tangy-lemon-rice-mix",
    "description": "A tangy and bright lemon rice seasoning mix with dehydrated lemon, turmeric, mustard seeds, and roasted peanuts. Mix with cooked rice for a quick meal.",
    "shortDescription": "Instant lemon rice seasoning — bright and zesty.",
    "price": 69,
    "originalPrice": 85,
    "discount": 19,
    "images": [
      "/images/products/tangy-lemon-rice-mix.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 140,
    "rating": 4.5,
    "numReviews": 98,
    "weight": "100g",
    "ingredients": "Dehydrated Lemon, Turmeric, Mustard Seeds, Peanuts, Curry Leaves, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "lemon-rice",
      "ready-to-eat",
      "south-indian",
      "tangy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-56",
    "name": "Traditional Tamarind Rice Mix",
    "slug": "traditional-tamarind-rice-mix",
    "description": "A thick concentrated paste of tamarind, sesame seeds, peanuts, and traditional tempering spices. Makes authentic puliyodharai as served in South Indian temples.",
    "shortDescription": "Temple-style tamarind rice paste — authentic and bold.",
    "price": 85,
    "originalPrice": 105,
    "discount": 19,
    "images": [
      "/images/products/traditional-tamarind-rice-mix.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 130,
    "rating": 4.7,
    "numReviews": 156,
    "weight": "200g",
    "ingredients": "Tamarind, Sesame Seeds, Peanuts, Red Chilli, Mustard Seeds, Curry Leaves, Oil, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "tamarind-rice",
      "puliyodharai",
      "south-indian",
      "ready-to-eat"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-57",
    "name": "Instant Medu Vada Mix",
    "slug": "instant-medu-vada-mix",
    "description": "A finely ground urad dal mix with black pepper, curry leaves, and coconut. Just add water, shape, and fry for perfect crispy-outside, fluffy-inside medu vadas.",
    "shortDescription": "Fluffy South Indian urad dal vada mix — just add water.",
    "price": 89,
    "originalPrice": 110,
    "discount": 19,
    "images": [
      "/images/products/instant-medu-vada-mix.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 100,
    "rating": 4.4,
    "numReviews": 87,
    "weight": "500g",
    "ingredients": "Urad Dal, Black Pepper, Curry Leaves, Coconut, Ginger, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "medu-vada",
      "vada",
      "south-indian",
      "ready-to-eat",
      "instant"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-58",
    "name": "Instant Ragi Dosa Mix",
    "slug": "instant-ragi-dosa-mix",
    "description": "Finger millet (ragi) based instant dosa mix that produces thin crispy crepes with a nutty flavour. Gluten-free, high in calcium, and packed with nutrition.",
    "shortDescription": "Healthy finger millet dosa mix — nutritious and crispy.",
    "price": 85,
    "originalPrice": 105,
    "discount": 19,
    "images": [
      "/images/products/instant-ragi-dosa-mix.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 110,
    "rating": 4.5,
    "numReviews": 112,
    "weight": "500g",
    "ingredients": "Ragi Flour, Rice Flour, Urad Dal, Cumin, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "ragi-dosa",
      "ragi",
      "healthy",
      "ready-to-eat",
      "gluten-free"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-59",
    "name": "Instant Khichdi Mix",
    "slug": "instant-khichdi-mix",
    "description": "Pre-mixed rice and moong dal khichdi with turmeric, cumin, and ghee flavouring. Ready in 15 minutes. The ultimate comfort food when you need something light and wholesome.",
    "shortDescription": "One-pot comfort food — rice and lentils with spices.",
    "price": 75,
    "originalPrice": 95,
    "discount": 21,
    "images": [
      "/images/products/instant-khichdi-mix.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 140,
    "rating": 4.4,
    "numReviews": 76,
    "weight": "500g",
    "ingredients": "Rice, Moong Dal, Turmeric, Cumin, Salt, Ghee Powder",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "khichdi",
      "ready-to-eat",
      "comfort-food",
      "healthy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-60",
    "name": "South Indian Breakfast Combo",
    "slug": "south-indian-breakfast-combo",
    "description": "Everything you need for a complete South Indian breakfast — idli mix, dosa mix, and sambar powder in one convenient pack. Serves 4 people.",
    "shortDescription": "Idli + Dosa + Sambar mix — complete breakfast kit.",
    "price": 199,
    "originalPrice": 249,
    "discount": 20,
    "images": [
      "/images/products/south-indian-breakfast-combo.jpg"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 85,
    "rating": 4.8,
    "numReviews": 134,
    "weight": "1kg",
    "ingredients": "Idli Mix, Dosa Mix, Sambar Powder, Coconut Chutney Powder",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "11g",
      "carbs": "62g",
      "fat": "8g"
    },
    "tags": [
      "breakfast-combo",
      "south-indian",
      "ready-to-eat",
      "combo",
      "value"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-61",
    "name": "Premium California Almonds",
    "slug": "premium-california-almonds",
    "description": "Carefully selected extra-large California almonds with thin skin, mild sweetness, and satisfying crunch. Rich in Vitamin E, magnesium, and healthy fats.",
    "shortDescription": "Large, crunchy California almonds — fresh and natural.",
    "price": 399,
    "originalPrice": 480,
    "discount": 17,
    "images": [
      "/images/products/premium-california-almonds.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 120,
    "rating": 4.8,
    "numReviews": 312,
    "weight": "500g",
    "ingredients": "100% Natural Almonds",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "almonds",
      "badam",
      "dry-fruits",
      "california",
      "healthy"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-62",
    "name": "Whole Cashew Nuts",
    "slug": "whole-cashew-nuts",
    "description": "Premium W180 grade whole cashews — the largest and finest cashew grade. Grown in Goa and Kerala, these are buttery, mild, and supremely satisfying.",
    "shortDescription": "Plump whole W180 cashews — premium grade.",
    "price": 499,
    "originalPrice": 599,
    "discount": 17,
    "images": [
      "/images/products/whole-cashew-nuts.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 100,
    "rating": 4.9,
    "numReviews": 278,
    "weight": "500g",
    "ingredients": "100% Natural Cashew Nuts",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "cashews",
      "kaju",
      "dry-fruits",
      "whole",
      "premium"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-63",
    "name": "Roasted Salted Pistachios",
    "slug": "roasted-salted-pistachios",
    "description": "Authentic Iranian pistachios roasted to bring out their natural sweetness and coated with sea salt. In-shell for maximum freshness and snacking fun.",
    "shortDescription": "Perfectly roasted in-shell pistachios with sea salt.",
    "price": 549,
    "originalPrice": 649,
    "discount": 15,
    "images": [
      "/images/products/roasted-salted-pistachios.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 80,
    "rating": 4.7,
    "numReviews": 189,
    "weight": "500g",
    "ingredients": "Pistachios, Sea Salt",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "pistachios",
      "pista",
      "dry-fruits",
      "roasted",
      "salted"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-64",
    "name": "Premium Walnut Kernels",
    "slug": "premium-walnut-kernels",
    "description": "Light-coloured, freshly shelled walnut halves from the Kashmir Valley. High in Omega-3 fatty acids and antioxidants. Great for cooking, baking, and snacking.",
    "shortDescription": "Fresh Kashmiri walnut halves — brain food.",
    "price": 449,
    "originalPrice": 540,
    "discount": 17,
    "images": [
      "/images/products/premium-walnut-kernels.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 90,
    "rating": 4.7,
    "numReviews": 145,
    "weight": "500g",
    "ingredients": "100% Natural Walnut Kernels",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "walnuts",
      "dry-fruits",
      "kashmir",
      "omega-3",
      "healthy"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-65",
    "name": "Golden Raisins",
    "slug": "golden-raisins",
    "description": "Juicy, plump golden raisins made from premium Nashik Thompson seedless grapes. Naturally sweet with no added sugar. Perfect for cooking, baking, and snacking.",
    "shortDescription": "Plump, sweet golden raisins from Nashik vineyards.",
    "price": 199,
    "originalPrice": 240,
    "discount": 17,
    "images": [
      "/images/products/golden-raisins.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 160,
    "rating": 4.6,
    "numReviews": 167,
    "weight": "500g",
    "ingredients": "100% Natural Raisins",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "raisins",
      "kishmish",
      "dry-fruits",
      "nashik",
      "sweet"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-66",
    "name": "Soft Seedless Dates",
    "slug": "soft-seedless-dates",
    "description": "Premium soft seedless dates with a caramel-like sweetness and chewy texture. High in natural sugars, fibre, and minerals. A natural energy booster.",
    "shortDescription": "Juicy Medjool-style seedless dates — nature's candy.",
    "price": 299,
    "originalPrice": 360,
    "discount": 17,
    "images": [
      "/images/products/soft-seedless-dates.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 130,
    "rating": 4.8,
    "numReviews": 198,
    "weight": "500g",
    "ingredients": "100% Natural Dates (Seedless)",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "dates",
      "khajoor",
      "dry-fruits",
      "natural",
      "sweet"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-67",
    "name": "Dried Turkish Figs",
    "slug": "dried-turkish-figs",
    "description": "Naturally sun-dried Turkish figs with no added sugar or preservatives. Rich in fibre, iron, and calcium. Soft, sweet, and lightly chewy with tiny crunchy seeds.",
    "shortDescription": "Soft and sweet dried figs — naturally preserved.",
    "price": 349,
    "originalPrice": 420,
    "discount": 17,
    "images": [
      "/images/products/dried-turkish-figs.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 80,
    "rating": 4.6,
    "numReviews": 112,
    "weight": "400g",
    "ingredients": "100% Natural Dried Figs",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "figs",
      "anjeer",
      "dry-fruits",
      "turkish",
      "natural"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-68",
    "name": "Dried Cranberries",
    "slug": "dried-cranberries",
    "description": "Premium dried cranberries with just a touch of natural cane sugar to balance the tartness. Rich in antioxidants and Vitamin C. Great in salads, trail mixes, and bakes.",
    "shortDescription": "Tart and sweet dried cranberries for snacking and baking.",
    "price": 299,
    "originalPrice": 360,
    "discount": 17,
    "images": [
      "/images/products/dried-cranberries.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 110,
    "rating": 4.5,
    "numReviews": 98,
    "weight": "400g",
    "ingredients": "Cranberries, Cane Sugar, Sunflower Oil",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "cranberries",
      "dry-fruits",
      "antioxidant",
      "healthy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-69",
    "name": "Dried Apricots",
    "slug": "dried-apricots",
    "description": "Sun-dried Turkish apricots with a beautiful amber colour and a balance of sweetness and tartness. High in beta-carotene, potassium, and iron.",
    "shortDescription": "Naturally dried apricots — tangy, chewy, and nutritious.",
    "price": 329,
    "originalPrice": 395,
    "discount": 17,
    "images": [
      "/images/products/dried-apricots.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 100,
    "rating": 4.6,
    "numReviews": 134,
    "weight": "400g",
    "ingredients": "100% Natural Dried Apricots",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "apricots",
      "khumani",
      "dry-fruits",
      "natural",
      "healthy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-70",
    "name": "Premium Mixed Dry Fruits",
    "slug": "premium-mixed-dry-fruits",
    "description": "A curated mix of almonds, cashews, walnuts, pistachios, raisins, and dried cranberries in one pack. Perfect for daily nutrition or gifting.",
    "shortDescription": "A premium assortment of 6 dry fruits and nuts.",
    "price": 599,
    "originalPrice": 720,
    "discount": 17,
    "images": [
      "/images/products/premium-mixed-dry-fruits.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 90,
    "rating": 4.8,
    "numReviews": 223,
    "weight": "500g",
    "ingredients": "Almonds, Cashews, Walnuts, Pistachios, Raisins, Cranberries",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "mixed-dry-fruits",
      "dry-fruits",
      "assorted",
      "premium",
      "gift"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-71",
    "name": "Roasted Almonds",
    "slug": "roasted-almonds",
    "description": "Premium California almonds dry-roasted without any oil or added salt. Roasting enhances the natural nuttiness while keeping the nutritional profile intact.",
    "shortDescription": "Lightly roasted almonds with a satisfying crunch.",
    "price": 449,
    "originalPrice": 530,
    "discount": 15,
    "images": [
      "/images/products/roasted-almonds.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 110,
    "rating": 4.7,
    "numReviews": 156,
    "weight": "500g",
    "ingredients": "100% Dry-Roasted Almonds",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "roasted-almonds",
      "almonds",
      "dry-fruits",
      "healthy"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-72",
    "name": "Classic Salted Cashews",
    "slug": "classic-salted-cashews",
    "description": "Whole W240 cashews lightly roasted and seasoned with just the right amount of sea salt. Buttery, creamy, and absolutely irresistible.",
    "shortDescription": "Lightly salted whole cashews — the perfect snack.",
    "price": 449,
    "originalPrice": 540,
    "discount": 17,
    "images": [
      "/images/products/classic-salted-cashews.jpg"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 120,
    "rating": 4.8,
    "numReviews": 234,
    "weight": "500g",
    "ingredients": "Cashew Nuts, Sea Salt",
    "nutrition": {
      "calories": "580 kcal",
      "protein": "18g",
      "carbs": "22g",
      "fat": "48g"
    },
    "tags": [
      "salted-cashews",
      "cashews",
      "dry-fruits",
      "roasted",
      "salted"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-73",
    "name": "South Indian Filter Coffee",
    "slug": "south-indian-filter-coffee",
    "description": "The authentic 80:20 blend of Coorg Arabica and Chicory, roasted dark and ground medium-fine. Makes the perfect decoction for filter coffee with frothy milk.",
    "shortDescription": "Traditional South Indian coffee blend — 80:20 coffee-chicory.",
    "price": 249,
    "originalPrice": 299,
    "discount": 17,
    "images": [
      "/images/products/south-indian-filter-coffee.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 150,
    "rating": 4.9,
    "numReviews": 389,
    "weight": "250g",
    "ingredients": "Arabica Coffee (80%), Chicory (20%)",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "filter-coffee",
      "south-indian",
      "beverages",
      "coffee",
      "traditional"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-74",
    "name": "Premium Instant Coffee",
    "slug": "premium-instant-coffee",
    "description": "Premium freeze-dried 100% Arabica instant coffee with full-bodied flavour and rich aroma. Dissolves instantly in hot or cold water. No chicory, no fillers.",
    "shortDescription": "Freeze-dried pure Arabica instant coffee.",
    "price": 349,
    "originalPrice": 420,
    "discount": 17,
    "images": [
      "/images/products/premium-instant-coffee.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 120,
    "rating": 4.7,
    "numReviews": 198,
    "weight": "100g",
    "ingredients": "100% Arabica Coffee (Freeze-Dried)",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "instant-coffee",
      "arabica",
      "beverages",
      "coffee",
      "premium"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-75",
    "name": "Traditional Masala Chai",
    "slug": "traditional-masala-chai",
    "description": "A classic Indian masala chai blend featuring Assam CTC tea, dried ginger, green cardamom, cinnamon, cloves, and black pepper. Just boil with milk and sugar.",
    "shortDescription": "Aromatic spiced tea blend with ginger and cardamom.",
    "price": 149,
    "originalPrice": 180,
    "discount": 17,
    "images": [
      "/images/products/traditional-masala-chai.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 180,
    "rating": 4.8,
    "numReviews": 312,
    "weight": "250g",
    "ingredients": "Assam CTC Tea, Ginger, Cardamom, Cinnamon, Cloves, Black Pepper",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "masala-chai",
      "tea",
      "beverages",
      "spiced",
      "traditional"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-76",
    "name": "Organic Green Tea",
    "slug": "organic-green-tea",
    "description": "Single-origin organic green tea from certified Darjeeling estates. Light-bodied, grassy, and sweet with a clean finish. Rich in catechins and antioxidants.",
    "shortDescription": "Certified organic Darjeeling green tea leaves.",
    "price": 199,
    "originalPrice": 240,
    "discount": 17,
    "images": [
      "/images/products/organic-green-tea.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 140,
    "rating": 4.6,
    "numReviews": 167,
    "weight": "100g",
    "ingredients": "100% Organic Green Tea Leaves (Darjeeling)",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "green-tea",
      "organic",
      "beverages",
      "darjeeling",
      "healthy"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-77",
    "name": "Fresh Ginger Tea",
    "slug": "fresh-ginger-tea",
    "description": "Strong Assam CTC tea blended with generous amounts of dried ginger for a warming, invigorating brew. Great for immunity and digestion.",
    "shortDescription": "Zesty ginger-infused Assam tea for cold days.",
    "price": 129,
    "originalPrice": 155,
    "discount": 17,
    "images": [
      "/images/products/fresh-ginger-tea.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 160,
    "rating": 4.5,
    "numReviews": 134,
    "weight": "250g",
    "ingredients": "Assam CTC Tea, Dried Ginger",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "ginger-tea",
      "tea",
      "beverages",
      "ginger",
      "warming"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-78",
    "name": "Cardamom Elaichi Tea",
    "slug": "cardamom-elaichi-tea",
    "description": "Premium Assam tea blended with hand-cracked green cardamom pods for a royal, fragrant brew. Adds natural sweetness without sugar.",
    "shortDescription": "Fragrant elaichi-infused tea — sweet and aromatic.",
    "price": 139,
    "originalPrice": 165,
    "discount": 16,
    "images": [
      "/images/products/cardamom-elaichi-tea.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 155,
    "rating": 4.7,
    "numReviews": 178,
    "weight": "250g",
    "ingredients": "Assam CTC Tea, Green Cardamom",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "elaichi-tea",
      "cardamom",
      "beverages",
      "tea",
      "aromatic"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-79",
    "name": "Instant Badam Milk Mix",
    "slug": "instant-badam-milk-mix",
    "description": "A rich blend of almond powder, saffron, cardamom, and dry-milk solids. Just add hot or cold milk for an instant royal badam milk drink. Nutritious and delicious.",
    "shortDescription": "Almond-saffron milk mix — ready in seconds.",
    "price": 249,
    "originalPrice": 299,
    "discount": 17,
    "images": [
      "/images/products/instant-badam-milk-mix.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 130,
    "rating": 4.8,
    "numReviews": 212,
    "weight": "200g",
    "ingredients": "Almond Powder, Dry Milk Solids, Sugar, Saffron, Cardamom",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "badam-milk",
      "almond",
      "beverages",
      "instant",
      "nutritious"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-80",
    "name": "Rose Milk Drink Mix",
    "slug": "rose-milk-drink-mix",
    "description": "Vibrant pink rose milk mix with real rose extract and a touch of cardamom. Mix with cold milk for an irresistibly pretty and fragrant drink.",
    "shortDescription": "Fragrant rose-flavoured milk syrup mix.",
    "price": 99,
    "originalPrice": 120,
    "discount": 18,
    "images": [
      "/images/products/rose-milk-drink-mix.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 160,
    "rating": 4.5,
    "numReviews": 134,
    "weight": "200g",
    "ingredients": "Sugar, Rose Extract, Cardamom, Natural Pink Colour",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "rose-milk",
      "beverages",
      "rose",
      "drink",
      "sweet"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-81",
    "name": "Natural Mango Drink",
    "slug": "natural-mango-drink",
    "description": "Made with sun-ripened Alphonso mango pulp powder. Just mix with water or soda for a refreshing, intensely mango-flavoured drink.",
    "shortDescription": "Alphonso mango drink mix — taste of summer.",
    "price": 119,
    "originalPrice": 145,
    "discount": 18,
    "images": [
      "/images/products/natural-mango-drink.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 150,
    "rating": 4.6,
    "numReviews": 189,
    "weight": "200g",
    "ingredients": "Alphonso Mango Pulp Powder, Sugar, Citric Acid",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "mango-drink",
      "beverages",
      "mango",
      "summer",
      "refreshing"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-82",
    "name": "Traditional Kokum Sharbat",
    "slug": "traditional-kokum-sharbat",
    "description": "Made from sun-dried Garcinia indica (kokum) from the Konkan coast. Rich in hydroxycitric acid and antioxidants. A perfect summer cooler that aids digestion.",
    "shortDescription": "Natural Konkan kokum sharbat — sweet, tangy, cooling.",
    "price": 149,
    "originalPrice": 180,
    "discount": 17,
    "images": [
      "/images/products/traditional-kokum-sharbat.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 120,
    "rating": 4.7,
    "numReviews": 145,
    "weight": "500ml",
    "ingredients": "Kokum Extract, Sugar, Rock Salt, Cumin",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "kokum",
      "sharbat",
      "beverages",
      "summer",
      "konkan"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-83",
    "name": "Fresh Lemon Drink Mix",
    "slug": "fresh-lemon-drink-mix",
    "description": "A refreshing lemon drink mix with real lemon juice powder, black salt, roasted cumin, and mint. Makes authentic nimbu pani instantly — just add water.",
    "shortDescription": "Instant nimbu pani mix with a squeeze of real lemon.",
    "price": 89,
    "originalPrice": 110,
    "discount": 19,
    "images": [
      "/images/products/fresh-lemon-drink-mix.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 180,
    "rating": 4.4,
    "numReviews": 112,
    "weight": "150g",
    "ingredients": "Lemon Juice Powder, Sugar, Black Salt, Roasted Cumin, Dried Mint",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "lemon-drink",
      "nimbu-pani",
      "beverages",
      "refreshing",
      "summer"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-84",
    "name": "Golden Turmeric Latte Mix",
    "slug": "golden-turmeric-latte-mix",
    "description": "A warming blend of high-curcumin turmeric, ashwagandha, black pepper, ginger, and cinnamon. Just add to warm milk for a nourishing, anti-inflammatory golden latte.",
    "shortDescription": "Haldi doodh mix — the original golden milk.",
    "price": 199,
    "originalPrice": 240,
    "discount": 17,
    "images": [
      "/images/products/golden-turmeric-latte-mix.jpg"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 130,
    "rating": 4.7,
    "numReviews": 167,
    "weight": "150g",
    "ingredients": "Turmeric, Ashwagandha, Black Pepper, Ginger, Cinnamon, Cardamom",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "2g",
      "carbs": "18g",
      "fat": "1g"
    },
    "tags": [
      "turmeric-latte",
      "haldi-doodh",
      "beverages",
      "healthy",
      "golden-milk"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-85",
    "name": "South Indian Snack Gift Box",
    "slug": "south-indian-snack-gift-box",
    "description": "Curated selection of the finest South Indian snacks — murukku, banana chips, mixture, and ribbon pakoda — packed in an elegant gift box. Perfect for any occasion.",
    "shortDescription": "A beautiful box of authentic South Indian snacks.",
    "price": 499,
    "originalPrice": 599,
    "discount": 17,
    "images": [
      "/images/products/south-indian-snack-gift-box.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 60,
    "rating": 4.8,
    "numReviews": 134,
    "weight": "800g",
    "ingredients": "Assorted South Indian Snacks",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "gift-box",
      "snacks",
      "south-indian",
      "gift-packs",
      "festival"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-86",
    "name": "Premium Traditional Sweet Box",
    "slug": "premium-traditional-sweet-box",
    "description": "A premium selection of 6 traditional Indian sweets — kaju katli, laddu, peda, mysore pak, burfi, and halwa — packed in a beautiful gift box with festive wrapping.",
    "shortDescription": "Assortment of handmade Indian sweets in an elegant box.",
    "price": 799,
    "originalPrice": 950,
    "discount": 16,
    "images": [
      "/images/products/premium-traditional-sweet-box.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 50,
    "rating": 4.9,
    "numReviews": 189,
    "weight": "1kg",
    "ingredients": "Assorted Traditional Indian Sweets",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "sweet-box",
      "sweets",
      "gift-packs",
      "premium",
      "festival"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-87",
    "name": "Festival Celebration Gift Box",
    "slug": "festival-celebration-gift-box",
    "description": "A complete festive hamper with Indian sweets, premium snacks, masala chai, and filter coffee — all packed in a beautiful gold gift box. Suitable for Diwali, Dussehra, and Pongal.",
    "shortDescription": "Everything for celebrating festivals — snacks, sweets and more.",
    "price": 1199,
    "originalPrice": 1450,
    "discount": 17,
    "images": [
      "/images/products/festival-celebration-gift-box.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 40,
    "rating": 4.9,
    "numReviews": 112,
    "weight": "1.5kg",
    "ingredients": "Assorted Indian Sweets, Snacks, Tea, Coffee",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "festival-box",
      "gift-packs",
      "diwali",
      "celebration",
      "hamper"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-88",
    "name": "Authentic Pickle Collection",
    "slug": "authentic-pickle-collection",
    "description": "Three iconic pickles in one gift set — Andhra Avakaya, Gongura Pachadi, and Lemon Pickle — each in 250g jars, packed in a branded wooden crate.",
    "shortDescription": "A trio of South India's most beloved pickles.",
    "price": 499,
    "originalPrice": 599,
    "discount": 17,
    "images": [
      "/images/products/authentic-pickle-collection.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 55,
    "rating": 4.8,
    "numReviews": 98,
    "weight": "750g",
    "ingredients": "Avakaya Pickle, Gongura Pachadi, Lemon Pickle",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "pickle-collection",
      "pickles",
      "gift-packs",
      "andhra",
      "authentic"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-89",
    "name": "Premium Dry Fruit Gift Box",
    "slug": "premium-dry-fruit-gift-box",
    "description": "An opulent dry fruit gift box containing premium California almonds, whole cashews, pistachios, walnut kernels, soft dates, and golden raisins in a velvet-lined box.",
    "shortDescription": "Luxury assortment of premium nuts and dry fruits.",
    "price": 999,
    "originalPrice": 1199,
    "discount": 17,
    "images": [
      "/images/products/premium-dry-fruit-gift-box.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 45,
    "rating": 4.9,
    "numReviews": 156,
    "weight": "1kg",
    "ingredients": "Almonds, Cashews, Pistachios, Walnuts, Dates, Raisins",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "dry-fruit-gift",
      "dry-fruits",
      "gift-packs",
      "luxury",
      "premium"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-90",
    "name": "Tea and Snacks Combo Box",
    "slug": "tea-and-snacks-combo-box",
    "description": "A delightful combination of masala chai, filter coffee, and cardamom tea paired with banana chips, murukku, and boondi. The ideal gift for the snack-and-chai lover.",
    "shortDescription": "Perfect tea-time gift — assorted teas with crispy snacks.",
    "price": 599,
    "originalPrice": 720,
    "discount": 17,
    "images": [
      "/images/products/tea-and-snacks-combo-box.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 55,
    "rating": 4.7,
    "numReviews": 87,
    "weight": "900g",
    "ingredients": "Assorted Teas, Assorted Snacks",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "tea-snacks",
      "gift-packs",
      "combo",
      "tea",
      "snacks"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-91",
    "name": "Traditional Indian Food Hamper",
    "slug": "traditional-indian-food-hamper",
    "description": "Comprehensive food hamper with spices, pickles, sweets, snacks, and beverages — everything needed to stock a traditional Indian pantry. Packaged in a woven bamboo basket.",
    "shortDescription": "A complete traditional Indian pantry in one hamper.",
    "price": 1499,
    "originalPrice": 1799,
    "discount": 17,
    "images": [
      "/images/products/traditional-indian-food-hamper.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 30,
    "rating": 4.9,
    "numReviews": 78,
    "weight": "2kg",
    "ingredients": "Assorted Spices, Pickles, Sweets, Snacks, Beverages",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "food-hamper",
      "gift-packs",
      "traditional",
      "complete",
      "pantry"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-92",
    "name": "Festive Diwali Celebration Box",
    "slug": "festive-diwali-celebration-box",
    "description": "A specially curated Diwali gift box with assorted sweets, premium snacks, dry fruits, and a set of decorative diyas — all in a premium gold-foil gift box.",
    "shortDescription": "Diwali special gift box with sweets, snacks and diyas.",
    "price": 1299,
    "originalPrice": 1550,
    "discount": 16,
    "images": [
      "/images/products/festive-diwali-celebration-box.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 35,
    "rating": 4.9,
    "numReviews": 134,
    "weight": "1.5kg",
    "ingredients": "Assorted Sweets, Snacks, Dry Fruits",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "diwali",
      "festival",
      "gift-packs",
      "celebration",
      "festive"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "isNewArrival": false
  },
  {
    "_id": "p-93",
    "name": "Family Snack Combo Pack",
    "slug": "family-snack-combo-pack",
    "description": "A large family snack combo with murukku, banana chips, mixture, peanuts, and boondi — enough for the whole family. Great for house parties and movie nights.",
    "shortDescription": "Value snack pack for the whole family.",
    "price": 449,
    "originalPrice": 540,
    "discount": 17,
    "images": [
      "/images/products/family-snack-combo-pack.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 70,
    "rating": 4.6,
    "numReviews": 89,
    "weight": "1kg",
    "ingredients": "Assorted Indian Snacks",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "family-pack",
      "snacks",
      "gift-packs",
      "combo",
      "value"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-94",
    "name": "Premium Indian Food Gift Hamper",
    "slug": "premium-indian-food-gift-hamper",
    "description": "A high-end gift hamper featuring premium sweets, artisanal snacks, specialty spices, and signature beverages — handpicked and packed in a luxury gift box with satin ribbon.",
    "shortDescription": "Premium curated Indian food hamper for special occasions.",
    "price": 1999,
    "originalPrice": 2399,
    "discount": 17,
    "images": [
      "/images/products/premium-indian-food-gift-hamper.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 25,
    "rating": 4.9,
    "numReviews": 67,
    "weight": "2.5kg",
    "ingredients": "Assorted Premium Indian Foods",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "premium-hamper",
      "gift-packs",
      "luxury",
      "premium",
      "special-occasion"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "isNewArrival": true
  },
  {
    "_id": "p-95",
    "name": "Corporate Food Gift Box",
    "slug": "corporate-food-gift-box",
    "description": "A sophisticated corporate gift box with filter coffee, masala chai, premium dry fruits, and artisan sweets — branded with your company name. Minimum order 10 units.",
    "shortDescription": "Professional corporate gifting — elegant and tasteful.",
    "price": 799,
    "originalPrice": 950,
    "discount": 16,
    "images": [
      "/images/products/corporate-food-gift-box.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 40,
    "rating": 4.7,
    "numReviews": 45,
    "weight": "1kg",
    "ingredients": "Coffee, Tea, Dry Fruits, Sweets",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "corporate-gift",
      "gift-packs",
      "corporate",
      "professional",
      "bulk"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "isNewArrival": false
  },
  {
    "_id": "p-96",
    "name": "Indian Food Tasting Collection",
    "slug": "indian-food-tasting-collection",
    "description": "A delightful tasting collection with small quantities of 12 iconic Indian products — from Andhra pickles to Mysore pak to filter coffee. The perfect introduction to authentic Indian flavours.",
    "shortDescription": "A sampler of iconic Indian foods — perfect for food lovers.",
    "price": 699,
    "originalPrice": 849,
    "discount": 18,
    "images": [
      "/images/products/indian-food-tasting-collection.jpg"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 45,
    "rating": 4.8,
    "numReviews": 56,
    "weight": "1.2kg",
    "ingredients": "Assorted Indian Foods (12 varieties)",
    "nutrition": {
      "calories": "450 kcal",
      "protein": "9g",
      "carbs": "52g",
      "fat": "22g"
    },
    "tags": [
      "tasting-collection",
      "gift-packs",
      "sampler",
      "variety",
      "introduction"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "isNewArrival": true
  }
];
