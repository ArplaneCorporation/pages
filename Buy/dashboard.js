document.addEventListener('DOMContentLoaded', function() {
    fetch('allprod.json')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.getElementById('product-container');
            
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p class="price">฿${product.price}</p>
                `;
                
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching the products:', error));
});
