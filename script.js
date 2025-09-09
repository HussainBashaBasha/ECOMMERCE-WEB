// DOM Elements
const splashScreen = document.querySelector('.splash-screen');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCartBtn = document.querySelector('.close-cart');
const cartIcon = document.querySelector('.cart-icon-container');
const wishlistIcon = document.querySelector('.wishlist-icon-container');
const userIcon = document.querySelector('.user-icon-container');
const cartItemsContainer = document.querySelector('.cart-items');
const cartCount = document.querySelectorAll('.cart-count');
const wishlistCount = document.querySelector('.wishlist-count');
const cartTotal = document.querySelector('.cart-total span');
const checkoutBtn = document.querySelector('.checkout-btn');
const modals = document.querySelectorAll('.modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const logoutBtn = document.querySelector('.logout-btn');
const viewOrdersBtn = document.querySelector('.view-orders-btn');
const viewWishlistBtn = document.querySelector('.view-wishlist-btn');
const editBtns = document.querySelectorAll('.edit-btn');
const saveProfileBtn = document.querySelector('.save-profile-btn');
const placeOrderBtn = document.querySelector('.place-order-btn');
const continueShoppingBtn = document.querySelector('.continue-shopping-btn');
const notification = document.querySelector('.notification');
const loadingSpinner = document.getElementById('loading-spinner');

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let user = JSON.parse(localStorage.getItem('user')) || null;
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Initialize the application
function init() {
    updateCartUI();
    updateWishlistUI();
    loadProducts();
    setupEventListeners();
    
    // Hide splash screen after 2.5 seconds
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 2500);
}

