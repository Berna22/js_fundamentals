
var first_number = parseFloat(prompt("Please enter the first number: "))
var operation = prompt("Please enter operator [+, -, *, /]")
var second_number = parseFloat(prompt("Please enter the second number: "))

if (operation == "+"){
    var res = first_number + second_number
    alert("The result is: " + res)
}
else if (operation == "-"){
    var res = first_number - second_number
    alert("The result is: " + res)
}
else if (operation == "*"){
    var res = first_number * second_number
    alert("The result is: " + res)
}
else if (operation == "/"){
    var res = first_number / second_number
    if (second_number == 0) {
        alert("Cannot divide by zero!")
        throw Error("Cannot divide by zero!")
    }
    alert("The result is: " + res)
}
else {
    alert("Enter valid operator!")
}
