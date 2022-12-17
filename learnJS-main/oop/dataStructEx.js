// forEach()
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function(veggie, index){
	console.log(`${index}. ${fruit}`);
});


//filter()
// It filters your arrays based on a specific test. Those array items that pass the test are returned.
const nums = [0,10,20,30,40,50];
nums.filter(function(num){
	return num > 20;
});


//map()
[0,10,20,30,40,50].map(function(num){
	return num / 10
})


