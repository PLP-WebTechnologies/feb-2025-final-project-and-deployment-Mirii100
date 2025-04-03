
const products = [
    // Original 4 products
    {id: 110,
        name: "men trousers ",
        price: 1000.99,
        image: "https://www.google.com/imgres?q=pictures%20%20for%20men%20trousers%20%20download&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F523691222%2Fphoto%2Ftrousers.jpg%3Fs%3D612x612%26w%3Dis%26k%3D20%26c%3D2NNaoCgC_hDZo8gZx2m6MxPJ2dXr8WBhDnqlvSBkfNI%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Ftrousers-gm523691222-92024051&docid=0Z18hOYEVMAe3M&tbnid=JX9S0GiYHaMDlM&vet=12ahUKEwjL4qXyzbuMAxXlSPEDHbw3AjAQM3oECD8QAA..i&w=612&h=365&hcb=2&itg=1&ved=2ahUKEwjL4qXyzbuMAxXlSPEDHbw3AjAQM3oECD8QAA",
        description: "High-quality wireless headphones with noise cancellation.",
        category: "electronics",
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "High-quality wireless headphones with noise cancellation.",
        category: "electronics"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Track your fitness and stay connected with this smart watch.",
        category: "electronics"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Portable Bluetooth speaker with 20 hours of battery life.",
        category: "electronics"
    },
    {
        id: 4,
        name: "Laptop Backpack",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Durable backpack with padded laptop compartment.",
        category: "accessories"
    },
    
    // New Electronics (12 products)
    {
        id: 5,
        name: "4K Ultra HD Smart TV",
        price: 699.99,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "55-inch 4K Ultra HD Smart TV with HDR.",
        category: "electronics"
    },
    {
        id: 6,
        name: "Gaming Laptop",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "High-performance gaming laptop with RTX graphics.",
        category: "electronics"
    },
    {
        id: 7,
        name: "Wireless Earbuds",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "True wireless earbuds with active noise cancellation.",
        category: "electronics"
    },
    {
        id: 8,
        name: "Tablet",
        price: 329.99,
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "10.2-inch tablet with retina display.",
        category: "electronics"
    },
    {
        id: 9,
        name: "DSLR Camera",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "24.2MP DSLR camera with 18-55mm lens.",
        category: "electronics"
    },
    {
        id: 10,
        name: "Wireless Keyboard",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Slim wireless keyboard with quiet-touch keys.",
        category: "electronics"
    },
    {
        id: 11,
        name: "External SSD",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "1TB external SSD with USB-C connectivity.",
        category: "electronics"
    },
    {
        id: 12,
        name: "Monitor",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "27-inch QHD monitor with 144Hz refresh rate.",
        category: "electronics"
    },
    {
        id: 13,
        name: "Fitness Tracker",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Waterproof fitness tracker with heart rate monitor.",
        category: "electronics"
    },
    {
        id: 14,
        name: "Robot Vacuum",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1556740734-9f9ca6c5f2c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Smart robot vacuum with app control.",
        category: "electronics"
    },
    {
        id: 15,
        name: "Air Fryer",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "5.8-quart digital air fryer with 7 presets.",
        category: "electronics"
    },
    {
        id: 16,
        name: "Smart Thermostat",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1556740734-9f9ca6c5f2c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Learning thermostat that adapts to your schedule.",
        category: "electronics"
    },
    
    // Home & Kitchen (8 products)
    {
        id: 17,
        name: "Cast Iron Skillet",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "12-inch pre-seasoned cast iron skillet.",
        category: "home"
    },
    {
        id: 18,
        name: "Coffee Maker",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1608355024223-618faf9b07dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Programmable coffee maker with thermal carafe.",
        category: "home"
    },
    {
        id: 19,
        name: "Blender",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "High-speed blender with 64oz pitcher.",
        category: "home"
    },
    {
        id: 20,
        name: "Bedding Set",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1616628188549-79ebc5e8ed42?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Queen size 6-piece bedding set.",
        category: "home"
    },
    {
        id: 21,
        name: "Throw Pillow",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Decorative 18x18 inch throw pillow.",
        category: "home"
    },
    {
        id: 22,
        name: "Desk Lamp",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e616d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Adjustable LED desk lamp with touch control.",
        category: "home"
    },
    {
        id: 23,
        name: "Yoga Mat",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Eco-friendly yoga mat with carrying strap.",
        category: "home"
    },
    {
        id: 24,
        name: "Cookware Set",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1556910638-90b6a9a4af64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "10-piece non-stick cookware set.",
        category: "home"
    },
    
    // Fashion & Accessories (10 products)
    {
        id: 25,
        name: "Leather Wallet",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Genuine leather bifold wallet.",
        category: "fashion"
    },
    {
        id: 26,
        name: "Sunglasses",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Polarized UV protection sunglasses.",
        category: "fashion"
    },
    {
        id: 27,
        name: "Running Shoes",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Lightweight running shoes with cushioning.",
        category: "fashion"
    },
    {
        id: 28,
        name: "Dress Watch",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Minimalist dress watch with leather strap.",
        category: "fashion"
    },
    {
        id: 29,
        name: "Backpack Purse",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Convertible backpack purse with multiple pockets.",
        category: "fashion"
    },
    {
        id: 30,
        name: "Denim Jacket",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Classic denim jacket with multiple washes.",
        category: "fashion"
    },
    {
        id: 31,
        name: "Baseball Cap",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Adjustable cotton twill baseball cap.",
        category: "fashion"
    },
    {
        id: 32,
        name: "Silk Scarf",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1591044778357-7c35fa4a643c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "100% silk scarf with floral pattern.",
        category: "fashion"
    },
    {
        id: 33,
        name: "Leather Belt",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Genuine leather belt with metal buckle.",
        category: "fashion"
    },
    {
        id: 34,
        name: "Winter Gloves",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Thermal insulated winter gloves.",
        category: "fashion"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const featuredProductsContainer = document.getElementById('featured-products');
const cartCount = document.getElementById('cart-count');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Display featured products
function displayFeaturedProducts() {
    if (!featuredProductsContainer) return;

    featuredProductsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">ksh ${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add to cart function
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} added to cart!`);
}

// Update cart count and local storage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    updateCart();
    
    // Add notification styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--success-color);
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
        }
        .notification.show {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});
// Display all products
function displayAllProducts() {
    const productsContainer = document.getElementById('all-products');
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <a href="productDetails.html?id=${product.id}" class="btn view-details">View Details</a>
            </div>
        </div>
    `).join('');
    document.addEventListener('DOMContentLoaded', () => {
        displayAllProducts();
        updateCart();
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Initialize products page
document.addEventListener('DOMContentLoaded', () => {
    displayAllProducts();
    updateCart();
});

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty. <a href="products.html">Continue shopping</a></p>';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p class="item-price">KSH ${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
            </div>
            <div class="item-total">
                <p>KSH${(item.price * item.quantity).toFixed(2)}</p>
                <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');

    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', updateQuantity);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });

    // Update cart summary
    updateCartSummary();
}

// Update quantity
function updateQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    
    if (e.target.classList.contains('increase')) {
        item.quantity += 1;
    } else if (e.target.classList.contains('decrease')) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            // Remove item if quantity reaches 0
            cart = cart.filter(item => item.id !== productId);
        }
    }
    
    updateCart();
    displayCartItems();
}

