// concatenate
const concat = (str1: string, str2: string): string =>{
    return str1 + str2;
};

// capitalize first letter
const capitalize = (str: string): string => {
    const newStr = str.split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
    return newStr;
};

// capitalize whole string
const upperCase = (str: string): string => {
    return str.toUpperCase();
};

// lowerize whole string
const lowerCase = (str: string): string => {
    return str.toLowerCase();
};

export default {
    concat,
    capitalize,
    upperCase,
    lowerCase
};