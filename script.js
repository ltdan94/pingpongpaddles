// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 24.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 29.99, image: 'product3.jpg' },
    // Add more products as needed
];

// Function to render product cards
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => addToCart(product));

        productCard.appendChild(image);
        productCard.appendChild(name);
        productCard.appendChild(price);
        productCard.appendChild(addToCartButton);

        productGrid.appendChild(productCard);
    });
}

// Function to add a product to the cart
function addToCart(product) {
    // Implement cart functionality here
    console.log(`Added ${product.name} to cart`);
}

// Render products on page load
renderProducts();
