//Constructor
function Store (name, location, product, costumers){
    this.storeName = name;
    this.storeLocation = location;
    this.storeProduct = product;
    this.costCount = costumers;
}

var storeOne = new Store('Vanilla Store', 'Baltimore', 'Vanilla Cookies', 6);
var storeTwo = new Store('Chocolate Store','Bethesda', 'Chocolate Cookies', 10);


// let storeOne = {
//     name: 'Chocolate Store',
//     product: 'Chocolate Cookies',
//     costumers: 150,
//     employees:  5,
//     location: 'Bethesda',
//     createCostumer: function() {
//         console.log(this.product);
//     }

// }

// let storeTwo = {
//     name: 'Vanilla Store',
//     product: 'Vanilla Cookies',
//     costumers: 200,
//     employees: 10,
//     location: 'Baltimore',
//     getProduct: function() {
//         console.log(this.product);
//     }
// }

// //array of objects
// let Store = [storeOne, storeTwo];