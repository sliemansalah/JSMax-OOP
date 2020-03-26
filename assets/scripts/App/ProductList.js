class ProductList extends Component {
    #products = [];
    constructor(renderHookId) {
        super(renderHookId, false);
        this.render();
        this.fetchProducts();
    }

    fetchProducts() {


        this.#products = [
            new Product(
                'A Pillow',
                'https://thumb.maxpixel.net/50/Bedtime-Bedroom-Comfortable-Sleep-Pillow-Dream-1738023.jpg',
                'A soft pillow',
                19.99,
            ),
            new Product(
                'A Carpet',
                'https://thumb.maxpixel.net/106/Housework-Carpet-Cleaner-Vacuum-Cleaner-Housekeeping-657719.jpg',
                'A carpet which you might like - or not!',
                89.99,
            ),
            new Product(
                'A Car',
                'https://thumb.maxpixel.net/1/Gt-Car-Power-Ford-Speed-Auto-Race-Supercar-1376190.jpg',
                'This is a car',
                150.28,
            )
        ];
        this.renderProducts();
    }

    renderProducts() {
        for (const prod of this.#products) {
            new ProductItem(prod, 'prod-list');
        }
    }

    render() {
        this.createRootElement('ul', 'product-list', [
            new ElementAttribute('id', 'prod-list')
        ]);
        if (this.#products && this.#products.length > 0) {
            this.renderProducts();
        }
    }
}