// Setup all event listeners
function setupEventListeners() {
    // Cart functionality
    cartIcon.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', openCheckoutModal);
    
    // Modal functionality
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });
    
    // User functionality
    userIcon.addEventListener('click', () => {
        if (user) {
            openProfileModal();
        } else {
            openLoginModal();
        }
    });
    
    loginBtn?.addEventListener('click', handleLogin);
    registerBtn?.addEventListener('click', handleRegister);
    logoutBtn?.addEventListener('click', handleLogout);
    viewOrdersBtn?.addEventListener('click', openOrdersModal);
    viewWishlistBtn?.addEventListener('click', openWishlistModal);
    
    // Edit profile functionality
    editBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const field = e.target.dataset.field;
            openEditModal(field);
        });
    });
    
    saveProfileBtn?.addEventListener('click', saveProfile);
    placeOrderBtn?.addEventListener('click', placeOrder);
    continueShoppingBtn?.addEventListener('click', () => {
        closeAllModals();
        showNotification('Continue shopping!', 'info');
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    // Category navigation
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            document.querySelector(targetId)?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Load products from products.js
function loadProducts() {
    const sections = ['electronics', 'fashion', 'kids', 'footwear'];
    
    sections.forEach(section => {
        const container = document.querySelector(`#${section} .product-container`);
        if (container && window.products && window.products[section]) {
            container.innerHTML = '';
            
            window.products[section].forEach(product => {
                const productElement = createProductElement(product, section);
                container.appendChild(productElement);
            });
        }
    });
    
    // Create deals section
    createDealsSection();
}

// Create product element
function createProductElement(product, category) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.dataset.id = product.id;
    productDiv.dataset.category = category;
    
    // Check if product is in wishlist
    const isInWishlist = wishlist.some(item => item.id === product.id && item.category === category);
    
    productDiv.innerHTML = `
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" aria-label="Add to wishlist">
            <i class="fas fa-heart"></i>
        </button>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <div class="description">${product.description}</div>
        <div class="product-rating">
            ${getRatingStars(product.rating)}
            <span>(${product.reviews} reviews)</span>
        </div>
        <div class="price">₹${product.price.toLocaleString()}</div>
        <div class="product-actions">
            ${product.sizes ? `
                <select class="size-select" aria-label="Select size">
                    <option value="">Select Size</option>
                    ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
            ` : ''}
            <button class="add-to-cart" aria-label="Add to cart">Add to Cart</button>
        </div>
    `;
    
    // Add event listeners
    const wishlistBtn = productDiv.querySelector('.wishlist-btn');
    const addToCartBtn = productDiv.querySelector('.add-to-cart');
    
    wishlistBtn.addEventListener('click', () => {
        toggleWishlist(product, category, wishlistBtn);
    });
    
    addToCartBtn.addEventListener('click', () => {
        const sizeSelect = productDiv.querySelector('.size-select');
        const selectedSize = sizeSelect ? sizeSelect.value : null;
        
        if (sizeSelect && !selectedSize) {
            showNotification('Please select a size first', 'error');
            return;
        }
        
        addToCart(product, category, selectedSize);
        showNotification(`${product.name} added to cart!`, 'success');
    });
    
    return productDiv;
}

// Get rating stars HTML
function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Create deals section
function createDealsSection() {
    const main = document.querySelector('main');
    const dealsSection = document.createElement('section');
    dealsSection.id = 'deals';
    dealsSection.className = 'product-section';
    
    dealsSection.innerHTML = `
        <h2 class="section-title">Special Deals</h2>
        <div class="product-container">
            <!-- Deals will be loaded here -->
        </div>
    `;
    
    main.appendChild(dealsSection);
    
    // Get 8 random products from all categories for deals
    const allProducts = [];
    Object.values(window.products).forEach(categoryProducts => {
        allProducts.push(...categoryProducts);
    });
    
    // Shuffle and pick 4 products
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    const selectedDeals = shuffled.slice(0, 8);
    
    const dealsContainer = dealsSection.querySelector('.product-container');
    
    selectedDeals.forEach(product => {
        // Find which category this product belongs to
        let category = '';
        for (const [cat, products] of Object.entries(window.products)) {
            if (products.some(p => p.id === product.id)) {
                category = cat;
                break;
            }
        }
        
        // Apply discount (30% off)
        const discountPercent = 30;
        const discountedPrice = Math.round(product.price - (product.price * discountPercent / 100));
        
        // Create product element manually (to add strike-through)
        const productDiv = document.createElement('div');
        productDiv.className = 'product deal';
        productDiv.dataset.id = product.id;
        productDiv.dataset.category = category;
        
        productDiv.innerHTML = `
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <div class="description">${product.description}</div>
            <div class="product-rating">
                ${getRatingStars(product.rating)}
                <span>(${product.reviews} reviews)</span>
            </div>
            <div class="price">
                <span class="original-price" style="text-decoration: line-through; color: gray; margin-right: 8px;">
                    ₹${product.price.toLocaleString()}
                </span>
                <span class="deal-price" style="color: #d32f2f; font-weight: bold;">
                    ₹${discountedPrice.toLocaleString()}
                </span>
            </div>
            <div class="product-actions">
                <button class="add-to-cart" aria-label="Add to cart">Add to Cart</button>
            </div>
        `;
        
        // Add to cart button logic
        const addToCartBtn = productDiv.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            addToCart(product, category);
            showNotification(`${product.name} added to cart!`, 'success');
        });

        dealsContainer.appendChild(productDiv);
    });
}

// Cart functionality
function openCart() {
    cartSidebar.classList.add('open');
}

function closeCart() {
    cartSidebar.classList.remove('open');
}

function addToCart(product, category, size = null) {
    const existingItem = cart.find(item => 
        item.id === product.id && 
        item.category === category && 
        item.size === size
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            category,
            size,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveToLocalStorage('cart', cart);
}

function removeFromCart(productId, category, size) {
    cart = cart.filter(item => 
        !(item.id === productId && item.category === category && item.size === size)
    );
    
    updateCartUI();
    saveToLocalStorage('cart', cart);
}

function updateCartQuantity(productId, category, size, change) {
    const item = cart.find(item => 
        item.id === productId && 
        item.category === category && 
        item.size === size
    );
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId, category, size);
        } else {
            updateCartUI();
            saveToLocalStorage('cart', cart);
        }
    }
}

