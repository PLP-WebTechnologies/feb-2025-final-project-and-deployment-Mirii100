// Add this to cart.js

// Handle payment method selection
document.getElementById('payment').addEventListener('change', function() {
    const creditCardFields = document.getElementById('credit-card-fields');
    if (this.value === 'credit') {
        creditCardFields.style.display = 'block';
        // Make credit card fields required
        document.getElementById('card-number').required = true;
        document.getElementById('expiry').required = true;
        document.getElementById('cvv').required = true;
    } else {
        creditCardFields.style.display = 'none';
        // Remove required from credit card fields
        document.getElementById('card-number').required = false;
        document.getElementById('expiry').required = false;
        document.getElementById('cvv').required = false;
    }
});

// Handle form submission
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // In a real app, you would process payment here
    // For demo purposes, we'll just show a confirmation
    
    // Create order summary
    const orderDetails = {
        orderId: 'ORD-' + Math.floor(Math.random() * 1000000),
        customer: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value
        },
        paymentMethod: document.getElementById('payment').value,
        items: [...cart],
        total: calculateOrderTotal()
    };

    // Save order to localStorage (in a real app, send to server)
    saveOrder(orderDetails);
    
    // Clear cart
    cart = [];
    updateCart();
    
    // Show confirmation
    showOrderConfirmation(orderDetails);
});

function calculateOrderTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const shipping = subtotal > 0 ? 5.99 : 0;
    return subtotal + tax + shipping;
}

function saveOrder(order) {
    // In a real app, you would send this to your backend
    localStorage.setItem('lastOrder', JSON.stringify(order));
}

function showOrderConfirmation(order) {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = `
        <div class="order-confirmation">
            <h2>Thank you for your order!</h2>
            <div class="order-details">
                <h3>Order #${order.orderId}</h3>
                <p>We've sent a confirmation to ${order.customer.email}</p>
                
                <h4>Order Summary</h4>
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <span>${item.name} (${item.quantity})</span>
                            <span>KSH ${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="order-totals">
                    <div class="total-row">
                        <span>Subtotal:</span>
                        <span>KSH ${(order.total - 5.99 - (order.total * 0.08)).toFixed(2)}</span>
                    </div>
                    <div class="total-row">
                        <span>Shipping:</span>
                        <span>kes 5.99</span>
                    </div>
                    <div class="total-row">
                        <span>Tax:</span>
                        <span>kes ${(order.total * 0.08).toFixed(2)}</span>
                    </div>
                    <div class="total-row grand-total">
                        <span>Total:</span>
                        <span>ksh ${order.total.toFixed(2)}</span>
                    </div>
                </div>
                
                <h4>Shipping to:</h4>
                <p>${order.customer.name}<br>
                ${order.customer.address}</p>
                
                <a href="product.html" class="btn">Continue Shopping</a>
            </div>
        </div>
    `;
}




// Add to cart.js
function validateCheckoutForm() {
    const form = document.getElementById('checkout-form');
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'var(--danger-color)';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    // Additional validation for credit card if selected
    if (document.getElementById('payment').value === 'credit') {
        const cardNumber = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!/^\d{16}$/.test(cardNumber)) {
            alert('Please enter a valid 16-digit card number');
            isValid = false;
        }
        
        if (!/^\d{2}\/\d{2}$/.test(expiry)) {
            alert('Please enter expiry date in MM/YY format');
            isValid = false;
        }
        
        if (!/^\d{3,4}$/.test(cvv)) {
            alert('Please enter a valid CVV (3 or 4 digits)');
            isValid = false;
        }
    }
    
    return isValid;
}

// Update form submission to include validation
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateCheckoutForm()) {
        return;
    }
    
    // Rest of the submission code...
});