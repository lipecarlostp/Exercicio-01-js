alert("Vamos somar dois números?");

let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o secundo número");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;

const sub = numberOne - numberTwo;

const multi = numberOne * numberTwo;

const div = numberOne / numberTwo;

const rest = numberOne % numberTwo;

alert(`A soma é: ${sum}`);
alert(`A subtração é: ${sub}`);
alert(`A multiplicação é: ${multi}`);
alert(`A divisão é: ${div}`);
alert(`E o resto é: ${rest}`);

let result = Number(numberOne) + Number(numberTwo);
alert(`A soma dos dois números é: ${result}`);

if (result % 2 == 0) {
  alert("Esse número é par");
} else {
  alert("Esse número é impar");
}
if (numberOne == numberTwo) {
  alert(
    `Os números escolhidos foram ${numberOne} e ${numberTwo}. Eles são iguais!`
  );
} else {
  alert(
    `Os números escolhidos foram ${numberOne} e ${numberTwo}. Eles são diferentes!`
  );
}