function updateCartUI() {
    const cartItems = document.querySelector('.cart-items');
    const emptyCart = document.querySelector('.empty-cart');
    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = '';
        checkoutBtn.disabled = false;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">₹${item.price.toLocaleString()} x ${item.quantity}</div>
                    ${item.size ? `<div class="item-size">Size: ${item.size}</div>` : ''}
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease" aria-label="Decrease quantity">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <button class="remove-item" aria-label="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            // Add event listeners
            const decreaseBtn = cartItem.querySelector('.decrease');
            const increaseBtn = cartItem.querySelector('.increase');
            const removeBtn = cartItem.querySelector('.remove-item');
            
            decreaseBtn.addEventListener('click', () => {
                updateCartQuantity(item.id, item.category, item.size, -1);
            });
            
            increaseBtn.addEventListener('click', () => {
                updateCartQuantity(item.id, item.category, item.size, 1);
            });
            
            removeBtn.addEventListener('click', () => {
                removeFromCart(item.id, item.category, item.size);
                showNotification(`${item.name} removed from cart`, 'info');
            });
            
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update cart count and total
    const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.forEach(el => el.textContent = cartItemsCount);
    cartTotal.textContent = total.toLocaleString();
}

// Wishlist functionality
function toggleWishlist(product, category, button) {
    const existingIndex = wishlist.findIndex(item => 
        item.id === product.id && item.category === category
    );
    
    if (existingIndex >= 0) {
        wishlist.splice(existingIndex, 1);
        button.classList.remove('active');
        showNotification(`${product.name} removed from wishlist`, 'info');
    } else {
        wishlist.push({
            ...product,
            category
        });
        button.classList.add('active');
        showNotification(`${product.name} added to wishlist!`, 'success');
    }
    
    updateWishlistUI();
    saveToLocalStorage('wishlist', wishlist);
}

function updateWishlistUI() {
    const wishlistItemsCount = wishlist.length;
    wishlistCount.textContent = wishlistItemsCount;
}

// Modal functionality
function openLoginModal() {
    closeAllModals();
    document.getElementById('login-modal').classList.add('active');
}

function openProfileModal() {
    closeAllModals();
    
    if (user) {
        document.getElementById('profile-email').textContent = user.email;
        document.getElementById('profile-phone').textContent = user.phone || 'Not provided';
        document.getElementById('profile-address').textContent = user.address || 'Not provided';
        
        // Calculate total spent
        const totalSpent = orders.reduce((total, order) => total + order.total, 0);
        document.getElementById('profile-total-spent').textContent = `₹${totalSpent.toLocaleString()}`;
        
        document.getElementById('profile-modal').classList.add('active');
    } else {
        openLoginModal();
    }
}

function openEditModal(field) {
    closeAllModals();
    
    if (user) {
        document.getElementById('edit-phone').value = user.phone || '';
        document.getElementById('edit-address').value = user.address || '';
        
        document.getElementById('edit-modal').classList.add('active');
    }
}

