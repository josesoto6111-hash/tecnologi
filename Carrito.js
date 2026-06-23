let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " agregado al carrito");
}

function renderCart() {
    const list = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;
    
    // Limpiamos la lista para evitar duplicados al recargar
    if (list) {
        list.innerHTML = ""; 
        
        cart.forEach(item => {
            // Esto genera las filas (tr) que tu tabla necesita
            list.innerHTML += `<tr><td style="padding: 10px;">${item.name}</td><td style="text-align: right;">$${item.price}</td></tr>`;
            total += item.price;
        });
        
        if (totalElement) {
            totalElement.innerText = total;
        }
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    cart = [];
    renderCart();
}
