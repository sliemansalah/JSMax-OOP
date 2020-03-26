

const productList = {
     products: [
        {
        title: 'A Pillow',
        imageUrl: 'https://thumb.maxpixel.net/50/Bedtime-Bedroom-Comfortable-Sleep-Pillow-Dream-1738023.jpg',
        price: 19.99,
        description: 'A soft pillow!'
    },
    {
        title: 'A Carpet',
        imageUrl: 'https://thumb.maxpixel.net/106/Housework-Carpet-Cleaner-Vacuum-Cleaner-Housekeeping-657719.jpg',
        price: 89.99,
        description: 'A carpet which you might like - or not!'
    },
    {
        title: 'A Car',
        imageUrl: 'https://thumb.maxpixel.net/1/Gt-Car-Power-Ford-Speed-Auto-Race-Supercar-1376190.jpg',
        price: 150.28,
        description: 'This is a car'
    },
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className ='product-list';
        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className='product-item';
            prodEl.innerHTML = `
            <div>
            <img src="${prod.imageUrl}" alt="${prod.title}">
            <div class="product-item__content"
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
            </div>
            `
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();
