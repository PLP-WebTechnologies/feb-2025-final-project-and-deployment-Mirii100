// Get product ID from URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Display product details
function displayProductDetails() {
    const productId = getProductIdFromUrl();
    const product = products.find(p => p.id === productId);
    const container = document.getElementById('product-detail-container');
    
    if (!product) {
        container.innerHTML = `
            <div class="product-not-found">
                <h2>Product Not Found</h2>
                <p>Sorry, we couldn't find the product you're looking for.</p>
                <a href="products.html" class="btn">Browse Products</a>
            </div>
        `;
        return;
    }

    // Update breadcrumb
    document.getElementById('product-category-breadcrumb').textContent = 
        product.category.charAt(0).toUpperCase() + product.category.slice(1);
    document.getElementById('product-name-breadcrumb').textContent = product.name;

    container.innerHTML = `
        <div class="product-detail">
            <div class="product-images">
                <div class="main-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
            </div>
            <div class="product-info">
                <h1>${product.name}</h1>
                <div class="price">ksh ${product.price.toFixed(2)}</div>
                <div class="rating">
                    <span class="stars">★★★★★</span>
                    <span class="review-count">(42 reviews)</span>
                </div>
                <p class="description">${product.description}</p>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" value="1" min="1" class="quantity-input">
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
                <div class="product-meta">
                    <div class="meta-item">
                        <span class="meta-label">Category:</span>
                        <span class="meta-value">${product.category}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Availability:</span>
                        <span class="meta-value in-stock">In Stock</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add event listeners
    document.querySelector('.add-to-cart').addEventListener('click', function() {
        const quantity = parseInt(document.querySelector('.quantity-input').value);
        addToCartWithQuantity(productId, quantity);
    });

    document.querySelector('.quantity-selector .minus').addEventListener('click', function() {
        const input = document.querySelector('.quantity-input');
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });

    document.querySelector('.quantity-selector .plus').addEventListener('click', function() {
        const input = document.querySelector('.quantity-input');
        input.value = parseInt(input.value) + 1;
    });

    // Display related products
    displayRelatedProducts(productId, product.category);
}

// Add to cart with specific quantity
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

// Display related products
function displayRelatedProducts(currentProductId, category) {
    const relatedProductsContainer = document.getElementById('related-products');
    if (!relatedProductsContainer) return;

    // Get 4 random products from the same category (excluding current product)
    const related = products
        .filter(p => p.category === category && p.id !== currentProductId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    if (related.length === 0) {
        relatedProductsContainer.innerHTML = '<p>No related products found.</p>';
        return;
    }

    relatedProductsContainer.innerHTML = related.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">ksh ${product.price.toFixed(2)}</p>
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

// Initialize product detail page
document.addEventListener('DOMContentLoaded', () => {
    displayProductDetails();
    updateCart();
});