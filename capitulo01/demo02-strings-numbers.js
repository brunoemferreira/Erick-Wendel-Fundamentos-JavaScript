let salarioDoAmigo = 1000;
let meuSalario = "2999";

// convertendo string em number
let meuSalarioCorrigido = Number(meuSalario);


console.log(salarioDoAmigo + meuSalarioCorrigido);

console.log(
  typeof (salarioDoAmigo),
  salarioDoAmigo
)

console.log(
  typeof (meuSalario),
  meuSalario
)

// Verifica se o que esta vindo na variável não é um numero ele retorna um boolean
// isNaN = is not a number
console.log(
  isNaN(meuSalario)
)

let minhaString = "Olá mundo!";
let minhaOutraString = "Olá mundo2!";

let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString}. AE!`;

console.log(
  minhaStringComVariaveis
)