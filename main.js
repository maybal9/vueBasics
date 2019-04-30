var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: "Maayan's",
        description: "A pair of warm, fuzzy socks",
        selectedVariant: 0,
        link: "https://www.storyonline.co.il/english/brands/happy-socks.html",
        inventory: 100,
        onSale: true,
        onSaleMsg: "Now on Sale!",
        details: ["80% cotton","20% polyester", "Gender-neutral"],
        variants: [
            {variantId: 2231,
                variantColor: "green",
                variantImage: "./socks_pics/green_socks.jpg",
                variantQuantity: 10},
            {variantId: 2232,
                variantColor: "blue", 
                variantImage: "./socks_pics/blue_socks.jpg",
                variantQuantity: 10},
            {variantId: 2233,
                variantColor: "purple",
                variantImage: "./socks_pics/purple_socks.jpg",
                variantQuantity: 10},
            {variantId: 2234,
                variantColor: "pink",
                variantImage: "./socks_pics/pink_socks.jpg",
                variantQuantity: 10},
            {variantId: 2235,
                variantColor: "red",
                variantImage: "./socks_pics/red_socks.jpg",
                variantQuantity: 10},
            {variantId: 2236,
                variantColor: "yellow",
                variantImage: "./socks_pics/yellow_socks.jpg",
                variantQuantity: 10}
        ], 
        sizes: [35, 36, 37, 38, 39, 40, 41, 42],
        cart: 0
    }, 
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart>0)
                this.cart -= 1
        },
        updateProduct(index){
            this.selectedVariant = index
        }
    }, 
    computed: {
        title(){
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        }, 
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale(){
            if(this.onSale){
                return this.title + " is now on sale!"
            }
            return this.title + " not on sale"
        }
    }
})

