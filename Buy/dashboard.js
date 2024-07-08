document.addEventListener('DOMContentLoaded', function() {
    loadProducts();

    document.getElementById('product-form-container').style.display = 'none';
});

function loadProducts() {
    fetch('allprod.json')
        .then(response => response.json())
        .then(products => {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = ''; // Clear existing content

            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p class="price">฿${product.price}</p>
                    <button onclick="editProduct(${product.id})">แก้ไข</button>
                    <button onclick="deleteProduct(${product.id})">ลบ</button>
                `;
                
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching the products:', error));
}

function showAddProductForm() {
    document.getElementById('product-form-container').style.display = 'block';
    document.getElementById('form-title').innerText = 'เพิ่มสินค้าใหม่';
    clearProductForm();
}

function hideProductForm() {
    document.getElementById('product-form-container').style.display = 'none';
}

function clearProductForm() {
    document.getElementById('product-id').value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-image').value = '';
}

function editProduct(id) {
    fetch('allprod.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === id);
            if (product) {
                document.getElementById('product-id').value = product.id;
                document.getElementById('product-name').value = product.name;
                document.getElementById('product-price').value = product.price;
                document.getElementById('product-description').value = product.description;
                document.getElementById('product-image').value = product.image;

                document.getElementById('form-title').innerText = 'แก้ไขสินค้า';
                document.getElementById('product-form-container').style.display = 'block';
            }
        })
        .catch(error => console.error('Error fetching the products:', error));
}

function deleteProduct(id) {
    fetch('allprod.json')
        .then(response => response.json())
        .then(products => {
            const updatedProducts = products.filter(p => p.id !== id);

            saveProducts(updatedProducts);
        })
        .catch(error => console.error('Error fetching the products:', error));
}

function saveProduct() {
    const id = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;
    const image = document.getElementById('product-image').value;

    fetch('allprod.json')
        .then(response => response.json())
        .then(products => {
            if (id) {
                const productIndex = products.findIndex(p => p.id == id);
                products[productIndex] = { id: parseInt(id), name, price, description, image };
            } else {
                const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
                products.push({ id: newId, name, price, description, image });
            }

            saveProducts(products);
        })
        .catch(error => console.error('Error fetching the products:', error));
}

function saveProducts(products) {
    fetch('allprod.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)
    })
    .then(response => response.json())
    .then(() => {
        loadProducts();
        hideProductForm();
    })
    .catch(error => console.error('Error saving the products:', error));
}