// Remove item
function removeItem(e) {
    const productId = parseInt(e.target.closest('button').getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    displayCartItems();
    showNotification('Item removed from cart');
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const shipping = subtotal > 0 ? 5.99 : 0;
    const total = subtotal + tax + shipping;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    updateCart();
    
    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                alert('Confirm payment ');
                // In a real app, this would redirect to a checkout page
            }
        });
    }
});
// Display all products with filtering
function displayAllProducts(filterCategory = 'all', filterPrice = 'all') {
    const productsContainer = document.getElementById('all-products');
    if (!productsContainer) return;

    let filteredProducts = [...products];

    // Apply category filter
    if (filterCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === filterCategory);
    }

    // Apply price filter
    if (filterPrice !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            if (filterPrice === 'low') return product.price < 50;
            if (filterPrice === 'medium') return product.price >= 50 && product.price <= 100;
            if (filterPrice === 'high') return product.price > 100;
            return true;
        });
    }

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No products match your filters. <a href="products.html">Reset filters</a></p>';
        return;
    }

    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">KSH${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <a href="productDetails.html?id=${product.id}" class="btn view-details">View Details</a>
            </div>
        </div>
    `).join('');

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Initialize products page with filtering
document.addEventListener('DOMContentLoaded', () => {
    displayAllProducts();
    updateCart();

    // Filter event listeners
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            displayAllProducts(categoryFilter.value, priceFilter.value);
        });
    }

    if (priceFilter) {
        priceFilter.addEventListener('change', () => {
            displayAllProducts(categoryFilter.value, priceFilter.value);
        });
    }
});
// Helper function for product detail page
function addToCartWithQuantity(productId, quantity) {
    const product = products.find(p => p.id === productId);
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCart();
    showNotification(`${product.name} (${quantity}) added to cart!`);
}

