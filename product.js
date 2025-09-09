// Products data
window.products = {
    // ---------------- ELECTRONICS ----------------
    electronics: [
        {
            id: 'e1',
            name: 'iPhone 15 Pro',
            description: 'Latest iPhone with A17 Pro chip and titanium design',
            price: 76999,
            image: 'images/iphone15.png',
            rating: 4.8,
            reviews: 1245,
            badge: 'New'
        },
        {
            id: 'e2',
            name: 'Samsung Galaxy S24 Ultra',
            description: 'Powerful Android phone with S Pen and advanced camera',
            price: 79900,
            image: 'images/samsung.png',
            rating: 4.7,
            reviews: 987,
            badge: 'Popular'
        },
        {
            id: 'e3',
            name: 'MacBook Pro 16"',
            description: 'Professional laptop with M3 Max chip',
            price: 19999,
            image: 'images/macbook.png',
            rating: 4.9,
            reviews: 756
        },
        {
            id: 'e4',
            name: 'Sony WH-1000XM5',
            description: 'Noise-canceling wireless headphones',
            price: 8999,
            image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg',
            rating: 4.8,
            reviews: 1562,
            badge: 'Best Seller'
        },
        {
            id: 'e5',
            name: 'iPad Pro 12.9"',
            description: 'Powerful tablet with M2 chip',
            price: 14999,
            image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
            rating: 4.7,
            reviews: 643
        },
        {
            id: 'e6',
            name: 'Apple Watch Series 9',
            description: 'Smartwatch with health features',
            price: 8999,
            image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
            rating: 4.6,
            reviews: 892
        },
        {
            id: 'e7',
            name: 'Samsung 65" QLED TV',
            description: '4K Ultra HD QLED Smart TV',
            price: 19999,
            image: 'images/ledtv.png',
            rating: 4.5,
            reviews: 342
        },
        {
            id: 'e8',
            name: 'PlayStation 5',
            description: 'Next-gen gaming console',
            price: 18999,
            image: 'images/playstation.png',
            rating: 4.8,
            reviews: 1254,
            badge: 'Hot'
        },
        {
            id: 'e9',
            name: 'JBL Flip 6 Speaker',
            description: 'Portable Bluetooth speaker with deep bass',
            price: 8999,
            image: 'images/jbl.png',
            rating: 4.6,
            reviews: 1124,
            badge: 'Hot Deal'
        },
        {
            id: 'e10',
            name: 'Canon EOS R5',
            description: 'Professional mirrorless camera',
            price: 63990,
            image: 'images/canon.png',
            rating: 4.9,
            reviews: 289
        },
        {
            id: 'e11',
            name: 'GoPro Hero 12',
            description: 'Action camera with 5.3K video',
            price: 29990,
            image: 'images/gopro.png',
            rating: 4.6,
            reviews: 231
        },
        {
            id: 'e12',
            name: 'Kindle Paperwhite',
            description: 'E-reader with adjustable warm light',
            price:8999,
            image: 'images/kindle.png',
            rating: 4.7,
            reviews: 875
        },
        {
            id: 'e13',
            name: 'Bose SoundLink Speaker',
            description: 'Portable Bluetooth speaker',
            price: 8999,
            image: 'images/bose.png',
            rating: 4.5,
            reviews: 643
        },
        {
            id: 'e14',
            name: 'Dell XPS 13',
            description: 'Ultra-portable laptop',
            price: 99499,
            image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
            rating: 4.6,
            reviews: 352
        },
        {
            id: 'e15',
            name: 'Oculus Quest 3',
            description: 'VR headset with immersive experiences',
            price: 12999,
            image: 'images/oculus.png',
            rating: 4.8,
            reviews: 501
        },
        {
            id: 'e16',
            name: 'Anker Power Bank 20,000mAh',
            description: 'High capacity portable charger with fast charging',
            price: 2999,
            image: 'images/powerbank.jpg',
            rating: 4.5,
            reviews: 675,
            badge: 'Hot Deal'
        }
    ],

    // ---------------- FASHION ----------------
    fashion: [
        {
            id: 'f1',
            name: 'Men\'s Formal Suit',
            description: 'Premium wool blend suit',
            price: 4999,
            image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
            rating: 4.5,
            reviews: 456,
            sizes: ['S','M','L','XL','XXL'],
            badge: 'Bestseller'
        },
        {
            id: 'f2',
            name: 'Women\'s Summer Dress',
            description: 'Elegant floral print dress',
            price: 2499,
            image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
            rating: 4.3,
            reviews: 789,
            sizes: ['XS','S','M','L']
        },
        {
            id: 'f3',
            name: 'Designer Leather Jacket',
            description: 'Genuine leather jacket',
            price: 4999,
            image: 'images/jacket.png',
            rating: 4.7,
            reviews: 324,
            sizes: ['S','M','L','XL'],
            badge: 'Premium'
        },
        {
            id: 'f4',
            name: 'Casual Denim Shirt',
            description: 'Comfortable denim shirt',
            price: 1999,
            image: 'images/Casual Denim Shirt.png',
            rating: 4.2,
            reviews: 567,
            sizes: ['S','M','L','XL']
        },
        {
            id: 'f5',
            name: 'Silk Saree',
            description: 'Traditional silk saree',
            price: 4999,
            image: 'images/silksaree.png',
            rating: 4.6,
            reviews: 432,
            sizes: ['Free Size'],
            badge: 'Traditional'
        },
        {
            id: 'f6',
            name: 'Men\'s Hoodie',
            description: 'Casual cotton hoodie',
            price: 1499,
            image: 'images/hoodie.png',
            rating: 4.4,
            reviews: 246,
            sizes: ['S','M','L','XL']
        },
        {
            id: 'f7',
            name: 'Women\'s Jeans',
            description: 'Slim fit denim jeans',
            price: 1999,
            image: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg',
            rating: 4.5,
            reviews: 312,
            sizes: ['28','30','32','34','36']
        },
        {
            id: 'f8',
            name: 'Unisex Sneakers',
            description: 'Trendy sneakers for all-day wear',
            price: 2499,
            image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
            rating: 4.6,
            reviews: 584,
            sizes: ['7','8','9','10','11']
        },
        {
            id: 'f9',
            name: 'Women\'s Kurti',
            description: 'Handloom kurti for festive wear',
            price: 1999,
            image: 'images/kurti.png',
            rating: 4.3,
            reviews: 142,
            sizes: ['S','M','L','XL']
        },
        {
            id: 'f10',
            name: 'Men\'s Polo T-Shirt',
            description: 'Classic breathable cotton polo',
            price: 999,
            image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg',
            rating: 4.5,
            reviews: 321,
            sizes: ['S','M','L','XL']
        },
        {
            id: 'f11',
            name: 'Designer Handbag',
            description: 'Luxury handbag with gold hardware',
            price: 2999,
            image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
            rating: 4.8,
            reviews: 267,
            badge: 'Luxury'
        },
        {
            id: 'f12',
            name: 'Women\'s Winter Coat',
            description: 'Warm winter coat with fur lining',
            price: 3999,
            image: 'images/wintercoat.png',
            rating: 4.5,
            reviews: 189,
            sizes: ['XS','S','M','L','XL'],
            badge: 'Winter Special'
        },
        {
            id: 'f13',
            name: 'Linen Blazer',
            description: 'Lightweight summer blazer',
            price: 2499,
            image: 'images/blazzer.png',
            rating: 4.3,
            reviews: 156,
            sizes: ['S','M','L','XL']
        },
        {
            id: 'f14',
            name: 'Men\'s Casual Shoes',
            description: 'Comfortable casual shoes',
            price: 1999,
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg',
            rating: 4.4,
            reviews: 432,
            sizes: ['8','9','10','11','12']
        },
        {
            id: 'f15',
            name: 'Women\'s Scarf',
            description: 'Silk scarf with patterns',
            price: 799,
            image: 'images/scarf.png',
            rating: 4.2,
            reviews: 88
        },
        {
            id: 'f16',
            name: 'Casual Hoodie',
            description: 'Unisex cotton hoodie for everyday wear',
            price: 1499,
            image: 'images/casualhoodie.png',
            rating: 4.4,
            reviews: 542,
            sizes: ['S','M','L','XL'],
            badge: 'Trending'
        }
    ],

    // ---------------- KIDS ----------------
    kids: [
        {
            id: 'k1',
            name: 'Kids Cartoon T-Shirt',
            description: 'Soft cotton cartoon t-shirt',
            price: 499,
            image: 'images/kidstshirt.png',
            rating: 4.2,
            reviews: 234,
            sizes: ['2-3Y','4-5Y','6-7Y','8-9Y'],
            badge: 'Popular'
        },
        {
            id: 'k2',
            name: 'Children\'s Backpack',
            description: 'Durable school backpack',
            price: 799,
            image: 'images/bag.png',
            rating: 4.4,
            reviews: 167
        },
        {
            id: 'k3',
            name: 'Baby Organic Onesies',
            description: 'Soft organic cotton onesies',
            price: 699,
            image: 'images/organic.png',
            rating: 4.6,
            reviews: 189,
            sizes: ['0-3M','3-6M','6-12M'],
            badge: 'Organic'
        },
        {
            id: 'k4',
            name: 'Kids Rain Boots',
            description: 'Waterproof rain boots with patterns',
            price: 999,
            image: 'images/rainshoes.png',
            rating: 4.3,
            reviews: 98,
            sizes: ['8','9','10','11','12']
        },
        {
            id: 'k5',
            name: 'Children\'s Winter Jacket',
            description: 'Warm jacket with hood',
            price: 1999,
            image: 'images/raincoat.png',
            rating: 4.5,
            reviews: 132,
            sizes: ['2-3Y','4-5Y','6-7Y','8-9Y'],
            badge: 'Winter Sale'
        },
        {
            id: 'k6',
            name: 'Kids Sports Shoes',
            description: 'Lightweight sports shoes',
            price: 1499,
            image: 'images/sportsshoes.png',
            rating: 4.4,
            reviews: 87,
            sizes: ['8','9','10','11','12']
        },
        {
            id: 'k7',
            name: 'Baby Play Gym',
            description: 'Interactive play gym with toys',
            price: 2499,
            image: 'images/playgym.png',
            rating: 4.7,
            reviews: 76
        },
        {
            id: 'k8',
            name: 'Children\'s Smartwatch',
            description: 'GPS tracker watch with games',
            price: 1999,
            image: 'https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg',
            rating: 4.2,
            reviews: 54
        },
        {
            id: 'k9',
            name: 'Kids Art Set',
            description: 'Crayons, markers, and coloring books',
            price: 699,
            image: 'images/art.png',
            rating: 4.6,
            reviews: 143
        },
        {
            id: 'k10',
            name: 'Children\'s Bicycle',
            description: '16-inch bicycle with training wheels',
            price: 4999,
            image: 'images/bicycle.png',
            rating: 4.8,
            reviews: 67,
            badge: 'Best Seller'
        },
        {
            id: 'k11',
            name: 'Kids Puzzle Set',
            description: 'Educational wooden puzzle set',
            price: 599,
            image: 'images/puzzle.png',
            rating: 4.6,
            reviews: 112
        },
        {
            id: 'k12',
            name: 'Kids Sunglasses',
            description: 'UV-protected stylish sunglasses',
            price: 399,
            image: 'images/sunglaees.png',
            rating: 4.4,
            reviews: 89
        },
        {
            id: 'k13',
            name: 'Kids Story Book Set',
            description: 'Pack of 5 story books',
            price: 999,
            image: 'images/books.png',
            rating: 4.7,
            reviews: 241
        },
        {
            id: 'k14',
            name: 'Kids Tent House',
            description: 'Foldable indoor/outdoor tent',
            price: 1999,
            image: 'images/tenthouse.png',
            rating: 4.5,
            reviews: 97
        },
        {
            id: 'k15',
            name: 'Remote Control Car',
            description: 'Fast RC car with rechargeable battery',
            price: 2499,
            image: 'images/car.png',
            rating: 4.8,
            reviews: 156
        },
        {
            id: 'k16',
            name: 'Remote Control Car',
            description: 'Rechargeable RC toy car for kids',
            price: 1199,
            image: 'images/rechargecar.png',
            rating: 4.6,
            reviews: 389,
            badge: 'Best Gift'
        }
    ],

    // ---------------- FOOTWEAR ----------------
    footwear: [
        {
            id: 'ft1',
            name: 'Men\'s Running Shoes',
            description: 'Lightweight running shoes',
            price: 1999,
            image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
            rating: 4.6,
            reviews: 456,
            sizes: ['8','9','10','11','12'],
            badge: 'Bestseller'
        },
        {
            id: 'ft2',
            name: 'Women\'s Heels',
            description: 'Elegant high heels',
            price: 1999,
            image: 'images/heels.png',
            rating: 4.3,
            reviews: 289,
            sizes: ['6','7','8','9']
        },
        {
            id: 'ft3',
            name: 'Sports Sandals',
            description: 'Comfortable sandals for outdoor',
            price: 1299,
            image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
            rating: 4.4,
            reviews: 178,
            sizes: ['8','9','10','11','12']
        },
        {
            id: 'ft4',
            name: 'Formal Leather Shoes',
            description: 'Classic Oxford shoes',
            price: 1999,
            image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg',
            rating: 4.7,
            reviews: 234,
            sizes: ['8','9','10','11'],
            badge: 'Premium'
        },
        {
            id: 'ft5',
            name: 'Hiking Boots',
            description: 'Waterproof hiking boots',
            price: 1999,
            image: 'images/hikingboots.png',
            rating: 4.8,
            reviews: 156,
            sizes: ['8','9','10','11','12']
        },
        {
            id: 'ft6',
            name: 'Women\'s Ballet Flats',
            description: 'Stylish ballet flats',
            price: 1299,
            image: 'images/blanketheels.png',
            rating: 4.5,
            reviews: 267,
            sizes: ['6','7','8','9']
        },
        {
            id: 'ft7',
            name: 'Men\'s Loafers',
            description: 'Classic loafers for casual wear',
            price: 1499,
            image: 'images/loafers.png',
            rating: 4.4,
            reviews: 189,
            sizes: ['8','9','10','11']
        },
        {
            id: 'ft8',
            name: 'Athletic Sneakers',
            description: 'Versatile sneakers',
            price: 1799,
            image: 'images/atletic.png',
            rating: 4.6,
            reviews: 312,
            sizes: ['8','9','10','11','12'],
            badge: 'New'
        },
        {
            id: 'ft9',
            name: 'Women\'s Winter Boots',
            description: 'Insulated winter boots',
            price: 1999,
            image: 'images/womensshoes.png',
            rating: 4.5,
            reviews: 143,
            sizes: ['6','7','8','9']
        },
        {
            id: 'ft10',
            name: 'Men\'s Sandals',
            description: 'Leather sandals for summer',
            price: 1199,
            image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
            rating: 4.3,
            reviews: 98,
            sizes: ['8','9','10','11','12']
        },
        {
            id: 'ft11',
            name: 'Men\'s Slip-on Shoes',
            description: 'Comfort slip-on shoes',
            price: 1499,
            image: 'images/slipshoes.png',
            rating: 4.3,
            reviews: 184,
            sizes: ['7','8','9','10','11']
        },
        {
            id: 'ft12',
            name: 'Women\'s Wedges',
            description: 'Stylish wedges',
            price: 1699,
            image: 'images/wedges.png',
            rating: 4.5,
            reviews: 232,
            sizes: ['5','6','7','8','9']
        },
        {
            id: 'ft13',
            name: 'Kids Sandals',
            description: 'Colorful sandals for kids',
            price: 799,
            image: 'images/kidssandals.png',
            rating: 4.2,
            reviews: 76,
            sizes: ['2','3','4','5']
        },
        {
            id: 'ft14',
            name: 'Unisex Crocs',
            description: 'Comfortable EVA clogs',
            price: 1399,
            image: 'images/crocs.png',
            rating: 4.4,
            reviews: 445,
            sizes: ['6','7','8','9','10']
        },
        {
            id: 'ft15',
            name: 'Men\'s High-top Sneakers',
            description: 'Trendy high-top sneakers',
            price: 1999,
            image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
            rating: 4.7,
            reviews: 312,
            sizes: ['8','9','10','11']
        },
        {
            id: 'ft16',
            name: 'Slip Resistant Work Shoes',
            description: 'Durable shoes for everyday work',
            price: 1899,
            image: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg',
            rating: 4.5,
            reviews: 211,
            sizes: ['7','8','9','10','11'],
            badge: 'New'
        }
    ]
};