function openOrdersModal() {
    closeAllModals();
    
    const ordersList = document.querySelector('.orders-list');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<div class="empty-orders">You haven\'t placed any orders yet</div>';
    } else {
        ordersList.innerHTML = '';
        
        orders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.className = 'order-card';
            
            // Format date
            const orderDate = new Date(order.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Status class
            let statusClass = '';
            let statusText = '';
            
            if (order.status === 'delivered') {
                statusClass = 'status-delivered';
                statusText = 'Delivered';
            } else if (order.status === 'pending') {
                statusClass = 'status-pending';
                statusText = 'Pending';
            } else if (order.status === 'cancelled') {
                statusClass = 'status-cancelled';
                statusText = 'Cancelled';
            }
            
            orderElement.innerHTML = `
                <div class="order-header">
                    <div class="order-id">Order #${order.id}</div>
                    <div class="order-date">${orderDate}</div>
                    <div class="order-status ${statusClass}">${statusText}</div>
                </div>
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="order-item-info">
                                <div class="order-item-name">${item.name}</div>
                                <div class="order-item-price">₹${item.price.toLocaleString()} x ${item.quantity}</div>
                                ${item.size ? `<div class="item-size">Size: ${item.size}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-footer">
                    <span>Total Paid:</span>
                    <span>₹${order.total.toLocaleString()}</span>
                </div>
            `;
            
            ordersList.appendChild(orderElement);
        });
    }
    
    document.getElementById('orders-modal').classList.add('active');
}

function openWishlistModal() {
    closeAllModals();
    
    const wishlistItemsContainer = document.querySelector('.wishlist-items');
    
    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = '<div class="empty-wishlist">Your wishlist is empty</div>';
    } else {
        wishlistItemsContainer.innerHTML = '';
        
        wishlist.forEach(item => {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            
            wishlistItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="wishlist-item-info">
                    <div class="wishlist-item-name">${item.name}</div>
                    <div class="wishlist-item-price">₹${item.price.toLocaleString()}</div>
                    <div class="wishlist-item-actions">
                        <button class="add-to-cart-from-wishlist">Add to Cart</button>
                        <button class="remove-from-wishlist">Remove</button>
                    </div>
                </div>
            `;
            
            // Add event listeners
            const addToCartBtn = wishlistItem.querySelector('.add-to-cart-from-wishlist');
            const removeBtn = wishlistItem.querySelector('.remove-from-wishlist');
            
            addToCartBtn.addEventListener('click', () => {
                addToCart(item, item.category);
                showNotification(`${item.name} added to cart!`, 'success');
            });
            
            removeBtn.addEventListener('click', () => {
                // Find the product element to update its wishlist button
                const productElement = document.querySelector(`.product[data-id="${item.id}"][data-category="${item.category}"]`);
                if (productElement) {
                    const wishlistBtn = productElement.querySelector('.wishlist-btn');
                    wishlistBtn.classList.remove('active');
                }
                
                // Remove from wishlist
                const index = wishlist.findIndex(w => w.id === item.id && w.category === item.category);
                if (index >= 0) {
                    wishlist.splice(index, 1);
                    updateWishlistUI();
                    saveToLocalStorage('wishlist', wishlist);
                    
                    // Refresh wishlist modal
                    openWishlistModal();
                    
                    showNotification(`${item.name} removed from wishlist`, 'info');
                }
            });
            
            wishlistItemsContainer.appendChild(wishlistItem);
        });
    }
    
    document.getElementById('wishlist-modal').classList.add('active');
}

function openCheckoutModal() {
    closeAllModals();
    closeCart();
    
    if (!user) {
        openLoginModal();
        showNotification('Please login to proceed to checkout', 'error');
        return;
    }
    
    // Calculate total
    const itemsTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = 50;
    const total = itemsTotal + deliveryFee;
    
    document.getElementById('checkout-items-total').textContent = `₹${itemsTotal.toLocaleString()}`;
    document.getElementById('checkout-total').textContent = `₹${total.toLocaleString()}`;
    
    // Pre-fill user details
    document.getElementById('delivery-name').value = user.name || '';
    document.getElementById('delivery-phone').value = user.phone || '';
    document.getElementById('delivery-address').value = user.address || '';
    
    // Set minimum delivery date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    document.getElementById('delivery-date').min = minDate;
    
    document.getElementById('checkout-modal').classList.add('active');
}

function closeAllModals() {
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
}

// User functionality
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        showNotification('Please enter both email and password', 'error');
        return;
    }
    
    // In a real app, this would be an API call
    user = {
        email,
        name: email.split('@')[0],
        phone: '',
        address: ''
    };
    
    saveToLocalStorage('user', user);
    closeAllModals();
    showNotification('Login successful!', 'success');
}

function handleRegister() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        showNotification('Please enter both email and password', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters', 'error');
        return;
    }
    
    // In a real app, this would be an API call
    user = {
        email,
        name: email.split('@')[0],
        phone: '',
        address: ''
    };
    
    saveToLocalStorage('user', user);
    closeAllModals();
    showNotification('Registration successful!', 'success');
}

function handleLogout() {
    user = null;
    saveToLocalStorage('user', null);
    closeAllModals();
    showNotification('Logged out successfully', 'info');
}

