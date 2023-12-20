let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list'); 
    const totalElement = document.getElementById('total');
    
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}
