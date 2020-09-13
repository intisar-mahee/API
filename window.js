var name = "kuddus";
function add (num1, num2){
    window.result = num1 + num2;
    console.log('name outside', name);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return result;
}

console.log('name outside', name);
var sum = add(13, 21);
console.log(sum);
console.log('result outside', result);