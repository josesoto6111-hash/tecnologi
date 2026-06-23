let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " agregado al carrito");
}

// Función para mostrar carrito en carrito.html
function renderCart() {
    const list = document.getElementById('cart-items');
    let total = 0;
    cart.forEach(item => {
        list.innerHTML += `<li>${item.name} - $${item.price}</li>`;
        total += item.price;
    });
    document.getElementById('total').innerText = total;
}
