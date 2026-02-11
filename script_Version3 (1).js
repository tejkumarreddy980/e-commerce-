// Product Database with Real Shoe Images and Brand Names
const products = [
    {
        id: 1,
        name: "Nike Revolution 6",
        brand: "Nike",
        category: "men",
        price: 1299,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        description: "Comfortable and durable Nike running shoes for everyday use with excellent grip and cushioning.",
        stock: 25,
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ["Black", "White", "Blue", "Red"],
        reviews: []
    },
    {
        id: 2,
        name: "Adidas Ultraboost Women",
        brand: "Adidas",
        category: "women",
        price: 1199,
        image: "https://images.unsplash.com/photo-1560769132-c4a137fdc9c3?w=500&h=500&fit=crop",
        description: "Lightweight and stylish Adidas sneakers for active women with responsive cushioning.",
        stock: 30,
        sizes: [4, 5, 6, 7, 8, 9, 10],
        colors: ["Pink", "White", "Purple", "Black"],
        reviews: []
    },
    {
        id: 3,
        name: "Puma Kids Runner",
        brand: "Puma",
        category: "kids",
        price: 749,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
        description: "Fun and colorful Puma shoes for kids with comfortable padding and durable design.",
        stock: 40,
        sizes: [1, 2, 3, 4, 5, 6],
        colors: ["Red", "Blue", "Yellow", "Green"],
        reviews: []
    },
    {
        id: 4,
        name: "Clarks Formal Oxford",
        brand: "Clarks",
        category: "men",
        price: 2499,
        image: "https://images.unsplash.com/photo-1533441716259-f8db4dc82e8e?w=500&h=500&fit=crop",
        description: "Premium leather Clarks Oxford shoes for professional occasions with elegant design.",
        stock: 15,
        sizes: [7, 8, 9, 10, 11, 12],
        colors: ["Black", "Brown", "Tan"],
        reviews: []
    },
    {
        id: 5,
        name: "Steve Madden Heeled Pumps",
        brand: "Steve Madden",
        category: "women",
        price: 1899,
        image: "https://images.unsplash.com/photo-1561729784-2f91fc648235?w=500&h=500&fit=crop",
        description: "Elegant Steve Madden heeled pumps for formal events with comfortable heel height.",
        stock: 20,
        sizes: [4, 5, 6, 7, 8, 9],
        colors: ["Black", "Red", "Gold", "Silver"],
        reviews: []
    },
    {
        id: 6,
        name: "Puma Future Soccer Cleats",
        brand: "Puma",
        category: "kids",
        price: 999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        description: "Professional Puma soccer cleats for young players with superior grip and control.",
        stock: 35,
        sizes: [2, 3, 4, 5, 6],
        colors: ["Black", "Blue", "Red"],
        reviews: []
    },
    {
        id: 7,
        name: "Nike LeBron Basketball Shoes",
        brand: "Nike",
        category: "men",
        price: 2199,
        image: "https://images.unsplash.com/photo-1542611519227-7fab3e4e41d8?w=500&h=500&fit=crop",
        description: "High-performance Nike basketball shoes with ankle support and advanced cushioning technology.",
        stock: 22,
        sizes: [7, 8, 9, 10, 11, 12, 13],
        colors: ["Black", "White", "Orange", "Purple"],
        reviews: []
    },
    {
        id: 8,
        name: "Skechers Casual Loafers",
        brand: "Skechers",
        category: "women",
        price: 1399,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
        description: "Comfortable Skechers loafers for everyday wear with breathable material and memory foam.",
        stock: 28,
        sizes: [4, 5, 6, 7, 8, 9],
        colors: ["Brown", "Black", "Gray"],
        reviews: []
    },
    {
        id: 9,
        name: "Timberland Casual Boots",
        brand: "Timberland",
        category: "men",
        price: 2799,
        image: "https://images.unsplash.com/photo-1544441893-3a9c54e5b375?w=500&h=500&fit=crop",
        description: "Stylish Timberland casual boots perfect for outdoor adventures and casual outings.",
        stock: 18,
        sizes: [7, 8, 9, 10, 11, 12],
        colors: ["Brown", "Black", "Tan"],
        reviews: []
    },
    {
        id: 10,
        name: "Crocs Women Sandals",
        brand: "Crocs",
        category: "women",
        price: 849,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=500&fit=crop",
        description: "Comfortable Crocs sandals for summer with soft cushioned footbed and lightweight design.",
        stock: 32,
        sizes: [4, 5, 6, 7, 8, 9],
        colors: ["Blue", "Black", "Tan", "White"],
        reviews: []
    },
    {
        id: 11,
        name: "Bata School Shoes",
        brand: "Bata",
        category: "kids",
        price: 649,
        image: "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?w=500&h=500&fit=crop",
        description: "Durable Bata school shoes designed for daily use with maximum comfort and support.",
        stock: 45,
        sizes: [1, 2, 3, 4, 5],
        colors: ["Black", "Brown", "Navy"],
        reviews: []
    },
    {
        id: 12,
        name: "Adidas Running Shoes",
        brand: "Adidas",
        category: "men",
        price: 1599,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        description: "Versatile Adidas sports shoes suitable for gym and casual activities with responsive cushioning.",
        stock: 26,
        sizes: [6, 7, 8, 9, 10, 11, 12],
        colors: ["Black", "White", "Gray", "Green"],
        reviews: []
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let currentProductDetail = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount();
    checkUserStatus();
});

