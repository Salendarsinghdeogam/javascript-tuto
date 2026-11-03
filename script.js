//Execution context: The code defines three functions: `printName`, `whatIsMyName`, and `sayName`. The `printName` function logs "John Doe" to the console. The `whatIsMyName` function calls `printName`, and the `sayName` function calls `whatIsMyName`. Finally, `sayName` is called, which triggers the chain of function calls and results in "John Doe" being printed to the console.

function printName() {
  console.log("John Doe");
}
function whatIsMyName() {
  printName();
}
function sayName(){
  whatIsMyName();
}
sayName();