function saveProfile() {
    const phone = document.getElementById('edit-phone').value;
    const address = document.getElementById('edit-address').value;
    
    if (!user) {
        showNotification('Please login first', 'error');
        openLoginModal();
        return;
    }
    
    user.phone = phone;
    user.address = address;
    
    saveToLocalStorage('user', user);
    closeAllModals();
    openProfileModal();
    showNotification('Profile updated successfully!', 'success');
}
// Order functionality
function placeOrder() {
    const name = document.getElementById('delivery-name').value.trim();
    const phone = document.getElementById('delivery-phone').value.trim();
    const address = document.getElementById('delivery-address').value.trim();
    const deliveryDate = document.getElementById('delivery-date').value;

    if (!name || !phone || !address || !deliveryDate) {
        showNotification('Please fill all delivery information', 'error');
        return;
    }

    // Validate phone number (must be 10 digits, numbers only)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        showNotification('Please enter a valid 10-digit phone number (numbers only)', 'error');
        return;
    }

    // Update user info if changed
    user.name = name;
    user.phone = phone;
    user.address = address;
    saveToLocalStorage('user', user);


    
    // Create order
    const itemsTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = 50;
    const total = itemsTotal + deliveryFee;
    
    const order = {
        id: generateOrderId(),
        date: new Date().toISOString(),
        items: [...cart],
        total,
        status: 'pending',
        deliveryDate
    };
    
    orders.push(order);
    saveToLocalStorage('orders', orders);
    
    // Clear cart
    cart = [];
    updateCartUI();
    saveToLocalStorage('cart', cart);
    
    // Show success modal
    closeAllModals();
    
    document.getElementById('order-id').textContent = order.id;
    
    const estimatedDelivery = new Date(deliveryDate).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    document.getElementById('estimated-delivery').textContent = estimatedDelivery;
    document.getElementById('order-success-modal').classList.add('active');
}

// Utility functions
function generateOrderId() {
    return 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = 'notification show ' + type;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function performSearch(query) {
    if (!query.trim()) {
        showNotification('Please enter a search term', 'error');
        return;
    }
    
    // Show loading
    loadingSpinner.classList.add('show');
    
    // Simulate search (in a real app, this would be an API call)
    setTimeout(() => {
        loadingSpinner.classList.remove('show');
        
        const results = [];
        Object.entries(window.products).forEach(([category, products]) => {
            products.forEach(product => {
                if (product.name.toLowerCase().includes(query.toLowerCase()) || 
                    product.description.toLowerCase().includes(query.toLowerCase())) {
                    results.push({...product, category});
                }
            });
        });
        
        if (results.length === 0) {
            showNotification(`No results found for "${query}"`, 'error');
        } else {
            // Create a temporary section to display search results
            let searchSection = document.getElementById('search-results');
            
            if (!searchSection) {
                searchSection = document.createElement('section');
                searchSection.id = 'search-results';
                searchSection.className = 'product-section';
                document.querySelector('main').prepend(searchSection);
            }
            
            searchSection.innerHTML = `
                <h2 class="section-title">Search Results for "${query}"</h2>
                <div class="product-container">
                    ${results.map(product => {
                        const productElement = createProductElement(product, product.category);
                        return productElement.outerHTML;
                    }).join('')}
                </div>
            `;
            
            // Scroll to results
            searchSection.scrollIntoView({ behavior: 'smooth' });
            
            // Reattach event listeners to the new product elements
            setTimeout(() => {
                document.querySelectorAll('#search-results .product').forEach(productEl => {
                    const productId = productEl.dataset.id;
                    const category = productEl.dataset.category;
                    
                    const product = results.find(p => p.id === productId && p.category === category);
                    if (product) {
                        const wishlistBtn = productEl.querySelector('.wishlist-btn');
                        const addToCartBtn = productEl.querySelector('.add-to-cart');
                        const sizeSelect = productEl.querySelector('.size-select');
                        
                        wishlistBtn.addEventListener('click', () => {
                            toggleWishlist(product, category, wishlistBtn);
                        });
                        
                        addToCartBtn.addEventListener('click', () => {
                            const selectedSize = sizeSelect ? sizeSelect.value : null;
                            
                            if (sizeSelect && !selectedSize) {
                                showNotification('Please select a size first', 'error');
                                return;
                            }
                            
                            addToCart(product, category, selectedSize);
                            showNotification(`${product.name} added to cart!`, 'success');
                        });
                    }
                });
            }, 100);
            
            showNotification(`Found ${results.length} results for "${query}"`, 'success');
        }
    }, 1000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);