const concat = (arr1,arr2)=>{
    return [arr1,arr2];
}

const cut2 = (arr)=>{
    if(arr.length >= 2) {
        return arr.splice(1,1);
    } else {
        return arr;
    }
}

module.exports = {concat,cut2};