// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) { //step1
    for(var i=0; i<dishData.length; i++) {  //step2
        let finalPrice; //step3
        if(taxBoolean) { //step4
            finalPrice = dishData[i].price * tax;
        }
        else if(!taxBoolean) { //step5
            finalPrice = dishData[i].price;
        }
        else { //step6
            console.log("You need to pass a boolean to the getPrices call!");
            return; // to "jump out" of the further function execution
        }
        console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`); //step7
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) { //step8
    getPrices(taxBoolean); //step9
    if(typeof(guests) === 'number' && guests>0 && guests<30) { //step10
        let discount = 0; //step11
        if(guests < 5) {
            discount = 5;
        }
        else if(guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    }
    else { //step12
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);