// Display Products
function displayProducts(productsToDisplay) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    if (productsToDisplay.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem;">No products found.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-brand-badge">${product.brand}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <p class="product-price">₹${product.price.toFixed(2)}</p>
                <p class="product-stock">Stock: ${product.stock}</p>
                <div class="product-actions">
                    <button class="view-details-btn" onclick="viewProductDetails(${product.id})">Details</button>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filter Products
function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;

    let filtered = products.filter(product => {
        let matchesSearch = product.name.toLowerCase().includes(searchInput) || 
                          product.brand.toLowerCase().includes(searchInput);
        let matchesCategory = categoryFilter === '' || product.category === categoryFilter;
        let matchesPrice = true;

        if (priceFilter) {
            const [min, max] = priceFilter.split('-').map(Number);
            matchesPrice = product.price >= min && (max ? product.price <= max : true);
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort
    if (sortFilter === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortFilter === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

// Filter by Category
function filterByCategory(category) {
    document.getElementById('categoryFilter').value = category;
    filterProducts();
}

// Reset Filters
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('sortFilter').value = 'newest';
    displayProducts(products);
}

// View Product Details
function viewProductDetails(productId) {
    currentProductDetail = products.find(p => p.id === productId);
    if (!currentProductDetail) return;

    document.getElementById('modalProductImage').src = currentProductDetail.image;
    document.getElementById('modalProductName').innerHTML = `<span class="brand-label">${currentProductDetail.brand}</span> ${currentProductDetail.name}`;
    document.getElementById('modalProductDescription').textContent = currentProductDetail.description;
    document.getElementById('modalProductPrice').textContent = `₹${currentProductDetail.price.toFixed(2)}`;
    document.getElementById('modalProductStock').textContent = `Stock: ${currentProductDetail.stock}`;

    // Populate sizes
    const sizeSelect = document.getElementById('sizeSelect');
    sizeSelect.innerHTML = '<option value="">Select Size</option>';
    currentProductDetail.sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
    });

    // Populate colors
    const colorSelect = document.getElementById('colorSelect');
    colorSelect.innerHTML = '<option value="">Select Color</option>';
    currentProductDetail.colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

    // Reset quantity
    document.getElementById('quantityInput').value = 1;

    // Display reviews
    displayReviews();

    openProductModal();
}

// Display Reviews
function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = '';

    if (currentProductDetail.reviews.length === 0) {
        reviewsList.innerHTML = '<p style="color: #999;">No reviews yet. Be the first to review!</p>';
        return;
    }

    currentProductDetail.reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-item';
        reviewDiv.innerHTML = `
            <p><strong>${review.author}</strong> <span class="review-rating">${'⭐'.repeat(review.rating)}</span></p>
            <p>${review.text}</p>
            <small style="color: #999;">${new Date(review.date).toLocaleDateString()}</small>
        `;
        reviewsList.appendChild(reviewDiv);
    });
}

