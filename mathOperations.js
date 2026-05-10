const name = "Joseph Lalnunthara";
const luckyNumber = 10;


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

// module.exports.addNum = add;
// module.exports.subtractNum = subtract;
// module.exports.name = name;
// module.exports.luckyNumber = luckyNumber;

module.exports = {
    addNum : add,
    subtractNum : subtract,
    name : name,
    luckyNumber : luckyNumber
}
console.log(module); 