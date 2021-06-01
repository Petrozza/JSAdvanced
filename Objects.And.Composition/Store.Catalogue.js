function solve(inputArr){
    let productCatalogue = {};
    for (let i = 0; i < array.length; i++) {
        let [productName, productPrice] = inputArr[i].split(' : ');
        productPrice = Number(productPrice);
        let initial = productName[0].toUpperCase();

        if (productCatalogue[initial] === undefined) {
            productCatalogue[initial] = {};
        }
        productCatalogue[initial][productName] = productPrice;
        
    }
    let result = [];
    let initialSorted = Object.keys(productCatalogue).sort((a, b) => a.localeCompare(b));
    for (const key of initialSorted) {
        let products = Object.entries(productCatalogue[key]
            .sort((a, b) => a[0].localeCompare(b[0])));
            result.push(key);
            let productsAsStrings = products.map(x => `  ${x[0]} : {productPrice}`)
    }
}