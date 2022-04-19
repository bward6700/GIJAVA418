let num1 = Number(prompt("Enter a number"));
const op = prompt("Choose one( + , - , * , / )");
let num2 = Number(prompt("Enter another number"));

let result;


if(op == '+'){
    result = num1 + num2;
}

else if(op == '-'){
    result = num1 - num2;
}

else if(op == '*'){
    result = num1 * num2;
}

else{ result = num1 / num2;
}

console.log(`${num1} ${op} ${num2} = ${result}`);
