class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    };

    

    loadProducts(productsArr) {
            
        for (let product of productsArr) {
            let productName = (product.split(' '))[0];
            let productQuantity = Number(product.split(' ')[1]); 
            let productTotalPrice = Number(product.split(' ')[2]);
            
            if (productTotalPrice <= this.budgetMoney) {
                this.stockProducts.productName = productName;
                this.stockProducts.productQuantity = productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            }else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            };
        };
        
        return this.history.join('\n');
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

