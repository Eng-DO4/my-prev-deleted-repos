const dishes = ["Italian pasta", 9.55, "Rice with veggies", 8.65, "Chicken with potatoes", 15.55, "Vegetarian Pizza", 6.45];

function menu(option) {
    option? console.log('Prices with 20% tax:') : console.log('Prices without tax:');
    let finalPrice;
    for(i=0; i<dishes.length; i+=2) {
        finalPrice = option? dishes[i+1]*1.2 : dishes[i+1];
        if(option) {
            console.log(`Dish: ${dishes[i]} Price (incl.tax): $ ${finalPrice}`)
        }
        else {
            console.log(`Dish: ${dishes[i]} Price (incl.tax): $ ${finalPrice}`)
        }
    }
}

menu(true);
menu(false);