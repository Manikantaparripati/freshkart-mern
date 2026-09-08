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
    "name": "Butter Murukku (Chakli)",
    "slug": "butter-murukku-chakli",
    "description": "Crispy, golden spiral snack crafted with roasted rice flour, creamy white butter, and aromatic cumin seeds. Handcrafted following generations-old South Indian festival recipes.",
    "shortDescription": "Melt-in-mouth traditional spiral snack made with rice flour and pure butter.",
    "price": 139,
    "originalPrice": 160,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
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
    "ingredients": "Rice Flour, Urad Dal, Pure White Butter, Cumin Seeds, White Sesame, Asafoetida, Rock Salt, Cold-Pressed Groundnut Oil",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "7.2g",
      "carbs": "61g",
      "fat": "23g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "murukku",
      "chakli",
      "snacks",
      "south-indian",
      "butter",
      "crunchy",
      "tea-time"
    ]
  },
  {
    "_id": "p-2",
    "name": "Spicy Masala Coated Peanuts",
    "slug": "spicy-masala-coated-peanuts",
    "description": "Plump premium groundnuts individually enveloped in a spiced chickpea batter, fried crisp and seasoned with tangy amchur, Kashmiri chilli and curry leaf powder.",
    "shortDescription": "Crunchy roasted peanuts enrobed in a fiery gram flour & chaat spice crust.",
    "price": 119,
    "originalPrice": 140,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 80,
    "rating": 4.7,
    "numReviews": 95,
    "weight": "250g",
    "ingredients": "Peanuts, Gram Flour (Besan), Rice Flour, Red Chilli Powder, Chaat Masala, Curry Leaves, Garlic, Edible Vegetable Oil, Salt",
    "nutrition": {
      "calories": "540 kcal",
      "protein": "24g",
      "carbs": "26g",
      "fat": "38g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "peanuts",
      "masala peanuts",
      "snacks",
      "namkeen",
      "spicy",
      "protein"
    ]
  },
  {
    "_id": "p-3",
    "name": "Authentic Kerala Banana Chips",
    "slug": "authentic-kerala-banana-chips",
    "description": "Harvested from certified groves in Wayanad, raw Nendran bananas are sliced paper-thin and kettle-fried in pure coconut oil with sea salt and turmeric.",
    "shortDescription": "Wafer-thin Nendran banana slices fried in pure cold-pressed coconut oil.",
    "price": 159,
    "originalPrice": 185,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 90,
    "rating": 4.9,
    "numReviews": 245,
    "weight": "250g",
    "ingredients": "Raw Nendran Bananas, Pure Cold-Pressed Coconut Oil, Turmeric, Sea Salt",
    "nutrition": {
      "calories": "515 kcal",
      "protein": "2.8g",
      "carbs": "59g",
      "fat": "29g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "banana chips",
      "kerala",
      "coconut oil",
      "snacks",
      "chips",
      "crispy"
    ]
  },
  {
    "_id": "p-4",
    "name": "Haldiram Style Special Aloo Bhujia",
    "slug": "special-aloo-bhujia",
    "description": "Fine noodles crafted from mashed mountain potatoes, dew gram flour and gram flour, tossed with sun-dried mint powder, black salt, and mild red chillies.",
    "shortDescription": "Classic crisp potato sev laced with refreshing mint and warm spices.",
    "price": 99,
    "originalPrice": 120,
    "discount": 17,
    "images": [
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 110,
    "rating": 4.6,
    "numReviews": 180,
    "weight": "200g",
    "ingredients": "Dehydrated Potato Flakes, Gram Flour, Moth Flour, Mint, Cumin, Black Pepper, Red Chilli, Salt, Vegetable Oil",
    "nutrition": {
      "calories": "530 kcal",
      "protein": "8.5g",
      "carbs": "49g",
      "fat": "33g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "bhujia",
      "aloo bhujia",
      "namkeen",
      "snacks",
      "haldiram",
      "sev"
    ]
  },
  {
    "_id": "p-5",
    "name": "Spicy Kara Boondi with Curry Leaves",
    "slug": "spicy-kara-boondi",
    "description": "Tiny golden spheres of spiced besan batter fried to airy perfection, blended with crunchy fried cashew bits, roasted peanuts, garlic cloves, and crisp curry leaves.",
    "shortDescription": "Crispy fried gram flour droplets tossed with roasted peanuts and garlic.",
    "price": 129,
    "originalPrice": 150,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 55,
    "rating": 4.7,
    "numReviews": 88,
    "weight": "250g",
    "ingredients": "Gram Flour, Peanuts, Cashew Nuts, Curry Leaves, Crushed Garlic, Red Chilli Powder, Salt, Vegetable Oil",
    "nutrition": {
      "calories": "520 kcal",
      "protein": "11g",
      "carbs": "46g",
      "fat": "32g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "kara boondi",
      "boondi",
      "namkeen",
      "snacks",
      "raita"
    ]
  },
  {
    "_id": "p-6",
    "name": "South Indian Royal Special Mixture",
    "slug": "south-indian-special-mixture",
    "description": "The definitive tea-time companion. Combines fine sev, roasted peanuts, cashews, puffed rice flakes, crisp boondi, and curry leaves in balanced ratios.",
    "shortDescription": "A classic medley of omapodi, boondi, ribbon pakoda, and fried nuts.",
    "price": 149,
    "originalPrice": 175,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 70,
    "rating": 4.8,
    "numReviews": 132,
    "weight": "350g",
    "ingredients": "Gram Flour, Rice Flour, Peanuts, Cashews, Poha, Curry Leaves, Asafoetida, Chilli Powder, Salt, Edible Oil",
    "nutrition": {
      "calories": "505 kcal",
      "protein": "10.2g",
      "carbs": "52g",
      "fat": "28g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "mixture",
      "namkeen",
      "snacks",
      "south-indian",
      "omapodi"
    ]
  },
  {
    "_id": "p-7",
    "name": "Crispy Ribbon Pakoda (Nada)",
    "slug": "crispy-ribbon-pakoda",
    "description": "Golden, ribbon-thin fritters with a distinct melt-in-mouth crunch. Made with freshly ground roasted gram flour, sesame seeds, and tempered with asafoetida.",
    "shortDescription": "Broad ribbon-shaped festive crisps seasoned with garlic and cumin.",
    "price": 135,
    "originalPrice": 155,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 45,
    "rating": 4.6,
    "numReviews": 74,
    "weight": "250g",
    "ingredients": "Rice Flour, Fried Gram Flour, White Sesame Seeds, Cumin, Red Chilli Powder, Pure Butter, Salt, Oil",
    "nutrition": {
      "calories": "475 kcal",
      "protein": "6.5g",
      "carbs": "58g",
      "fat": "24g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "ribbon pakoda",
      "nada",
      "snacks",
      "crunchy",
      "diwali"
    ]
  },
  {
    "_id": "p-8",
    "name": "Roasted Spiced Chana Dal",
    "slug": "roasted-spiced-chana-dal",
    "description": "Protein-packed split Bengal gram, oil-roasted until ultra-crunchy and spiced with tangy amchur, black salt, and roasted cumin powder.",
    "shortDescription": "High-protein split yellow chickpeas roasted with dry mango and pepper.",
    "price": 109,
    "originalPrice": 130,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 85,
    "rating": 4.5,
    "numReviews": 61,
    "weight": "250g",
    "ingredients": "Split Bengal Gram (Chana Dal), Black Salt, Dry Mango Powder, Cumin, Red Chilli, Vegetable Oil",
    "nutrition": {
      "calories": "430 kcal",
      "protein": "19g",
      "carbs": "54g",
      "fat": "15g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "chana dal",
      "roasted",
      "healthy snacks",
      "protein",
      "namkeen"
    ]
  },
  {
    "_id": "p-9",
    "name": "Spicy Corn Flakes Mixture",
    "slug": "spicy-corn-flakes-mixture",
    "description": "Light, airy corn flakes flash-fried and tossed with sweet sultana raisins, roasted cashews, curry leaves, and a harmonious sweet-savory spice blend.",
    "shortDescription": "Sun-crisped corn flakes tossed with raisins, cashews, and mild spices.",
    "price": 139,
    "originalPrice": 160,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 50,
    "rating": 4.7,
    "numReviews": 92,
    "weight": "300g",
    "ingredients": "Corn Flakes, Raisins, Cashews, Peanuts, Fennel Seeds, Red Chilli, Chaat Masala, Salt, Sugar, Edible Oil",
    "nutrition": {
      "calories": "460 kcal",
      "protein": "6g",
      "carbs": "64g",
      "fat": "20g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "corn flakes mixture",
      "farsan",
      "snacks",
      "sweet and spicy",
      "tea-time"
    ]
  },
  {
    "_id": "p-10",
    "name": "Bangalore Special Spicy Nippattu",
    "slug": "bangalore-spicy-nippattu",
    "description": "Crisp, flat savoury discs handcrafted with rice flour, crushed roasted peanuts, fried gram, and sesame. A quintessential Bangalore bakery delicacy.",
    "shortDescription": "Rustic Karnataka flat crackers with peanuts, sesame seeds, and curry leaves.",
    "price": 145,
    "originalPrice": 170,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 40,
    "rating": 4.8,
    "numReviews": 104,
    "weight": "250g",
    "ingredients": "Rice Flour, Maida, Roasted Peanuts, Roasted Gram, White Sesame, Curry Leaves, Red Chilli Flakes, Pure Ghee, Salt, Oil",
    "nutrition": {
      "calories": "490 kcal",
      "protein": "8g",
      "carbs": "56g",
      "fat": "26g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "nippattu",
      "karnataka",
      "bangalore",
      "snacks",
      "crackers"
    ]
  },
  {
    "_id": "p-11",
    "name": "Andhra Rice Chekkalu (Thattai)",
    "slug": "andhra-rice-chekkalu",
    "description": "Traditional Telugu savoury snack hand-pressed thin and fried until golden. Speckled with soaked Bengal gram and fresh ginger for distinct warmth and crunch.",
    "shortDescription": "Crunchy pressed rice discs infused with soaked chana dal and ginger.",
    "price": 139,
    "originalPrice": 165,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 55,
    "rating": 4.7,
    "numReviews": 83,
    "weight": "300g",
    "ingredients": "Rice Flour, Chana Dal, Ginger Paste, Green Chillies, Curry Leaves, Cumin Seeds, Salt, Vegetable Oil",
    "nutrition": {
      "calories": "470 kcal",
      "protein": "7.5g",
      "carbs": "60g",
      "fat": "22g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "chekkalu",
      "thattai",
      "andhra",
      "snacks",
      "traditional"
    ]
  },
  {
    "_id": "p-12",
    "name": "Rajasthani Crispy Methi Mathri",
    "slug": "rajasthani-crispy-methi-mathri",
    "description": "Traditional Marwari spiced puff-pastry style crackers made with whole wheat flour, kasuri methi, ajwain (carom seeds), and cracked peppercorns.",
    "shortDescription": "Flaky savoury crackers scented with organic dried fenugreek leaves.",
    "price": 149,
    "originalPrice": 175,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-1",
      "name": "Snacks",
      "slug": "snacks"
    },
    "stock": 60,
    "rating": 4.8,
    "numReviews": 116,
    "weight": "300g",
    "ingredients": "Wheat Flour, Dried Fenugreek Leaves (Kasuri Methi), Ajwain, Black Pepper, Desi Ghee, Sea Salt, Refined Oil",
    "nutrition": {
      "calories": "495 kcal",
      "protein": "8g",
      "carbs": "54g",
      "fat": "27g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "mathri",
      "methi mathri",
      "rajasthani",
      "chai time",
      "snacks"
    ]
  },
  {
    "_id": "p-13",
    "name": "Andhra Avakaya Raw Mango Pickle",
    "slug": "andhra-avakaya-mango-pickle",
    "description": "The undisputed monarch of South Indian pickles. Cut raw sour country mangoes cured with pungent mustard powder, fiery Guntur red chillies, and cold-pressed gingelly oil.",
    "shortDescription": "Fiery, tangy raw mango pickle aged in cold-pressed sesame oil.",
    "price": 249,
    "originalPrice": 299,
    "discount": 17,
    "images": [
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 50,
    "rating": 4.9,
    "numReviews": 312,
    "weight": "500g",
    "ingredients": "Raw Sour Mangoes, Cold-Pressed Gingelly (Sesame) Oil, Mustard Seed Powder, Red Chilli Powder, Sea Salt, Fenugreek, Asafoetida",
    "nutrition": {
      "calories": "165 kcal",
      "protein": "1.8g",
      "carbs": "7g",
      "fat": "15g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "mango pickle",
      "avakaya",
      "andhra pickle",
      "pickles",
      "spicy",
      "traditional"
    ]
  },
  {
    "_id": "p-14",
    "name": "Traditional Gongura Pachadi (Sorrel Leaf Pickle)",
    "slug": "traditional-gongura-pachadi",
    "description": "Known as the Andhra Shakambari delicacy. Tangy, mineral-rich gongura leaves slow-roasted and ground with aromatic garlic cloves, coriander seeds, and dry red chillies.",
    "shortDescription": "Tangy red sorrel leaves slow-simmered with garlic and spices.",
    "price": 219,
    "originalPrice": 260,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 42,
    "rating": 4.8,
    "numReviews": 184,
    "weight": "350g",
    "ingredients": "Gongura (Red Sorrel Leaves), Sesame Oil, Whole Garlic, Red Chillies, Salt, Coriander, Fenugreek, Cumin",
    "nutrition": {
      "calories": "142 kcal",
      "protein": "2.1g",
      "carbs": "6g",
      "fat": "12g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "gongura",
      "pickle",
      "andhra",
      "sorrel",
      "pickles",
      "garlic"
    ]
  },
  {
    "_id": "p-15",
    "name": "Sun-Dried Spicy Lemon Pickle (Nimbu Achar)",
    "slug": "sun-dried-spicy-lemon-pickle",
    "description": "Handpicked thin-skinned juicy lemons aged under the hot sun for 21 days with rock salt until their rinds turn tender, then finished with carom seeds and mustard oil.",
    "shortDescription": "Thin-skinned Kagzi lemons sun-cured with ajwain and Kashmiri chilli.",
    "price": 189,
    "originalPrice": 220,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 60,
    "rating": 4.7,
    "numReviews": 122,
    "weight": "400g",
    "ingredients": "Kagzi Lemons, Mustard Oil, Rock Salt, Kashmiri Red Chilli, Ajwain, Fenugreek, Turmeric",
    "nutrition": {
      "calories": "115 kcal",
      "protein": "1.2g",
      "carbs": "8g",
      "fat": "9g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "lemon pickle",
      "nimbu achar",
      "pickles",
      "tangy",
      "digestive"
    ]
  },
  {
    "_id": "p-16",
    "name": "Desi Mustard Garlic Pickle (Lahsun Achar)",
    "slug": "desi-mustard-garlic-pickle",
    "description": "Bold, robust, and digestive. Whole peeled small desi garlic cloves pickled in cold-pressed mustard oil with crushed yellow mustard seeds, turmeric, and dried mango powder.",
    "shortDescription": "Whole peeled country garlic cloves cured in pungent yellow mustard.",
    "price": 229,
    "originalPrice": 270,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 55,
    "rating": 4.8,
    "numReviews": 148,
    "weight": "350g",
    "ingredients": "Peeled Garlic Cloves, Mustard Oil, Yellow Mustard Seeds, Red Chilli, Amchur, Asafoetida, Rock Salt",
    "nutrition": {
      "calories": "155 kcal",
      "protein": "3.4g",
      "carbs": "11g",
      "fat": "11g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "garlic pickle",
      "lahsun achar",
      "pickles",
      "mustard oil",
      "immunity"
    ]
  },
  {
    "_id": "p-17",
    "name": "Spicy Tomato Thokku Pickle",
    "slug": "spicy-tomato-thokku-pickle",
    "description": "A traditional Tamil Nadu delight. Country plum tomatoes slow-cooked to a rich paste with tamarind pulp, roasted fenugreek powder, and generous sesame oil tempering.",
    "shortDescription": "Farm-fresh country tomatoes reduced with tamarind and sesame oil.",
    "price": 199,
    "originalPrice": 230,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 70,
    "rating": 4.8,
    "numReviews": 95,
    "weight": "400g",
    "ingredients": "Ripe Country Tomatoes, Gingelly Oil, Tamarind, Mustard Seeds, Fenugreek, Red Chilli Powder, Salt",
    "nutrition": {
      "calories": "130 kcal",
      "protein": "1.6g",
      "carbs": "9g",
      "fat": "10g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "tomato thokku",
      "pickle",
      "tamil nadu",
      "dosa dip",
      "pickles"
    ]
  },
  {
    "_id": "p-18",
    "name": "Allam Pachadi (Fresh Ginger Pickle)",
    "slug": "allam-pachadi-ginger-pickle",
    "description": "The quintessential accompaniment for MLA Pesarattu. Fresh ginger roots blended with aged tamarind and country jaggery for an electrifying sweet, sour, and fiery balance.",
    "shortDescription": "Sweet and fiery Telugu ginger pickle crafted with pure organic jaggery.",
    "price": 210,
    "originalPrice": 245,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 48,
    "rating": 4.7,
    "numReviews": 110,
    "weight": "350g",
    "ingredients": "Fresh Mountain Ginger, Organic Jaggery, Tamarind, Red Chilli Powder, Mustard Seeds, Sesame Oil, Salt",
    "nutrition": {
      "calories": "180 kcal",
      "protein": "1.5g",
      "carbs": "26g",
      "fat": "8g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "ginger pickle",
      "allam pachadi",
      "andhra",
      "jaggery",
      "pickles"
    ]
  },
  {
    "_id": "p-19",
    "name": "Grandma Style Mixed Vegetable Pickle",
    "slug": "mixed-vegetable-pickle",
    "description": "A colorful medley of fresh winter vegetables including crunchy carrots, cauliflower florets, raw mango, and turnip cured with whole spices and mustard oil.",
    "shortDescription": "Carrots, cauliflower, raw mango and green chillies in spiced oil.",
    "price": 185,
    "originalPrice": 215,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 65,
    "rating": 4.6,
    "numReviews": 87,
    "weight": "400g",
    "ingredients": "Carrot, Cauliflower, Raw Mango, Green Chillies, Ginger, Mustard Seeds, Turmeric, Mustard Oil, Salt",
    "nutrition": {
      "calories": "125 kcal",
      "protein": "1.4g",
      "carbs": "8g",
      "fat": "10g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "mixed pickle",
      "vegetable pickle",
      "north indian",
      "achar",
      "pickles"
    ]
  },
  {
    "_id": "p-20",
    "name": "Stuffed Green Chilli Pickle (Hari Mirch Achar)",
    "slug": "stuffed-green-chilli-pickle",
    "description": "Crisp green chillies slit and hand-stuffed with aromatic roasted fennel seeds, yellow mustard, dried mango powder, and seasoned with cold-pressed mustard oil.",
    "shortDescription": "Fat Rajasthani green chillies stuffed with fennel and mustard powder.",
    "price": 195,
    "originalPrice": 225,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 52,
    "rating": 4.8,
    "numReviews": 103,
    "weight": "350g",
    "ingredients": "Green Chillies, Mustard Seeds, Fennel (Saunf), Fenugreek, Amchur, Mustard Oil, Asafoetida, Salt",
    "nutrition": {
      "calories": "138 kcal",
      "protein": "2g",
      "carbs": "7g",
      "fat": "11g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "green chilli",
      "hari mirch",
      "spicy pickle",
      "rajasthani",
      "pickles"
    ]
  },
  {
    "_id": "p-21",
    "name": "Usirikaya Achar (Wild Amla / Gooseberry Pickle)",
    "slug": "wild-amla-gooseberry-pickle",
    "description": "Wholesome wild Indian gooseberries (amla) lightly steamed and infused with cold-pressed sesame oil, methi powder, and rock salt. Exceptionally rich in natural vitamin C.",
    "shortDescription": "Vitamin C rich wild gooseberries aged with fenugreek and red chilli.",
    "price": 219,
    "originalPrice": 255,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 38,
    "rating": 4.9,
    "numReviews": 96,
    "weight": "350g",
    "ingredients": "Whole Indian Gooseberries (Amla), Sesame Oil, Red Chilli Powder, Mustard, Fenugreek, Rock Salt",
    "nutrition": {
      "calories": "120 kcal",
      "protein": "1.1g",
      "carbs": "10g",
      "fat": "9g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "amla pickle",
      "usirikaya",
      "gooseberry",
      "vitamin c",
      "healthy",
      "pickles"
    ]
  },
  {
    "_id": "p-22",
    "name": "Raw Tamarind (Chintakaya) Pickle",
    "slug": "raw-tamarind-chintakaya-pickle",
    "description": "An ancient Rayalaseema specialty. Fresh green raw tamarind pods pounded in stone mortar with sea salt and fiery green chillies, then preserved with a garlic mustard tadka.",
    "shortDescription": "Sour raw tamarind pods pounded with fresh green chillies and salt.",
    "price": 209,
    "originalPrice": 240,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 45,
    "rating": 4.7,
    "numReviews": 78,
    "weight": "350g",
    "ingredients": "Raw Green Tamarind, Green Chillies, Garlic, Mustard Seeds, Turmeric, Sesame Oil, Salt",
    "nutrition": {
      "calories": "135 kcal",
      "protein": "1.5g",
      "carbs": "12g",
      "fat": "9g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "tamarind pickle",
      "chintakaya",
      "rayalaseema",
      "sour",
      "pickles"
    ]
  },
  {
    "_id": "p-23",
    "name": "Pandu Mirapakaya (Ripe Red Chilli) Pickle",
    "slug": "pandu-mirapakaya-red-chilli-pickle",
    "description": "Vibrant crimson pickle crafted from seasonal ripe red chillies (Pandu Mirchi) grown in Guntur, stone-pounded with aged tamarind, garlic cloves, and pure gingelly oil.",
    "shortDescription": "Fresh fleshy red chillies stone-ground with tamarind and garlic.",
    "price": 239,
    "originalPrice": 280,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 40,
    "rating": 4.9,
    "numReviews": 165,
    "weight": "400g",
    "ingredients": "Fresh Ripe Red Chillies, Tamarind, Garlic, Fenugreek Powder, Mustard, Sesame Oil, Rock Salt",
    "nutrition": {
      "calories": "150 kcal",
      "protein": "2g",
      "carbs": "8g",
      "fat": "12g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "red chilli pickle",
      "pandu mirchi",
      "andhra",
      "spicy",
      "pickles"
    ]
  },
  {
    "_id": "p-24",
    "name": "Tender Drumstick (Munakkaya) Pickle",
    "slug": "tender-drumstick-munakkaya-pickle",
    "description": "Young tender drumstick batons boiled to tenderness and cured in a deeply spiced gravy of ground mustard, sour raw mango extract, and cold-pressed sesame oil.",
    "shortDescription": "Succulent drumstick segments pickled in tangy andhra spice gravy.",
    "price": 225,
    "originalPrice": 260,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-2",
      "name": "Pickles",
      "slug": "pickles"
    },
    "stock": 35,
    "rating": 4.6,
    "numReviews": 59,
    "weight": "350g",
    "ingredients": "Tender Drumsticks, Sesame Oil, Tamarind, Mustard Powder, Chilli Powder, Fenugreek, Salt",
    "nutrition": {
      "calories": "140 kcal",
      "protein": "2.2g",
      "carbs": "9g",
      "fat": "11g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "drumstick pickle",
      "munakkaya",
      "andhra",
      "unique",
      "pickles"
    ]
  },
  {
    "_id": "p-25",
    "name": "Artisanal Kaju Katli (Cashew Fudge)",
    "slug": "artisanal-kaju-katli",
    "description": "Iconic Indian diamond-cut confectionery made with 85% high-grade cashew nut paste and organic sugar syrup, lightly gilded with certified edible silver foil.",
    "shortDescription": "Diamond-cut fudge made from premium Goan cashews and pure desi ghee.",
    "price": 599,
    "originalPrice": 699,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 55,
    "rating": 4.9,
    "numReviews": 380,
    "weight": "500g",
    "ingredients": "Goan Cashew Nuts, Sulphur-Free Sugar, Water, Pure Desi Cow Ghee, Certified Silver Leaf",
    "nutrition": {
      "calories": "425 kcal",
      "protein": "9.5g",
      "carbs": "47g",
      "fat": "22g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "kaju katli",
      "cashew fudge",
      "mithai",
      "sweets",
      "diwali",
      "pure ghee"
    ]
  },
  {
    "_id": "p-26",
    "name": "Desi Ghee Motichoor Laddu",
    "slug": "desi-ghee-motichoor-laddu",
    "description": "Delicate, juicy droplets of besan fried in pure desi cow ghee, steeped in saffron cardamom syrup, and rolled with roasted melon seeds and pistachio slivers.",
    "shortDescription": "Tiny golden gram flour pearls fried in ghee and scented with saffron.",
    "price": 349,
    "originalPrice": 399,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599785209796-786432b228bc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 60,
    "rating": 4.8,
    "numReviews": 240,
    "weight": "400g",
    "ingredients": "Gram Flour, Pure Cow Ghee, Sugar, Saffron, Green Cardamom, Magaz (Melon Seeds), Pistachios",
    "nutrition": {
      "calories": "440 kcal",
      "protein": "5g",
      "carbs": "58g",
      "fat": "21g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "motichoor laddu",
      "laddu",
      "sweets",
      "ghee",
      "festival"
    ]
  },
  {
    "_id": "p-27",
    "name": "Slow-Roasted Besan Laddu with Dry Fruits",
    "slug": "slow-roasted-besan-laddu",
    "description": "Slow-roasted over low heat for 45 minutes until nutty and aromatic, combined with bura sugar, green cardamom powder, and generous slivers of roasted cashews and almonds.",
    "shortDescription": "Coarse gram flour roasted in golden ghee with crunchy almonds and cashews.",
    "price": 329,
    "originalPrice": 375,
    "discount": 12,
    "images": [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 50,
    "rating": 4.8,
    "numReviews": 165,
    "weight": "400g",
    "ingredients": "Coarse Gram Flour, Pure Desi Ghee, Khandsari Sugar, Cashews, Almonds, Cardamom",
    "nutrition": {
      "calories": "460 kcal",
      "protein": "8g",
      "carbs": "52g",
      "fat": "25g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "besan laddu",
      "laddu",
      "sweets",
      "traditional",
      "pure ghee"
    ]
  },
  {
    "_id": "p-28",
    "name": "Royal Mysore Pak (Pure Ghee)",
    "slug": "royal-mysore-pak-pure-ghee",
    "description": "The crowning glory of Karnataka confectionery. Fragrant roasted chickpea flour simmered in piping hot ghee until it achieves a heavenly porous texture that melts on the tongue.",
    "shortDescription": "Classic melt-in-mouth royal sweet soaked in pure clarified butter.",
    "price": 389,
    "originalPrice": 440,
    "discount": 12,
    "images": [
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 45,
    "rating": 4.9,
    "numReviews": 195,
    "weight": "400g",
    "ingredients": "Finely Sifted Besan, Pure Desi Ghee, Sugar, Cardamom Essence",
    "nutrition": {
      "calories": "515 kcal",
      "protein": "6g",
      "carbs": "51g",
      "fat": "31g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "mysore pak",
      "ghee mysore pak",
      "south indian",
      "sweets",
      "traditional"
    ]
  },
  {
    "_id": "p-29",
    "name": "Soft Mawa Gulab Jamun (Canned in Syrup)",
    "slug": "soft-mawa-gulab-jamun",
    "description": "Hand-rolled dumplings prepared from pure evaporated milk solids (khoya) and paneer, deep-fried golden brown and steeped in saffron and rose water infused sugar syrup.",
    "shortDescription": "Rich khoya dumplings soaked in fragrant rose and cardamom syrup.",
    "price": 269,
    "originalPrice": 310,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1599785209796-786432b228bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 75,
    "rating": 4.8,
    "numReviews": 215,
    "weight": "500g",
    "ingredients": "Khoya (Milk Solids), Chenna, Maida, Sugar, Saffron, Rose Water, Cardamom, Pure Ghee",
    "nutrition": {
      "calories": "380 kcal",
      "protein": "6.5g",
      "carbs": "56g",
      "fat": "14g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "gulab jamun",
      "sweets",
      "dessert",
      "mawa",
      "khoya"
    ]
  },
  {
    "_id": "p-30",
    "name": "Fresh Coconut Burfi (Nariyal Barfi)",
    "slug": "fresh-coconut-burfi",
    "description": "Juicy, soft sweet squares crafted from freshly grated coastal coconuts, concentrated whole milk, and fragrant cardamom, garnished with toasted pistachios.",
    "shortDescription": "Tender grated fresh coastal coconuts slow-cooked with milk and cardamom.",
    "price": 289,
    "originalPrice": 330,
    "discount": 12,
    "images": [
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 40,
    "rating": 4.7,
    "numReviews": 108,
    "weight": "400g",
    "ingredients": "Fresh Grated Coconut, Whole Milk, Sugar, Pure Ghee, Green Cardamom, Pistachio Slices",
    "nutrition": {
      "calories": "410 kcal",
      "protein": "5g",
      "carbs": "44g",
      "fat": "24g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "coconut burfi",
      "nariyal barfi",
      "sweets",
      "traditional"
    ]
  },
  {
    "_id": "p-31",
    "name": "Rich Badam Halwa with Kashmiri Saffron",
    "slug": "rich-badam-halwa-saffron",
    "description": "The pinnacle of festive Indian desserts. Soaked California almonds ground to a coarse paste, slow-cooked in pure cow ghee and enriched with Kashmiri saffron threads.",
    "shortDescription": "Decadent almond paste slow-cooked in pure cow ghee and saffron.",
    "price": 499,
    "originalPrice": 580,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 30,
    "rating": 5,
    "numReviews": 142,
    "weight": "300g",
    "ingredients": "California Almonds (Badam), Pure Cow Ghee, Sugar, Whole Milk, Kashmiri Saffron, Cardamom",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "11g",
      "carbs": "42g",
      "fat": "30g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "badam halwa",
      "almond",
      "saffron",
      "luxury sweets",
      "pure ghee"
    ]
  },
  {
    "_id": "p-32",
    "name": "Authentic Mathura Peda",
    "slug": "authentic-mathura-peda",
    "description": "Prepared in the historic tradition of Braj. Fresh khoya slow-roasted until deeply browned and caramelized, flavoured with mace and cardamom, and finished with fragrant sugar crystals.",
    "shortDescription": "Caramelized roasted khoya spheres dusted with fine boora sugar.",
    "price": 299,
    "originalPrice": 340,
    "discount": 12,
    "images": [
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 45,
    "rating": 4.8,
    "numReviews": 98,
    "weight": "400g",
    "ingredients": "Slow-Caramelized Khoya (Mawa), Boora Sugar, Cardamom, Nutmeg, Pure Ghee",
    "nutrition": {
      "calories": "395 kcal",
      "protein": "9g",
      "carbs": "50g",
      "fat": "18g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "peda",
      "mathura peda",
      "sweets",
      "prasad",
      "traditional"
    ]
  },
  {
    "_id": "p-33",
    "name": "Nutrient-Rich Dry Fruit & Nut Laddu (No Added Sugar)",
    "slug": "dry-fruit-nut-laddu-sugarfree",
    "description": "Guilt-free indulgence made without a grain of refined sugar. Bound naturally with Medjool date paste and filled with roasted almonds, cashews, pistachios, and chia seeds.",
    "shortDescription": "Naturally sweetened with Medjool dates and packed with premium nuts.",
    "price": 449,
    "originalPrice": 520,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 50,
    "rating": 4.9,
    "numReviews": 188,
    "weight": "400g",
    "ingredients": "Medjool Dates, Almonds, Cashews, Pistachios, Walnuts, Pure Cow Ghee, Cardamom",
    "nutrition": {
      "calories": "430 kcal",
      "protein": "11g",
      "carbs": "40g",
      "fat": "25g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": true,
    "tags": [
      "sugar free",
      "dry fruit laddu",
      "healthy sweets",
      "energy bite",
      "dates"
    ]
  },
  {
    "_id": "p-34",
    "name": "Kesar Elaichi Milk Peda",
    "slug": "kesar-elaichi-milk-peda",
    "description": "Silky smooth condensed milk fudge molded into traditional round pedas, topped with a saffron droplet and slivered green pistachios. Soft, milky, and comforting.",
    "shortDescription": "Tender milk fudge buttons infused with golden saffron and green cardamom.",
    "price": 310,
    "originalPrice": 350,
    "discount": 11,
    "images": [
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 45,
    "rating": 4.7,
    "numReviews": 82,
    "weight": "350g",
    "ingredients": "Condensed Milk, Khoya, Sugar, Saffron Extract, Green Cardamom, Ghee, Pistachio",
    "nutrition": {
      "calories": "390 kcal",
      "protein": "8.5g",
      "carbs": "52g",
      "fat": "16g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "kesar peda",
      "milk sweet",
      "peda",
      "sweets",
      "traditional"
    ]
  },
  {
    "_id": "p-35",
    "name": "Royal Andhra Boondi Laddu (Tirupati Style)",
    "slug": "royal-andhra-boondi-laddu",
    "description": "Inspired by sacred Temple prasad recipes. Large golden boondi pearls fried in cow ghee, blended with sugar syrup, cloves, nutmeg, edible camphor (pacha karpooram), and cashews.",
    "shortDescription": "Jumbo sweet boondi laddu with edible camphor, cloves, and dry fruits.",
    "price": 299,
    "originalPrice": 345,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599785209796-786432b228bc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 55,
    "rating": 4.8,
    "numReviews": 136,
    "weight": "400g",
    "ingredients": "Gram Flour, Pure Ghee, Sugar Syrup, Cashews, Raisins, Cloves, Edible Camphor, Cardamom",
    "nutrition": {
      "calories": "445 kcal",
      "protein": "6g",
      "carbs": "58g",
      "fat": "21g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "boondi laddu",
      "tirupati laddu",
      "sweets",
      "prasad",
      "temple recipe"
    ]
  },
  {
    "_id": "p-36",
    "name": "Fragrant Roasted Rava Laddu (Sooji Ladoo)",
    "slug": "roasted-rava-laddu-sooji",
    "description": "Fine Bombay semolina slow-roasted in pure ghee with desiccated coconut, powdered sugar, and cardamom, studded with golden raisins and crunchy cashew halves.",
    "shortDescription": "Roasted semolina balls enriched with coconut, ghee, and golden raisins.",
    "price": 279,
    "originalPrice": 320,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-3",
      "name": "Sweets",
      "slug": "sweets"
    },
    "stock": 50,
    "rating": 4.7,
    "numReviews": 76,
    "weight": "400g",
    "ingredients": "Roasted Semolina (Rava), Desiccated Coconut, Pure Cow Ghee, Sugar, Cardamom, Cashews, Raisins",
    "nutrition": {
      "calories": "420 kcal",
      "protein": "6g",
      "carbs": "56g",
      "fat": "19g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "rava laddu",
      "sooji laddu",
      "sweets",
      "traditional",
      "homestyle"
    ]
  },
  {
    "_id": "p-37",
    "name": "Alleppey High-Curcumin Pure Turmeric Powder",
    "slug": "alleppey-pure-turmeric-powder",
    "description": "Grown in the rich laterite soils of Alleppey. Golden-yellow turmeric roots naturally sun-cured and stone-ground to preserve volatile essential oils and high therapeutic curcumin content.",
    "shortDescription": "Sun-dried Kerala turmeric fingers ground fresh with guaranteed 5%+ curcumin.",
    "price": 135,
    "originalPrice": 155,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 120,
    "rating": 4.9,
    "numReviews": 290,
    "weight": "250g",
    "ingredients": "100% Pure Natural Alleppey Turmeric (Curcuma longa)",
    "nutrition": {
      "calories": "312 kcal",
      "protein": "9.7g",
      "carbs": "67g",
      "fat": "3.2g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "turmeric powder",
      "haldi",
      "curcumin",
      "spices",
      "organic",
      "immunity"
    ]
  },
  {
    "_id": "p-38",
    "name": "Guntur Teja Fiery Red Chilli Powder",
    "slug": "guntur-teja-red-chilli-powder",
    "description": "Stemless Guntur Teja chillies cold-ground under controlled temperatures to retain their natural deep red pungency, rich oleoresin, and fiery heat without artificial colours.",
    "shortDescription": "World-famous hot and vibrant red chilli powder from the fields of Guntur.",
    "price": 159,
    "originalPrice": 185,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 95,
    "rating": 4.8,
    "numReviews": 210,
    "weight": "250g",
    "ingredients": "100% Sun-Dried Guntur Teja Red Chillies",
    "nutrition": {
      "calories": "280 kcal",
      "protein": "12g",
      "carbs": "56g",
      "fat": "6g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "red chilli powder",
      "lal mirch",
      "guntur",
      "spices",
      "spicy",
      "cooking"
    ]
  },
  {
    "_id": "p-39",
    "name": "Roasted Coriander (Dhania) Powder",
    "slug": "roasted-coriander-dhania-powder",
    "description": "Selected coriander seeds from Rajasthan, gently pan-roasted to release floral essential oils before slow milling. Imparts thick body and subtle citrus aroma to Indian gravies.",
    "shortDescription": "Gently roasted green coriander seeds ground to aromatic perfection.",
    "price": 119,
    "originalPrice": 140,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 80,
    "rating": 4.7,
    "numReviews": 124,
    "weight": "250g",
    "ingredients": "100% Whole Roasted Coriander Seeds",
    "nutrition": {
      "calories": "298 kcal",
      "protein": "12.4g",
      "carbs": "55g",
      "fat": "17.8g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "dhania powder",
      "coriander",
      "spices",
      "curry powder"
    ]
  },
  {
    "_id": "p-40",
    "name": "Fragrant Cumin (Jeera) Powder",
    "slug": "fragrant-cumin-jeera-powder",
    "description": "Pungent, warm, and earthy. Dry-roasted small cumin seeds ground fresh in small batches. Indispensable for raitas, curries, buttermilk, and dal tadka.",
    "shortDescription": "Earthy Gujarat cumin seeds dry-roasted and freshly pulverised.",
    "price": 149,
    "originalPrice": 175,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 75,
    "rating": 4.8,
    "numReviews": 145,
    "weight": "200g",
    "ingredients": "100% Pure Roasted Cumin Seeds (Cuminum cyminum)",
    "nutrition": {
      "calories": "375 kcal",
      "protein": "17.8g",
      "carbs": "44g",
      "fat": "22g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "cumin powder",
      "jeera",
      "spices",
      "digestive",
      "tadka"
    ]
  },
  {
    "_id": "p-41",
    "name": "Stone-Ground Shahi Garam Masala (16 Spices)",
    "slug": "shahi-garam-masala-16-spices",
    "description": "An aromatic symphony of green and black cardamom, Ceylon cinnamon quills, star anise, mace, nutmeg, and stone flowers. Adds regal aroma to curries and biryanis.",
    "shortDescription": "Imperial royal spice blend of 16 whole roasted spices including mace & saffron.",
    "price": 199,
    "originalPrice": 235,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 85,
    "rating": 4.9,
    "numReviews": 260,
    "weight": "150g",
    "ingredients": "Coriander, Cumin, Black Cardamom, Green Cardamom, Cinnamon, Mace, Nutmeg, Star Anise, Black Pepper, Cloves, Bay Leaf, Caraway Seeds",
    "nutrition": {
      "calories": "310 kcal",
      "protein": "11g",
      "carbs": "44g",
      "fat": "14g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "garam masala",
      "shahi masala",
      "spices",
      "royal blend",
      "biryani"
    ]
  },
  {
    "_id": "p-42",
    "name": "Authentic Madras Sambar Powder",
    "slug": "authentic-madras-sambar-powder",
    "description": "Handcrafted according to heritage Tanjore recipes. Roasted toor dal, chana dal, whole coriander, fenugreek, and Byadgi chillies slow-ground for authentic hotel-style sambar.",
    "shortDescription": "Traditional Tamil Nadu sambar blend with roasted lentils and red chillies.",
    "price": 145,
    "originalPrice": 170,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 90,
    "rating": 4.8,
    "numReviews": 175,
    "weight": "250g",
    "ingredients": "Coriander, Red Chilli, Toor Dal, Chana Dal, Fenugreek, Cumin, Black Pepper, Turmeric, Asafoetida",
    "nutrition": {
      "calories": "335 kcal",
      "protein": "14g",
      "carbs": "51g",
      "fat": "9g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "sambar powder",
      "madras sambar",
      "south indian",
      "spices",
      "dal"
    ]
  },
  {
    "_id": "p-43",
    "name": "Heritage Udupi Rasam Powder",
    "slug": "heritage-udupi-rasam-powder",
    "description": "The secret to invigorating, comforting rasam. Features roasted Malabar black peppercorns, cumin, coriander seeds, and dry red chillies ground with whole turmeric.",
    "shortDescription": "Peppery, tangy spice blend for soul-warming South Indian herbal soup.",
    "price": 139,
    "originalPrice": 160,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 70,
    "rating": 4.8,
    "numReviews": 118,
    "weight": "200g",
    "ingredients": "Coriander, Red Chilli, Cumin, Black Pepper, Toor Dal, Turmeric, Asafoetida, Curry Leaves",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "12.5g",
      "carbs": "49g",
      "fat": "8.5g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "rasam powder",
      "udupi",
      "south indian",
      "spices",
      "soup"
    ]
  },
  {
    "_id": "p-44",
    "name": "Hyderabadi Shahi Dum Biryani Masala",
    "slug": "hyderabadi-shahi-biryani-masala",
    "description": "Curated based on royal Khansama formulations. Blends aromatic green cardamom, shahi jeera, star anise, dagad phool (stone flower), and jaiphal for unforgettable biryani aroma.",
    "shortDescription": "Nizami royal secret spice blend for authentic fragrant dum biryani.",
    "price": 189,
    "originalPrice": 220,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 85,
    "rating": 4.9,
    "numReviews": 235,
    "weight": "150g",
    "ingredients": "Shahi Jeera, Green Cardamom, Mace, Nutmeg, Star Anise, Cinnamon, Cloves, Stone Flower, Bay Leaf, Black Pepper",
    "nutrition": {
      "calories": "345 kcal",
      "protein": "11g",
      "carbs": "46g",
      "fat": "16g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "biryani masala",
      "hyderabadi biryani",
      "dum biryani",
      "spices",
      "royal"
    ]
  },
  {
    "_id": "p-45",
    "name": "Chettinad Pepper Chicken Masala Blend",
    "slug": "chettinad-chicken-masala-blend",
    "description": "Deeply flavorful spice blend from the merchant kitchens of Karaikudi. Whole black pepper, dry roasted fennel, poppy seeds, and stone flower impart a bold, intense finish.",
    "shortDescription": "Bold Tamil Chettinad blend featuring roasted fennel, kalpasi, and peppercorns.",
    "price": 179,
    "originalPrice": 210,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 60,
    "rating": 4.8,
    "numReviews": 142,
    "weight": "200g",
    "ingredients": "Black Pepper, Fennel, Kalpasi, Coriander, Red Chilli, Cumin, Cinnamon, Cloves, Cardamom, Poppy Seeds",
    "nutrition": {
      "calories": "350 kcal",
      "protein": "13g",
      "carbs": "45g",
      "fat": "17g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "chettinad masala",
      "chicken masala",
      "south indian",
      "spices",
      "peppery"
    ]
  },
  {
    "_id": "p-46",
    "name": "Malabar Coarse Black Pepper Powder",
    "slug": "malabar-black-pepper-powder",
    "description": "Harvested from historical spice plantations in Thalassery (Kerala). Coarsely cracked high-piperine peppercorns bursting with woody warmth and robust heat.",
    "shortDescription": "Sun-dried Tellicherry bold black peppercorns coarsely ground.",
    "price": 185,
    "originalPrice": 215,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 90,
    "rating": 4.9,
    "numReviews": 168,
    "weight": "150g",
    "ingredients": "100% Pure Sun-Dried Malabar Black Peppercorns (Piper nigrum)",
    "nutrition": {
      "calories": "255 kcal",
      "protein": "10g",
      "carbs": "64g",
      "fat": "3g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "black pepper",
      "kali mirch",
      "malabar",
      "spices",
      "tellicherry"
    ]
  },
  {
    "_id": "p-47",
    "name": "All-Purpose Kitchen King Masala",
    "slug": "all-purpose-kitchen-king-masala",
    "description": "The definitive all-rounder for North Indian gravies. Perfectly balances coriander, turmeric, cumin, dried ginger, and fenugreek to elevate everyday curries into restaurant-style feasts.",
    "shortDescription": "Versatile spice curry master-blend for rich paneer and vegetable dishes.",
    "price": 149,
    "originalPrice": 175,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 105,
    "rating": 4.7,
    "numReviews": 195,
    "weight": "200g",
    "ingredients": "Coriander, Cumin, Turmeric, Dry Ginger, Black Pepper, Cardamom, Kasuri Methi, Mace, Salt",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "11.5g",
      "carbs": "48g",
      "fat": "11g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "kitchen king",
      "paneer masala",
      "all purpose spice",
      "spices",
      "curry"
    ]
  },
  {
    "_id": "p-48",
    "name": "Tangy Street-Style Chaat Masala",
    "slug": "tangy-street-style-chaat-masala",
    "description": "The secret zing behind Delhi street chaat. Hand-mixed with tart Amchur, Himalayan black salt (kala namak), toasted cumin, dried mint, and asafoetida.",
    "shortDescription": "Zesty sprinkle with black salt, dry mango, asafoetida and mint.",
    "price": 119,
    "originalPrice": 140,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-4",
      "name": "Spices",
      "slug": "spices"
    },
    "stock": 95,
    "rating": 4.8,
    "numReviews": 180,
    "weight": "200g",
    "ingredients": "Dry Mango Powder (Amchur), Black Salt, Cumin, Coriander, Black Pepper, Dried Mint, Asafoetida, Rock Salt",
    "nutrition": {
      "calories": "215 kcal",
      "protein": "5g",
      "carbs": "42g",
      "fat": "3g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "chaat masala",
      "tangy",
      "street food",
      "spices",
      "seasoning"
    ]
  },
  {
    "_id": "p-49",
    "name": "Ready to Eat Ghee Ven Pongal",
    "slug": "ready-to-eat-ghee-ven-pongal",
    "description": "Authentic South Indian temple-style Ven Pongal slow-cooked with seeraga samba rice, split yellow moong dal, crushed black pepper, fresh ginger, and pure cow ghee.",
    "shortDescription": "Wholesome rice and moong dal porridge with golden cashews and cumin.",
    "price": 169,
    "originalPrice": 199,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 60,
    "rating": 4.8,
    "numReviews": 145,
    "weight": "300g",
    "ingredients": "Rice, Yellow Moong Dal, Pure Desi Cow Ghee, Cashew Nuts, Black Peppercorns, Cumin, Ginger, Curry Leaves, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "9.2g",
      "carbs": "48g",
      "fat": "14g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "pongal",
      "ready to eat",
      "breakfast",
      "ghee",
      "south indian",
      "instant meal"
    ]
  },
  {
    "_id": "p-50",
    "name": "Instant Traditional Rava Upma Mix",
    "slug": "instant-traditional-rava-upma-mix",
    "description": "Add boiling water and enjoy in 3 minutes! Pure roasted suji seasoned with mustard, crunchy chana dal, ginger bits, green chillies, and fried cashews.",
    "shortDescription": "Roasted semolina mix with mustard seeds, ginger, cashews and curry leaves.",
    "price": 119,
    "originalPrice": 140,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 80,
    "rating": 4.6,
    "numReviews": 110,
    "weight": "300g",
    "ingredients": "Roasted Semolina (Rava), Refined Oil, Ghee, Cashews, Mustard Seeds, Bengal Gram, Ginger, Green Chilli, Curry Leaves, Salt",
    "nutrition": {
      "calories": "390 kcal",
      "protein": "9g",
      "carbs": "65g",
      "fat": "11g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "upma",
      "instant upma",
      "ready to eat",
      "breakfast mix",
      "quick food"
    ]
  },
  {
    "_id": "p-51",
    "name": "Quick Indori Poha with Jeeravan Masala",
    "slug": "quick-indori-poha-instant",
    "description": "Light and fluffy flattened rice breakfast ready in 5 minutes. Packed with crunchy roasted peanuts, mustard seeds, curry leaves, and a packet of authentic Indori Jeeravan masala.",
    "shortDescription": "Flattened rice tossed with turmeric, mustard, peanuts, and authentic Jeeravan.",
    "price": 99,
    "originalPrice": 120,
    "discount": 17,
    "images": [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 95,
    "rating": 4.7,
    "numReviews": 135,
    "weight": "250g",
    "ingredients": "Rice Flakes (Poha), Roasted Peanuts, Mustard Seeds, Green Chilli, Turmeric, Cumin, Sugar, Salt, Curry Leaves, Jeeravan Masala",
    "nutrition": {
      "calories": "340 kcal",
      "protein": "7.5g",
      "carbs": "62g",
      "fat": "7g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "poha",
      "indori poha",
      "breakfast",
      "ready to eat",
      "healthy"
    ]
  },
  {
    "_id": "p-52",
    "name": "Instant Soft Idli Batter Mix",
    "slug": "instant-soft-idli-batter-mix",
    "description": "Milled from selected Parboiled Salem rice and whole white urad dal. Specially cultured for gentle natural fermentation that guarantees cloud-soft idlis every single morning.",
    "shortDescription": "Fermented traditional blend for feather-light and fluffy steamed idlis.",
    "price": 129,
    "originalPrice": 150,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 90,
    "rating": 4.8,
    "numReviews": 195,
    "weight": "500g",
    "ingredients": "Rice, Black Gram Dal (Urad Dal), Fenugreek Seeds, Salt",
    "nutrition": {
      "calories": "320 kcal",
      "protein": "10g",
      "carbs": "68g",
      "fat": "1.2g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "idli mix",
      "instant idli",
      "breakfast",
      "fermented",
      "ready to eat"
    ]
  },
  {
    "_id": "p-53",
    "name": "Crispy Golden Dosa Mix",
    "slug": "crispy-golden-dosa-mix",
    "description": "Create paper-thin, golden brown South Indian dosas right in your kitchen. Enhanced with a hint of chana dal and methi seeds for superior crispiness and aroma.",
    "shortDescription": "Perfect proportions of rice, urad and chana dal for golden restaurant dosas.",
    "price": 135,
    "originalPrice": 160,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 85,
    "rating": 4.8,
    "numReviews": 160,
    "weight": "500g",
    "ingredients": "Rice, Urad Dal, Bengal Gram (Chana Dal), Fenugreek Seeds, Salt",
    "nutrition": {
      "calories": "330 kcal",
      "protein": "11g",
      "carbs": "69g",
      "fat": "1.5g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "dosa mix",
      "crispy dosa",
      "breakfast",
      "ready to eat",
      "instant mix"
    ]
  },
  {
    "_id": "p-54",
    "name": "Tamarind Rice (Pulihora) Paste Mix",
    "slug": "tamarind-rice-pulihora-paste-mix",
    "description": "Just mix with warm steamed rice! Prepared by simmering thick aged tamarind pulp with turmeric, crunchy roasted peanuts, dried Guntur chillies, and a fragrant sesame oil tadka.",
    "shortDescription": "Thick temple-style tamarind paste with peanuts, red chillies and mustard.",
    "price": 179,
    "originalPrice": 210,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 70,
    "rating": 4.9,
    "numReviews": 220,
    "weight": "350g",
    "ingredients": "Tamarind Pulp, Sesame Oil, Peanuts, Mustard Seeds, Bengal Gram, Red Chillies, Curry Leaves, Turmeric, Salt",
    "nutrition": {
      "calories": "210 kcal",
      "protein": "4.5g",
      "carbs": "28g",
      "fat": "9g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "pulihora",
      "tamarind rice",
      "ready to eat",
      "rice paste",
      "south indian"
    ]
  },
  {
    "_id": "p-55",
    "name": "Zesty Lemon Rice (Chitranna) Paste Mix",
    "slug": "zesty-lemon-rice-paste-mix",
    "description": "Instant South Indian comfort food. Concentrated lemon juice paste infused with ginger, green chillies, golden turmeric, and crisp chana dal tempering.",
    "shortDescription": "Tangy lemon, crunchy peanuts, green chillies and curry leaf rice condiment.",
    "price": 169,
    "originalPrice": 195,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 65,
    "rating": 4.7,
    "numReviews": 95,
    "weight": "300g",
    "ingredients": "Concentrated Lemon Juice, Sesame Oil, Roasted Peanuts, Green Chillies, Ginger, Mustard, Turmeric, Salt",
    "nutrition": {
      "calories": "185 kcal",
      "protein": "4g",
      "carbs": "18g",
      "fat": "11g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "lemon rice",
      "chitranna",
      "rice mix",
      "ready to eat",
      "tangy"
    ]
  },
  {
    "_id": "p-56",
    "name": "Iyengar Style Puliyodarai Powder Mix",
    "slug": "iyengar-style-puliyodarai-powder",
    "description": "Dry roasted black sesame, coriander, pepper, fenugreek, and Byadgi red chillies. Sprinkle over steamed rice with sesame oil or hot tamarind reduction for authentic Iyengar flavours.",
    "shortDescription": "Traditional roasted spice powder for dry-toss temple tamarind rice.",
    "price": 149,
    "originalPrice": 175,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 55,
    "rating": 4.8,
    "numReviews": 125,
    "weight": "250g",
    "ingredients": "Coriander Seeds, Red Chillies, Black Sesame Seeds, Peanuts, Fenugreek, Asafoetida, Salt",
    "nutrition": {
      "calories": "360 kcal",
      "protein": "13g",
      "carbs": "44g",
      "fat": "15g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "puliyodarai",
      "iyengar",
      "spice powder",
      "ready to eat",
      "temple recipe"
    ]
  },
  {
    "_id": "p-57",
    "name": "Instant Crispy Medu Vada Mix",
    "slug": "instant-crispy-medu-vada-mix",
    "description": "Make golden, doughnut-shaped vadas with crisp exteriors and pillowy soft centres in minutes. Enhanced with crushed black peppercorns and aromatic ginger bits.",
    "shortDescription": "Finely milled urad dal flour with pepper, ginger, and cumin for crisp vadas.",
    "price": 139,
    "originalPrice": 165,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 60,
    "rating": 4.7,
    "numReviews": 86,
    "weight": "400g",
    "ingredients": "Black Gram Dal (Urad Dal), Rice Flour, Black Peppercorns, Dried Ginger, Cumin, Asafoetida, Salt, Raising Agent",
    "nutrition": {
      "calories": "345 kcal",
      "protein": "22g",
      "carbs": "59g",
      "fat": "1.5g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "medu vada",
      "vada mix",
      "breakfast",
      "ready to eat",
      "crispy"
    ]
  },
  {
    "_id": "p-58",
    "name": "Wholesome Instant Ragi Dosa Mix",
    "slug": "wholesome-instant-ragi-dosa-mix",
    "description": "Healthy and wholesome breakfast made easy. Organically grown Karnataka finger millet (Ragi) blended with rice flour and seasoned with cumin, black pepper, and rock salt.",
    "shortDescription": "Calcium-rich finger millet mix blended with rice and roasted cumin.",
    "price": 129,
    "originalPrice": 150,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 50,
    "rating": 4.8,
    "numReviews": 104,
    "weight": "500g",
    "ingredients": "Finger Millet (Ragi Flour), Rice Flour, Urad Dal, Cumin Seeds, Salt",
    "nutrition": {
      "calories": "325 kcal",
      "protein": "8.5g",
      "carbs": "68g",
      "fat": "1.8g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "ragi dosa",
      "millets",
      "healthy breakfast",
      "ready to eat",
      "calcium"
    ]
  },
  {
    "_id": "p-59",
    "name": "South Indian Breakfast Trio Combo Pack",
    "slug": "south-indian-breakfast-trio-combo",
    "description": "Everything you need for effortless weekend brunches. Includes 1 pack of Soft Idli Mix (500g), 1 pack of Crispy Dosa Mix (500g), and 1 pack of Medu Vada Mix (400g).",
    "shortDescription": "Value combo containing Idli Mix, Crispy Dosa Mix, and Medu Vada Mix.",
    "price": 359,
    "originalPrice": 420,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 45,
    "rating": 4.9,
    "numReviews": 175,
    "weight": "1.4kg",
    "ingredients": "Idli Mix (Rice, Urad Dal), Dosa Mix (Rice, Urad, Chana Dal), Vada Mix (Urad, Spices)",
    "nutrition": {
      "calories": "330 kcal",
      "protein": "14g",
      "carbs": "65g",
      "fat": "1.5g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "combo pack",
      "breakfast combo",
      "idli dosa vada",
      "ready to eat",
      "value pack"
    ]
  },
  {
    "_id": "p-60",
    "name": "Moong Dal Khichdi (Ready to Eat Meal)",
    "slug": "moong-dal-khichdi-ready-to-eat",
    "description": "Heat pouch in boiling water for 3 minutes or microwave for 90 seconds. Prepared with aged basmati rice, split yellow moong, cumin, turmeric, and pure cow ghee.",
    "shortDescription": "Homestyle comforting yellow lentil and rice khichdi with desi ghee tadka.",
    "price": 159,
    "originalPrice": 185,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-5",
      "name": "Ready to Eat",
      "slug": "ready-to-eat"
    },
    "stock": 65,
    "rating": 4.7,
    "numReviews": 92,
    "weight": "300g",
    "ingredients": "Basmati Rice, Yellow Moong Dal, Desi Cow Ghee, Cumin, Turmeric, Ginger, Black Pepper, Asafoetida, Salt",
    "nutrition": {
      "calories": "310 kcal",
      "protein": "10g",
      "carbs": "52g",
      "fat": "7g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "khichdi",
      "ready to eat",
      "comfort food",
      "ghee",
      "healthy meal"
    ]
  },
  {
    "_id": "p-61",
    "name": "Jumbo California Whole Almonds (Badam)",
    "slug": "jumbo-california-whole-almonds",
    "description": "Hand-sorted jumbo California almonds with a sweet natural crunch. Free from polishing, chemical treatment, and preservatives. Exceptional source of plant protein and dietary fibre.",
    "shortDescription": "Supreme 100% natural raw California almonds rich in vitamin E & protein.",
    "price": 499,
    "originalPrice": 580,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 90,
    "rating": 4.9,
    "numReviews": 320,
    "weight": "500g",
    "ingredients": "100% Raw Whole California Almonds (Prunus dulcis)",
    "nutrition": {
      "calories": "579 kcal",
      "protein": "21.2g",
      "carbs": "21.6g",
      "fat": "49.9g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "almonds",
      "badam",
      "dry fruits",
      "healthy",
      "protein",
      "superfood"
    ]
  },
  {
    "_id": "p-62",
    "name": "Premium Whole Goan Cashews (W240 Grade)",
    "slug": "premium-whole-goan-cashews-w240",
    "description": "Export-quality W240 grade whole cashew nuts sourced directly from coastal Konkan orchards. Naturally buttery and sweet with zero added salt or chemicals.",
    "shortDescription": "Large white whole cashews with a rich creamy texture and sweet bite.",
    "price": 549,
    "originalPrice": 650,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 80,
    "rating": 4.9,
    "numReviews": 280,
    "weight": "500g",
    "ingredients": "100% Raw Whole Cashew Nuts (Anacardium occidentale)",
    "nutrition": {
      "calories": "553 kcal",
      "protein": "18.2g",
      "carbs": "30.2g",
      "fat": "43.8g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "cashews",
      "kaju",
      "dry fruits",
      "w240",
      "premium nuts"
    ]
  },
  {
    "_id": "p-63",
    "name": "Salted & Roasted Iranian Pistachios (Pista)",
    "slug": "roasted-salted-iranian-pistachios",
    "description": "Naturally opened large pistachios lightly tossed with mineral sea salt and slow-roasted in their shells to develop maximum nutty crunch and vibrant emerald colour.",
    "shortDescription": "Open-mouth jumbo pistachios lightly salted and dry-roasted in shell.",
    "price": 599,
    "originalPrice": 700,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 65,
    "rating": 4.8,
    "numReviews": 195,
    "weight": "400g",
    "ingredients": "In-Shell Iranian Pistachios, Sea Salt",
    "nutrition": {
      "calories": "562 kcal",
      "protein": "20.2g",
      "carbs": "27.5g",
      "fat": "45.3g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "pistachios",
      "pista",
      "roasted nuts",
      "dry fruits",
      "salted pista"
    ]
  },
  {
    "_id": "p-64",
    "name": "Kashmiri Raw Walnut Kernels (Akhrot)",
    "slug": "kashmiri-raw-walnut-kernels",
    "description": "Harvested from century-old walnut groves in the Kashmir valley. Tender, crisp light-coloured half kernels celebrated for their high alpha-linolenic acid (Omega-3) content.",
    "shortDescription": "Extra-light half-kernels rich in heart-healthy Omega-3 fatty acids.",
    "price": 649,
    "originalPrice": 750,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 55,
    "rating": 4.9,
    "numReviews": 165,
    "weight": "400g",
    "ingredients": "100% Natural Kashmiri Walnut Kernels (Juglans regia)",
    "nutrition": {
      "calories": "654 kcal",
      "protein": "15.2g",
      "carbs": "13.7g",
      "fat": "65.2g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "walnuts",
      "akhrot",
      "kashmir",
      "omega 3",
      "brain food",
      "dry fruits"
    ]
  },
  {
    "_id": "p-65",
    "name": "Golden Afghan Long Green Raisins (Kismis)",
    "slug": "golden-afghan-green-raisins",
    "description": "Shade-dried long green raisins imported from the fertile valleys of Kandahar. Naturally sweet, high in natural iron, and free from sulphur bleaching.",
    "shortDescription": "Naturally sweet and chewy seedless long green sultana raisins.",
    "price": 229,
    "originalPrice": 270,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 85,
    "rating": 4.7,
    "numReviews": 130,
    "weight": "500g",
    "ingredients": "100% Natural Seedless Green Raisins",
    "nutrition": {
      "calories": "299 kcal",
      "protein": "3.1g",
      "carbs": "79g",
      "fat": "0.5g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "raisins",
      "kismis",
      "green raisins",
      "dry fruits",
      "iron rich"
    ]
  },
  {
    "_id": "p-66",
    "name": "Royal Medjool King Dates (Khajoor)",
    "slug": "royal-medjool-king-dates",
    "description": "The undisputed \"King of Dates\". Plump, velvety, and naturally caramel-sweet with a luscious tender bite. Completely unpitted and raw for maximum nutrition.",
    "shortDescription": "Giant, soft, and caramel-rich whole fresh dates with zero added sugar.",
    "price": 499,
    "originalPrice": 580,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 60,
    "rating": 4.9,
    "numReviews": 210,
    "weight": "500g",
    "ingredients": "100% Whole Medjool Dates",
    "nutrition": {
      "calories": "277 kcal",
      "protein": "1.8g",
      "carbs": "75g",
      "fat": "0.2g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "dates",
      "medjool dates",
      "khajoor",
      "natural energy",
      "dry fruits"
    ]
  },
  {
    "_id": "p-67",
    "name": "Sun-Dried White Afghan Figs (Anjeer)",
    "slug": "sun-dried-white-afghan-figs-anjeer",
    "description": "Chewy, nutritious sun-dried figs packed with crunchy dietary fibre and calcium seeds. Traditionally hand-strung on natural cotton threads.",
    "shortDescription": "Sweet flattened disc figs strung on natural jute cord.",
    "price": 589,
    "originalPrice": 690,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 50,
    "rating": 4.8,
    "numReviews": 142,
    "weight": "400g",
    "ingredients": "100% Sun-Dried Figs (Ficus carica)",
    "nutrition": {
      "calories": "249 kcal",
      "protein": "3.3g",
      "carbs": "63g",
      "fat": "0.9g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "anjeer",
      "figs",
      "dry fruits",
      "fibre",
      "calcium"
    ]
  },
  {
    "_id": "p-68",
    "name": "Whole Sweetened Dried Cranberries",
    "slug": "whole-sweetened-dried-cranberries",
    "description": "Plump whole cranberries gently sweetened with cane sugar. Bursting with proanthocyanidins (antioxidants) that support bladder and cardiovascular wellness.",
    "shortDescription": "Tart and ruby-red whole cranberries infused with natural cane juice.",
    "price": 349,
    "originalPrice": 410,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 65,
    "rating": 4.7,
    "numReviews": 98,
    "weight": "300g",
    "ingredients": "Dried Cranberries, Cane Sugar, Sunflower Oil",
    "nutrition": {
      "calories": "308 kcal",
      "protein": "0.5g",
      "carbs": "82g",
      "fat": "1.4g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "cranberries",
      "berries",
      "antioxidants",
      "dry fruits"
    ]
  },
  {
    "_id": "p-69",
    "name": "Natural Turkish Sun-Dried Apricots (Khubani)",
    "slug": "natural-turkish-dried-apricots",
    "description": "Sourced from the sun-drenched valleys of Malatya. Exceptionally soft, moist, and honey-sweet with zero added sugar or artificial colours.",
    "shortDescription": "Soft, golden, plump apricots naturally dried in Malatya orchards.",
    "price": 389,
    "originalPrice": 450,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 45,
    "rating": 4.8,
    "numReviews": 87,
    "weight": "350g",
    "ingredients": "100% Whole Sun-Dried Apricots (Prunus armeniaca)",
    "nutrition": {
      "calories": "241 kcal",
      "protein": "3.4g",
      "carbs": "62g",
      "fat": "0.5g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "apricots",
      "khubani",
      "dry fruits",
      "vitamin a",
      "snack"
    ]
  },
  {
    "_id": "p-70",
    "name": "Supreme Royal 5-in-1 Mixed Dry Fruits",
    "slug": "supreme-royal-5-in-1-mixed-dry-fruits",
    "description": "The ultimate daily health booster. Perfectly balanced mix of California almonds, Goan cashews, Iranian pistachios, Kashmiri walnuts, and Afghan green raisins in equal proportions.",
    "shortDescription": "Premium assortment of almonds, cashews, pistachios, walnuts, and raisins.",
    "price": 699,
    "originalPrice": 820,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 75,
    "rating": 4.9,
    "numReviews": 245,
    "weight": "500g",
    "ingredients": "Almonds, Cashews, Pistachios, Walnuts, Green Raisins",
    "nutrition": {
      "calories": "535 kcal",
      "protein": "16g",
      "carbs": "36g",
      "fat": "38g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "mixed dry fruits",
      "dry fruits",
      "trail mix",
      "superfood",
      "healthy"
    ]
  },
  {
    "_id": "p-71",
    "name": "Himalayan Pink Salt Roasted Almonds",
    "slug": "himalayan-salt-roasted-almonds",
    "description": "Slow-roasted dry without a single drop of oil, then dusted with mineral-rich Himalayan pink salt for an irresistibly crunchy, wholesome savory snack.",
    "shortDescription": "Crunchy dry-roasted almonds seasoned with crushed pink rock salt.",
    "price": 369,
    "originalPrice": 425,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 60,
    "rating": 4.8,
    "numReviews": 115,
    "weight": "300g",
    "ingredients": "California Almonds, Himalayan Pink Salt",
    "nutrition": {
      "calories": "585 kcal",
      "protein": "21g",
      "carbs": "20g",
      "fat": "51g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "roasted almonds",
      "salted almonds",
      "healthy snacks",
      "dry fruits"
    ]
  },
  {
    "_id": "p-72",
    "name": "Cracked Pepper & Herb Roasted Cashews",
    "slug": "cracked-pepper-roasted-cashews",
    "description": "Large cashew kernels dry-roasted to a nutty golden shade, infused with cracked Tellicherry black pepper and aromatic garden herbs.",
    "shortDescription": "Buttery roasted whole cashews seasoned with Malabar pepper and oregano.",
    "price": 399,
    "originalPrice": 470,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-6",
      "name": "Dry Fruits",
      "slug": "dry-fruits"
    },
    "stock": 55,
    "rating": 4.8,
    "numReviews": 132,
    "weight": "300g",
    "ingredients": "Whole Cashew Nuts, Black Pepper, Oregano, Sea Salt",
    "nutrition": {
      "calories": "560 kcal",
      "protein": "18g",
      "carbs": "31g",
      "fat": "44g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "roasted cashews",
      "pepper cashews",
      "kaju",
      "snacks",
      "dry fruits"
    ]
  },
  {
    "_id": "p-73",
    "name": "Kumbakonam Degree Filter Coffee (80:20 Blend)",
    "slug": "kumbakonam-degree-filter-coffee",
    "description": "The authentic South Indian coffee experience. Shade-grown Arabica and Robusta beans roasted medium-dark and blended with French chicory for a thick, velvety decoction and caramel crema.",
    "shortDescription": "Traditional plantation Arabica & Peaberry beans roasted with 20% chicory.",
    "price": 189,
    "originalPrice": 220,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 85,
    "rating": 4.9,
    "numReviews": 310,
    "weight": "250g",
    "ingredients": "80% Roasted Coffee Beans (Arabica & Robusta), 20% Roasted Chicory",
    "nutrition": {
      "calories": "2 kcal",
      "protein": "0.1g",
      "carbs": "0.4g",
      "fat": "0g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "filter coffee",
      "coffee powder",
      "kumbakonam",
      "south indian coffee",
      "beverages"
    ]
  },
  {
    "_id": "p-74",
    "name": "Premium Mysore Instant Coffee Powder",
    "slug": "premium-mysore-instant-coffee",
    "description": "Crafted from estate-grown Mysore coffee cherries. Agglomerated freeze-dried granules dissolve instantly in hot or cold milk for smooth, chocolatey coffee with no brewer required.",
    "shortDescription": "Freeze-dried 100% pure coffee granules for rich barista coffee in seconds.",
    "price": 249,
    "originalPrice": 295,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 70,
    "rating": 4.7,
    "numReviews": 165,
    "weight": "100g",
    "ingredients": "100% Pure Soluble Instant Coffee Granules",
    "nutrition": {
      "calories": "1 kcal",
      "protein": "0.1g",
      "carbs": "0.2g",
      "fat": "0g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "instant coffee",
      "coffee",
      "beverages",
      "mysore coffee",
      "cold coffee"
    ]
  },
  {
    "_id": "p-75",
    "name": "Royal Masala Chai Blend (CTC + 6 Spices)",
    "slug": "royal-masala-chai-blend",
    "description": "Rich, malty Assam CTC black tea expertly combined with crushed ginger, green cardamom, Ceylon cinnamon, black pepper, cloves, and nutmeg. Yields a brisk, fragrant cup.",
    "shortDescription": "Assam orthodox tea blended with green cardamom, dry ginger and cinnamon.",
    "price": 175,
    "originalPrice": 205,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 95,
    "rating": 4.9,
    "numReviews": 240,
    "weight": "250g",
    "ingredients": "Assam CTC Black Tea, Green Cardamom, Dried Ginger, Cinnamon, Clove, Nutmeg, Black Pepper",
    "nutrition": {
      "calories": "3 kcal",
      "protein": "0g",
      "carbs": "0.8g",
      "fat": "0g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "masala chai",
      "chai",
      "tea",
      "spiced tea",
      "assam tea",
      "beverages"
    ]
  },
  {
    "_id": "p-76",
    "name": "Himalayan Loose Leaf Green Tea",
    "slug": "himalayan-loose-leaf-green-tea",
    "description": "Plucked from pristine mountain estates at 6,500 feet. Minimally oxidized whole leaf green tea with subtle vegetal sweetness and crisp floral notes.",
    "shortDescription": "High-elevation whole green tea leaves brimming with natural polyphenols.",
    "price": 219,
    "originalPrice": 260,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 65,
    "rating": 4.8,
    "numReviews": 135,
    "weight": "150g",
    "ingredients": "100% Pure Whole Leaf Himalayan Green Tea (Camellia sinensis)",
    "nutrition": {
      "calories": "1 kcal",
      "protein": "0g",
      "carbs": "0.2g",
      "fat": "0g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "green tea",
      "tea",
      "detox",
      "antioxidants",
      "beverages",
      "healthy"
    ]
  },
  {
    "_id": "p-77",
    "name": "Sun-Dried Ginger & Tulsi Kadha Tea",
    "slug": "ginger-tulsi-kadha-tea",
    "description": "Time-tested Ayurvedic remedy. A healing infusion of Krishna Tulsi, Rama Tulsi, sun-dried ginger flakes, liquorice (mulethi), and Malabar black pepper to boost respiratory wellness.",
    "shortDescription": "Ayurvedic wellness tea with holy basil, crushed ginger, and black pepper.",
    "price": 189,
    "originalPrice": 220,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 55,
    "rating": 4.8,
    "numReviews": 95,
    "weight": "150g",
    "ingredients": "Tulsi Leaves, Sun-Dried Ginger, Black Pepper, Mulethi (Liquorice), Cardamom, Cinnamon",
    "nutrition": {
      "calories": "2 kcal",
      "protein": "0.1g",
      "carbs": "0.5g",
      "fat": "0g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "kadha",
      "tulsi tea",
      "ginger tea",
      "ayurvedic",
      "immunity",
      "beverages"
    ]
  },
  {
    "_id": "p-78",
    "name": "Royal Cardamom (Elaichi) Chai Infusion",
    "slug": "royal-cardamom-elaichi-chai",
    "description": "For cardamom lovers. Fragrant bold green cardamom from Kerala’s Idukki hills crushed along with strong CTC tea leaves for an intoxicating sweet floral aroma in every cup.",
    "shortDescription": "Crushed green Idukki cardamom pods blended with strong Assam tea leaves.",
    "price": 169,
    "originalPrice": 195,
    "discount": 13,
    "images": [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 80,
    "rating": 4.7,
    "numReviews": 120,
    "weight": "250g",
    "ingredients": "Assam CTC Tea, Crushed Green Cardamom Seeds & Pods",
    "nutrition": {
      "calories": "3 kcal",
      "protein": "0g",
      "carbs": "0.6g",
      "fat": "0g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "cardamom tea",
      "elaichi chai",
      "tea",
      "beverages",
      "morning"
    ]
  },
  {
    "_id": "p-79",
    "name": "Saffron Badam Milk Mix (Thandai Masala)",
    "slug": "saffron-badam-milk-mix",
    "description": "Stir 2 spoons into warm or chilled milk for royal badam kheer or festive thandai. Packed with crushed almonds, pistachios, saffron strands, fennel seeds, and green cardamom.",
    "shortDescription": "Rich almond flour, Kashmiri saffron, pistachios, and melon seed blend.",
    "price": 269,
    "originalPrice": 320,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 50,
    "rating": 4.9,
    "numReviews": 154,
    "weight": "250g",
    "ingredients": "Almonds, Pistachios, Saffron, Sugar, Green Cardamom, Melon Seeds, Black Pepper",
    "nutrition": {
      "calories": "440 kcal",
      "protein": "12g",
      "carbs": "56g",
      "fat": "18g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "badam milk",
      "thandai",
      "saffron milk",
      "beverages",
      "healthy drink"
    ]
  },
  {
    "_id": "p-80",
    "name": "Old-Fashioned Rose Milk Syrup Concentrate",
    "slug": "old-fashioned-rose-milk-syrup",
    "description": "Relive nostalgic South Indian summer holidays. Natural Damascus rose petal extract simmered into aromatic syrup that turns icy cold milk into fragrant pink rose milk.",
    "shortDescription": "Distilled Damascus rose petal extract with pure cane sugar and beet colour.",
    "price": 159,
    "originalPrice": 185,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 60,
    "rating": 4.6,
    "numReviews": 92,
    "weight": "500ml",
    "ingredients": "Sugar, Water, Natural Rose Extract, Citric Acid, Beetroot Juice Extract (Natural Colour)",
    "nutrition": {
      "calories": "210 kcal",
      "protein": "0g",
      "carbs": "52g",
      "fat": "0g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "rose milk",
      "syrup",
      "summer drink",
      "beverages",
      "nostalgic"
    ]
  },
  {
    "_id": "p-81",
    "name": "Alphonso Mango Panna & Drink Concentrate",
    "slug": "alphonso-mango-drink-concentrate",
    "description": "Pure 100% Ratnagiri Alphonso mango puree with a hint of cumin and black salt. Dilute with water or soda for instant refreshing Mango Aam Panna and coolers.",
    "shortDescription": "Sun-ripened Ratnagiri Alphonso mango pulp for quick mango coolers.",
    "price": 199,
    "originalPrice": 235,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 75,
    "rating": 4.8,
    "numReviews": 145,
    "weight": "500ml",
    "ingredients": "Alphonso Mango Pulp, Sugar, Purified Water, Roasted Cumin, Black Salt, Citric Acid",
    "nutrition": {
      "calories": "120 kcal",
      "protein": "0.8g",
      "carbs": "29g",
      "fat": "0.2g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "mango drink",
      "alphonso",
      "aam panna",
      "beverages",
      "summer"
    ]
  },
  {
    "_id": "p-82",
    "name": "Pure Malabar Kokum Squash Concentrate",
    "slug": "pure-malabar-kokum-squash",
    "description": "Natural anti-inflammatory thirst-quencher. Wild Konkan kokum (Garcinia indica) fruit rind infused with organic jaggery, rock salt, and roasted cumin powder.",
    "shortDescription": "Wild Konkan kokum fruit extract with cumin and cooling herbal spices.",
    "price": 179,
    "originalPrice": 210,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 50,
    "rating": 4.8,
    "numReviews": 88,
    "weight": "500ml",
    "ingredients": "Kokum Fruit Extract, Jaggery, Cumin, Rock Salt, Ginger Extract",
    "nutrition": {
      "calories": "95 kcal",
      "protein": "0.4g",
      "carbs": "23g",
      "fat": "0g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "kokum",
      "squash",
      "digestive drink",
      "konkan",
      "beverages"
    ]
  },
  {
    "_id": "p-83",
    "name": "Shikanji Lemon Masala Drink Mix",
    "slug": "shikanji-lemon-masala-drink-mix",
    "description": "Old Delhi style spiced lemonade mix. Combines spray-dried lemon juice powder, black salt, roasted cumin, mint leaves, and a dash of black pepper. Instant tangy hydration.",
    "shortDescription": "Classic North Indian spiced lemonade powder with mint and black salt.",
    "price": 129,
    "originalPrice": 150,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 80,
    "rating": 4.7,
    "numReviews": 104,
    "weight": "250g",
    "ingredients": "Lemon Juice Powder, Sugar, Black Salt, Cumin Powder, Dried Mint, Ginger, Pepper",
    "nutrition": {
      "calories": "160 kcal",
      "protein": "0.5g",
      "carbs": "39g",
      "fat": "0.1g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "shikanji",
      "lemonade",
      "nimbu pani",
      "beverages",
      "summer"
    ]
  },
  {
    "_id": "p-84",
    "name": "Golden Turmeric Ashwagandha Latte Mix",
    "slug": "golden-turmeric-ashwagandha-latte",
    "description": "Modern Ayurvedic bedtime elixir. High-curcumin Alleppey turmeric paired with organic Ashwagandha root powder, Ceylon cinnamon, and piperine for optimal relaxation and sleep.",
    "shortDescription": "Ayurvedic Haldi Doodh blend with saffron, ashwagandha, and black pepper.",
    "price": 249,
    "originalPrice": 295,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-7",
      "name": "Beverages",
      "slug": "beverages"
    },
    "stock": 65,
    "rating": 4.9,
    "numReviews": 124,
    "weight": "200g",
    "ingredients": "Alleppey Turmeric, Organic Ashwagandha, Ceylon Cinnamon, Ginger, Black Pepper, Cardamom, Stevia",
    "nutrition": {
      "calories": "180 kcal",
      "protein": "4g",
      "carbs": "36g",
      "fat": "1.5g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "golden milk",
      "turmeric latte",
      "haldi doodh",
      "ashwagandha",
      "sleep",
      "beverages"
    ]
  },
  {
    "_id": "p-85",
    "name": "South Indian Crunch & Savory Snack Box",
    "slug": "south-indian-crunch-snack-box",
    "description": "A curated gift box capturing the authentic crunch of traditional South Indian tea-time. Includes Butter Murukku (250g), Kerala Banana Chips (250g), Royal Special Mixture (250g), and Spicy Masala Peanuts (250g).",
    "shortDescription": "Celebratory hamper featuring Murukku, Banana Chips, Mixture, and Peanuts.",
    "price": 549,
    "originalPrice": 650,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 45,
    "rating": 4.9,
    "numReviews": 175,
    "weight": "1kg",
    "ingredients": "Butter Murukku, Kerala Banana Chips, Special Mixture, Masala Peanuts",
    "nutrition": {
      "calories": "510 kcal",
      "protein": "9g",
      "carbs": "58g",
      "fat": "27g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "snack box",
      "gift hamper",
      "south indian",
      "gift packs",
      "festival gift"
    ]
  },
  {
    "_id": "p-86",
    "name": "Royal Heritage Mithai & Sweet Box",
    "slug": "royal-heritage-mithai-sweet-box",
    "description": "An opulent golden box containing 4 signature Indian sweets: Goan Kaju Katli (250g), Royal Mysore Pak (250g), Desi Ghee Besan Laddu (250g), and Mathura Peda (250g).",
    "shortDescription": "Festive assortment of Kaju Katli, Mysore Pak, Besan Laddu and Peda.",
    "price": 899,
    "originalPrice": 1050,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 40,
    "rating": 5,
    "numReviews": 240,
    "weight": "1kg",
    "ingredients": "Kaju Katli, Mysore Pak, Besan Laddu, Mathura Peda",
    "nutrition": {
      "calories": "460 kcal",
      "protein": "8g",
      "carbs": "50g",
      "fat": "24g"
    },
    "isBestSeller": true,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "sweet box",
      "mithai box",
      "gift packs",
      "diwali gift",
      "luxury mithai"
    ]
  },
  {
    "_id": "p-87",
    "name": "Diwali Grand Celebration Food Hamper",
    "slug": "diwali-grand-celebration-food-hamper",
    "description": "Our most lavish festive creation. Includes Kaju Katli (250g), Motichoor Laddu (250g), Butter Murukku (250g), Jumbo Almonds (250g), Cashews (250g), and Royal Masala Chai (100g).",
    "shortDescription": "Ultimate festive bundle of sweets, savory snacks, dry fruits, and chai.",
    "price": 1499,
    "originalPrice": 1799,
    "discount": 17,
    "images": [
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 30,
    "rating": 5,
    "numReviews": 195,
    "weight": "1.5kg",
    "ingredients": "Sweets (Cashew, Besan, Ghee), Savories (Rice, Urad Dal), Dry Fruits (Almonds, Cashews), Masala Chai",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "12g",
      "carbs": "45g",
      "fat": "28g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": true,
    "tags": [
      "diwali hamper",
      "grand celebration",
      "gift packs",
      "luxury hamper",
      "festive box"
    ]
  },
  {
    "_id": "p-88",
    "name": "Grandmaster 4-Jar Heirloom Pickle Collection",
    "slug": "grandmaster-4-jar-pickle-collection",
    "description": "An heirloom assortment for true pickle connoisseurs. Four 250g glass jars containing Andhra Avakaya Mango, Traditional Gongura, Mustard Garlic, and Sun-Dried Lemon Pickle.",
    "shortDescription": "Avakaya Mango, Gongura, Garlic, and Lemon pickles in a wooden gift crate.",
    "price": 699,
    "originalPrice": 820,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 45,
    "rating": 4.9,
    "numReviews": 110,
    "weight": "1kg",
    "ingredients": "Avakaya Mango Pickle, Gongura Pickle, Mustard Garlic Pickle, Sun-Dried Lemon Pickle",
    "nutrition": {
      "calories": "145 kcal",
      "protein": "1.8g",
      "carbs": "8g",
      "fat": "12g"
    },
    "isBestSeller": true,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "pickle collection",
      "pickle hamper",
      "gift packs",
      "andhra pickles",
      "heirloom"
    ]
  },
  {
    "_id": "p-89",
    "name": "Imperial Dry Fruit & Nut Treasure Box",
    "slug": "imperial-dry-fruit-treasure-box",
    "description": "Presented in an artisan laser-cut wooden chest with brass latch. Contains 200g each of California Jumbo Almonds, Goan W240 Cashews, Roasted Iranian Pistachios, and Kashmiri Walnuts.",
    "shortDescription": "Laser-carved wooden box with Jumbo Almonds, Cashews, Pista, and Walnuts.",
    "price": 1199,
    "originalPrice": 1450,
    "discount": 17,
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 35,
    "rating": 4.9,
    "numReviews": 168,
    "weight": "800g",
    "ingredients": "California Almonds, Whole Cashews, Iranian Pistachios, Kashmiri Walnuts",
    "nutrition": {
      "calories": "575 kcal",
      "protein": "18g",
      "carbs": "26g",
      "fat": "47g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "dry fruit box",
      "luxury gift",
      "wooden chest",
      "gift packs",
      "corporate gift"
    ]
  },
  {
    "_id": "p-90",
    "name": "Monsoon Tea & South Indian Snacks Combo",
    "slug": "monsoon-tea-south-indian-snacks-combo",
    "description": "The ultimate rainy evening ritual. Features 1 Tin of Royal Masala Chai Blend (250g) paired with fresh Butter Murukku (250g) and Kerala Coconut Oil Banana Chips (250g).",
    "shortDescription": "Royal Masala Chai paired with Butter Murukku and Banana Chips.",
    "price": 449,
    "originalPrice": 520,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 55,
    "rating": 4.8,
    "numReviews": 122,
    "weight": "750g",
    "ingredients": "Assam Spiced Tea, Butter Murukku, Kerala Banana Chips",
    "nutrition": {
      "calories": "490 kcal",
      "protein": "6g",
      "carbs": "60g",
      "fat": "25g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "tags": [
      "tea combo",
      "chai and snacks",
      "gift packs",
      "evening snack",
      "rainy day"
    ]
  },
  {
    "_id": "p-91",
    "name": "Traditional South Indian Kitchen Heritage Hamper",
    "slug": "traditional-kitchen-heritage-hamper",
    "description": "An essential housewarming gift. Features Madras Sambar Powder (250g), Udupi Rasam Powder (200g), Andhra Mango Pickle (350g), Kumbakonam Filter Coffee (250g), and Brass Coffee Dabarah Set.",
    "shortDescription": "Complete pantry set: Sambar powder, Rasam powder, Mango pickle & Coffee.",
    "price": 849,
    "originalPrice": 999,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 35,
    "rating": 4.9,
    "numReviews": 88,
    "weight": "1.2kg",
    "ingredients": "Sambar Powder, Rasam Powder, Mango Pickle, Filter Coffee Powder",
    "nutrition": {
      "calories": "290 kcal",
      "protein": "9g",
      "carbs": "45g",
      "fat": "8g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "heritage hamper",
      "housewarming",
      "kitchen essentials",
      "gift packs",
      "south indian"
    ]
  },
  {
    "_id": "p-92",
    "name": "Festive Sweets & Namkeen Celebration Casket",
    "slug": "festive-sweets-namkeen-celebration-casket",
    "description": "The golden combination of sweet and savory. Contains 400g of pure ghee Motichoor Laddu and 350g of Royal Special Mixture packed in an ornate festive box.",
    "shortDescription": "Balanced assortment of sweet Motichoor Laddu & savory South Indian Mixture.",
    "price": 499,
    "originalPrice": 580,
    "discount": 14,
    "images": [
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 50,
    "rating": 4.8,
    "numReviews": 135,
    "weight": "750g",
    "ingredients": "Motichoor Laddu (Gram flour, Ghee, Sugar), Special Mixture (Lentils, Nuts, Spices)",
    "nutrition": {
      "calories": "475 kcal",
      "protein": "7.5g",
      "carbs": "55g",
      "fat": "25g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "sweets and namkeen",
      "gift packs",
      "festive box",
      "gift box"
    ]
  },
  {
    "_id": "p-93",
    "name": "Family Mega Tea-Time Snack Assortment (6 Packs)",
    "slug": "family-mega-snack-assortment",
    "description": "Keeps the family snacking happy all month! Contains Aloo Bhujia (200g), Masala Peanuts (250g), Butter Murukku (250g), Banana Chips (250g), Kara Boondi (250g), and Corn Mixture (300g).",
    "shortDescription": "Six family-size packs of India’s most popular namkeen snacks.",
    "price": 749,
    "originalPrice": 890,
    "discount": 16,
    "images": [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 45,
    "rating": 4.9,
    "numReviews": 160,
    "weight": "1.5kg",
    "ingredients": "Aloo Bhujia, Masala Peanuts, Murukku, Banana Chips, Kara Boondi, Corn Mixture",
    "nutrition": {
      "calories": "510 kcal",
      "protein": "9g",
      "carbs": "57g",
      "fat": "27g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": false,
    "tags": [
      "mega pack",
      "family pack",
      "variety snack box",
      "gift packs",
      "namkeen bundle"
    ]
  },
  {
    "_id": "p-94",
    "name": "Gourmet Luxury Indian Food Hamper (Handcrafted Basket)",
    "slug": "gourmet-luxury-indian-food-hamper",
    "description": "The ultimate statement of generosity. Includes Kaju Katli (250g), Badam Halwa (300g), Avakaya Mango Pickle (350g), Kumbakonam Filter Coffee (250g), Jumbo Almonds (250g), Goan Cashews (250g), Banana Chips (250g), and Shahi Garam Masala (150g).",
    "shortDescription": "Handwoven wicker basket packed with 8 premium artisanal treats.",
    "price": 2199,
    "originalPrice": 2600,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 20,
    "rating": 5,
    "numReviews": 75,
    "weight": "2.1kg",
    "ingredients": "Assorted Gourmet Sweets, Pickles, Dry Fruits, Beverages, Spices, Snacks",
    "nutrition": {
      "calories": "480 kcal",
      "protein": "11g",
      "carbs": "46g",
      "fat": "27g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": true,
    "tags": [
      "luxury hamper",
      "wicker basket",
      "gourmet gift",
      "gift packs",
      "corporate luxury"
    ]
  },
  {
    "_id": "p-95",
    "name": "Executive Corporate Indian Food Gift Box",
    "slug": "executive-corporate-food-gift-box",
    "description": "Designed for corporate appreciation and client gifting. Contains premium Kaju Katli (250g), Himalayan Salted Almonds (200g), and Pepper Roasted Cashews (200g) in an elegant embossed box.",
    "shortDescription": "Sleek matte-black branded box with Kaju Katli and roasted dry fruits.",
    "price": 849,
    "originalPrice": 999,
    "discount": 15,
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 60,
    "rating": 4.8,
    "numReviews": 95,
    "weight": "650g",
    "ingredients": "Kaju Katli, Himalayan Salted Roasted Almonds, Pepper Roasted Cashews",
    "nutrition": {
      "calories": "510 kcal",
      "protein": "14g",
      "carbs": "38g",
      "fat": "34g"
    },
    "isBestSeller": false,
    "isFeatured": false,
    "isNewArrival": false,
    "tags": [
      "corporate gift",
      "executive box",
      "diwali corporate",
      "gift packs",
      "dry fruits"
    ]
  },
  {
    "_id": "p-96",
    "name": "Mini Connoisseur Tasting Flight (8 Samples)",
    "slug": "mini-connoisseur-tasting-flight",
    "description": "Can’t decide where to begin? Sample 8 of FreshKart’s signature items in tasting sizes (50g–100g each): Mango Pickle, Gongura Pickle, Murukku, Banana Chips, Kaju Katli, Filter Coffee, Garam Masala, and Spiced Peanuts.",
    "shortDescription": "Sample box with 8 curated mini jars and packs of our best products.",
    "price": 499,
    "originalPrice": 599,
    "discount": 17,
    "images": [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80"
    ],
    "category": {
      "_id": "cat-8",
      "name": "Gift Packs",
      "slug": "gift-packs"
    },
    "stock": 50,
    "rating": 4.9,
    "numReviews": 180,
    "weight": "600g",
    "ingredients": "Tasting sizes of 8 signature South Indian food items",
    "nutrition": {
      "calories": "350 kcal",
      "protein": "7g",
      "carbs": "42g",
      "fat": "18g"
    },
    "isBestSeller": false,
    "isFeatured": true,
    "isNewArrival": true,
    "tags": [
      "tasting box",
      "sample flight",
      "mini box",
      "gift packs",
      "starter pack"
    ]
  }
];