// Add Review
function addReview() {
    const text = document.getElementById('reviewText').value.trim();
    const rating = parseInt(document.getElementById('reviewRating').value);

    if (!currentUser) {
        alert('Please login to add a review');
        toggleAuth();
        return;
    }

    if (!text) {
        alert('Please enter a review');
        return;
    }

    const review = {
        author: currentUser.name,
        text: text,
        rating: rating,
        date: new Date()
    };

    currentProductDetail.reviews.push(review);
    document.getElementById('reviewText').value = '';
    displayReviews();
    alert('Review added successfully!');
}

// Add to Cart from Modal
function addToCartFromModal() {
    const size = document.getElementById('sizeSelect').value;
    const color = document.getElementById('colorSelect').value;
    const quantity = parseInt(document.getElementById('quantityInput').value);

    if (!size || !color) {
        alert('Please select size and color');
        return;
    }

    const cartItem = {
        id: currentProductDetail.id,
        name: currentProductDetail.name,
        brand: currentProductDetail.brand,
        price: currentProductDetail.price,
        image: currentProductDetail.image,
        size: size,
        color: color,
        quantity: quantity
    };

    addToCartItem(cartItem);
    closeProductModal();
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        size: product.sizes[0],
        color: product.colors[0],
        quantity: 1
    };

    addToCartItem(cartItem);
}

// Add Item to Cart
function addToCartItem(cartItem) {
    const existingItem = cart.find(item => 
        item.id === cartItem.id && 
        item.size === cartItem.size && 
        item.color === cartItem.color
    );

    if (existingItem) {
        existingItem.quantity += cartItem.quantity;
    } else {
        cart.push(cartItem);
    }

    saveCart();
    updateCartCount();
    alert(`${cartItem.brand} ${cartItem.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Save Cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Toggle Cart
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.classList.contains('show')) {
        closeCart();
    } else {
        openCart();
    }
}

// Open Cart
function openCart() {
    displayCartItems();
    document.getElementById('cartModal').classList.add('show');
}

// Close Cart
function closeCart() {
    document.getElementById('cartModal').classList.remove('show');
}

// Display Cart Items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 2rem;">Your cart is empty</p>';
        updateCartSummary();
        return;
    }

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.brand} - ${item.name}</h4>
                <p>Size: ${item.size} | Color: ${item.color}</p>
                <p class="cart-item-price">₹${item.price.toFixed(2)}</p>
                <p>Quantity: <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    updateCartSummary();
}

// Update Quantity
function updateQuantity(index, newQuantity) {
    const quantity = parseInt(newQuantity);
    if (quantity <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = quantity;
        saveCart();
        updateCartCount();
        displayCartItems();
    }
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    displayCartItems();
}

// Update Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? 100 : 0;
    const tax = subtotal * 0.12;
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `₹${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
}

// Proceed to Checkout
function proceedToCheckout() {
    if (!currentUser) {
        alert('Please login to checkout');
        closeCart();
        toggleAuth();
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    closeCart();
    openCheckout();
}

// Toggle Auth
function toggleAuth() {
    const authModal = document.getElementById('authModal');
    if (authModal.classList.contains('show')) {
        closeAuth();
    } else {
        openAuth();
    }
}

// Open Auth
function openAuth() {
    document.getElementById('authModal').classList.add('show');
    if (currentUser) {
        showUserProfile();
    } else {
        showLoginForm();
    }
}

// Close Auth
function closeAuth() {
    document.getElementById('authModal').classList.remove('show');
}

// Switch Auth Tab
function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');

    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}

// Show Login Form
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('userProfile').style.display = 'none';
}

// Show User Profile
function showUserProfile() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('userProfile').style.display = 'block';
    document.getElementById('userName').textContent = currentUser.name;
}

// Check User Status
function checkUserStatus() {
    if (currentUser) {
        showUserProfile();
    }
}

