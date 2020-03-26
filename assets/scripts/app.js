class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://thumb.maxpixel.net/50/Bedtime-Bedroom-Comfortable-Sleep-Pillow-Dream-1738023.jpg',
            19.99,
            'A soft pillow'
        ),
        new Product(
            'A Carpet',
            'https://thumb.maxpixel.net/106/Housework-Carpet-Cleaner-Vacuum-Cleaner-Housekeeping-657719.jpg',
            89.99,
            'A carpet which you might like - or not!'
        ),
        new Product(
            'A Car',
            'https://thumb.maxpixel.net/1/Gt-Car-Power-Ford-Speed-Auto-Race-Supercar-1376190.jpg',
            150.28,
            'This is a car'
        )
    ];

    constructor() {}

    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList();
productList.render();