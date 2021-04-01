//suma dos valores
function sum(num1, num2) {
  return num1 + num2;
}

//callback
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(4, 8, sum));

function date(callback) {
  console.log(new Date); //imprime la fecha actual
  setTimeout(function () {
    let date = new Date;
    callback(date);
  }, 3000)
}

//callback
function printDate(dateNow) {
  console.log(`Imprime luego de 3 segundos ${dateNow}`);
}

date(printDate);