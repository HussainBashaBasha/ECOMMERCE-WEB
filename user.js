// User management functionality

// Initialize user state
let currentUser = JSON.parse(localStorage.getItem('user')) || null;

// Function to update user profile
function updateUserProfile(updatedInfo) {
    if (!currentUser) return false;
    
    currentUser = { ...currentUser, ...updatedInfo };
    localStorage.setItem('user', JSON.stringify(currentUser));
    return true;
}

// Function to get user orders
function getUserOrders() {
    if (!currentUser) return [];
    
    const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
    return allOrders.filter(order => order.userId === currentUser.email);
}

// Function to add a new order
function addUserOrder(order) {
    if (!currentUser) return false;
    
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    order.userId = currentUser.email;
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    return true;
}

// Function to update user's wishlist
function updateUserWishlist(product, category, action) {
    if (!currentUser) return false;
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (action === 'add') {
        // Check if product already exists in wishlist
        const exists = wishlist.some(item => 
            item.id === product.id && item.category === category
        );
        
        if (!exists) {
            wishlist.push({
                ...product,
                category,
                userId: currentUser.email
            });
        }
    } else if (action === 'remove') {
        wishlist = wishlist.filter(item => 
            !(item.id === product.id && item.category === category)
        );
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    return true;
}

// Function to get user's wishlist
function getUserWishlist() {
    if (!currentUser) return [];
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist.filter(item => item.userId === currentUser.email);
}

// Function to calculate user's total spending
function getUserTotalSpent() {
    if (!currentUser) return 0;
    
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = orders.filter(order => order.userId === currentUser.email);
    
    return userOrders.reduce((total, order) => total + order.total, 0);
}

// Function to get user's favorite category
function getUserFavoriteCategory() {
    if (!currentUser) return null;
    
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = orders.filter(order => order.userId === currentUser.email);
    
    // Count products by category
    const categoryCount = {};
    
    userOrders.forEach(order => {
        order.items.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
    });
    
    // Find the category with the highest count
    let favoriteCategory = null;
    let maxCount = 0;
    
    for (const category in categoryCount) {
        if (categoryCount[category] > maxCount) {
            maxCount = categoryCount[category];
            favoriteCategory = category;
        }
    }
    
    return favoriteCategory;
}

// Function to get user's loyalty tier
function getUserLoyaltyTier() {
    const totalSpent = getUserTotalSpent();
    
    if (totalSpent >= 100000) return 'Platinum';
    if (totalSpent >= 50000) return 'Gold';
    if (totalSpent >= 20000) return 'Silver';
    return 'Bronze';
}

// Function to get loyalty benefits
function getLoyaltyBenefits(tier) {
    const benefits = {
        'Bronze': {
            discount: '5%',
            shipping: 'Free shipping on orders above ₹999',
            returns: '30 days return policy'
        },
        'Silver': {
            discount: '10%',
            shipping: 'Free shipping on all orders',
            returns: '45 days return policy',
            earlyAccess: 'Early access to sales'
        },
        'Gold': {
            discount: '15%',
            shipping: 'Free express shipping on all orders',
            returns: '60 days return policy',
            earlyAccess: 'Early access to sales and new arrivals',
            personalShopper: 'Personal shopping assistance'
        },
        'Platinum': {
            discount: '20%',
            shipping: 'Free priority shipping on all orders',
            returns: '90 days return policy',
            earlyAccess: 'First access to limited editions',
            personalShopper: 'Dedicated personal shopper',
            events: 'Invitations to exclusive events',
            gifts: 'Birthday gifts and surprises'
        }
    };
    
    return benefits[tier] || benefits['Bronze'];
}

// Export functions for use in other files
window.userModule = {
    currentUser,
    updateUserProfile,
    getUserOrders,
    addUserOrder,
    updateUserWishlist,
    getUserWishlist,
    getUserTotalSpent,
    getUserFavoriteCategory,
    getUserLoyaltyTier,
    getLoyaltyBenefits
};