// Login
function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const message = document.getElementById('loginMessage');

    if (!email || !password) {
        message.textContent = 'Please fill in all fields';
        message.style.color = '#e74c3c';
        return;
    }

    currentUser = {
        id: Math.random(),
        name: email.split('@')[0],
        email: email
    };

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    message.textContent = 'Login successful!';
    message.style.color = '#27ae60';
    setTimeout(() => {
        showUserProfile();
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
    }, 500);
}

// Register
function register() {
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const password2 = document.getElementById('registerPassword2').value.trim();
    const message = document.getElementById('registerMessage');

    if (!name || !email || !password || !password2) {
        message.textContent = 'Please fill in all fields';
        message.style.color = '#e74c3c';
        return;
    }

    if (password !== password2) {
        message.textContent = 'Passwords do not match';
        message.style.color = '#e74c3c';
        return;
    }

    currentUser = {
        id: Math.random(),
        name: name,
        email: email
    };

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    message.textContent = 'Registration successful!';
    message.style.color = '#27ae60';
    setTimeout(() => {
        showUserProfile();
        document.getElementById('registerName').value = '';
        document.getElementById('registerEmail').value = '';
        document.getElementById('registerPassword').value = '';
        document.getElementById('registerPassword2').value = '';
    }, 500);
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    closeAuth();
    alert('Logged out successfully!');
}

// View Orders
function viewOrders() {
    document.getElementById('ordersList').innerHTML = '';
    
    if (orders.length === 0) {
        document.getElementById('ordersList').innerHTML = '<p style="text-align: center; padding: 2rem;">No orders yet.</p>';
    } else {
        orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order-item';
            const itemsList = order.items.map(item => `${item.brand} ${item.name}`).join(', ');
            orderDiv.innerHTML = `
                <h4>Order #${order.id}</h4>
                <p>Date: ${new Date(order.date).toLocaleDateString()}</p>
                <p>Items: ${itemsList}</p>
                <p>Total: ₹${order.total.toFixed(2)}</p>
                <span class="order-status">${order.status}</span>
            `;
            document.getElementById('ordersList').appendChild(orderDiv);
        });
    }
    
    document.getElementById('ordersModal').classList.add('show');
}

// Open Product Modal
function openProductModal() {
    document.getElementById('productModal').classList.add('show');
}

// Close Product Modal
function closeProductModal() {
    document.getElementById('productModal').classList.remove('show');
}

// Open Checkout
function openCheckout() {
    document.getElementById('checkoutModal').classList.add('show');
}

// Close Checkout
function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('show');
}

// Close Orders
function closeOrders() {
    document.getElementById('ordersModal').classList.remove('show');
}

// Place Order
function placeOrder(event) {
    event.preventDefault();

    if (!currentUser) {
        alert('Please login to place an order');
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    const country = document.getElementById('country').value;

    if (!fullName || !email || !phone || !street || !city || !state || !zipCode || !country) {
        alert('Please fill in all fields');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 100;
    const tax = subtotal * 0.12;
    const total = subtotal + shipping + tax;

    const order = {
        id: Math.floor(Math.random() * 100000),
        userId: currentUser.id,
        items: [...cart],
        total: total,
        shippingAddress: {
            name: fullName,
            email: email,
            phone: phone,
            street: street,
            city: city,
            state: state,
            zipCode: zipCode,
            country: country
        },
        date: new Date(),
        status: 'Pending'
    };

    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    cart = [];
    saveCart();
    updateCartCount();

    alert('Order placed successfully! Order #' + order.id);
    
    // Reset form
    document.querySelector('.checkout-form').reset();
    closeCheckout();
}

// Close modals when clicking outside
window.onclick = function(event) {
    const productModal = document.getElementById('productModal');
    const cartModal = document.getElementById('cartModal');
    const authModal = document.getElementById('authModal');
    const checkoutModal = document.getElementById('checkoutModal');
    const ordersModal = document.getElementById('ordersModal');

    if (event.target === productModal) {
        productModal.classList.remove('show');
    }
    if (event.target === cartModal) {
        cartModal.classList.remove('show');
    }
    if (event.target === authModal) {
        authModal.classList.remove('show');
    }
    if (event.target === checkoutModal) {
        checkoutModal.classList.remove('show');
    }
    if (event.target === ordersModal) {
        ordersModal.classList.remove('show');
    }
}