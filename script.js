// Sample product data
const products = [
    {
        name: "Tomato Pickle",
        price: "₹150",
        image: "images/tomato-pickle.jpg"
    },
    {
        name: "Mango Pickle",
        price: "₹180",
        image: "images/mango-pickle.jpg"
    },
    {
        name: "Gongura Pickle",
        price: "₹200",
        image: "images/gongura-pickle.jpg"
    }
];

// Function to display products
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;

        productGrid.appendChild(card);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', displayProducts);
