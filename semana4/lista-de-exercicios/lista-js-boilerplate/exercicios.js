//Exercício 1

function inverteArray(array) {
   // implemente sua lógica aqui
   return array.reverse()
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   // implemente sua lógica aqui
   let numerosParesElevados = []
   for (let i of array)
      if (array[i] % 2 === 0) {
         numerosParesElevados.push(array[i] ** 2)
      }
   return numerosParesElevados
}

//Exercício 3

function retornaNumerosPares(array) {
   // implemente sua lógica aqui
   let numerosPares = []
   for (let i of array)
      if (array[i] % 2 === 0) {
         numerosPares.push(array[i])
      }
   return numerosPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   numeroMaior = 0
   for (let i of array)
      if (i > numeroMaior) {
         numeroMaior = i
      }
   return numeroMaior
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui


   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3

   const respostas = []
   const resultado1 = booleano1 && booleano2 && !booleano4
   const resultado2 = (booleano1 && booleano2) || !booleano3
   const resultado3 = (booleano2 || booleano3) && (booleano4 || booleano1)
   const resultado4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   const resultado5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

   respostas.push(resultado1)
   respostas.push(resultado2)
   respostas.push(resultado3)
   respostas.push(resultado4)
   respostas.push(resultado5)

   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const nNumerosPares = []

   for (let i = 0; nNumerosPares.length < n; i++) {

      if (i % 2 === 0) {
         nNumerosPares.push(i)
      }
   }
   return nNumerosPares
}


// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   if (a === b && a === c) {
      return "Equilátero"
   } else if (a === b || a === c || b === c) {
      return "Isósceles"
   } else {
      return "Escaleno"
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maiorNumero
   let menorNumero
   let diferencaEntreNumeros

   if (num1 > num2) {
      maiorNumero = num1
      menorNumero = num2

   } else {
      maiorNumero = num2
      menorNumero = num1
   }
   return maiorNumero

} if (maiorNumero % menorNumero === 0) {
   return "o numero maior é divisível pelo numero menor"
} else {
   return "o numero maior é divisível pelo numero menor"
}

if (maiorNumero - menorNumero >= 0) {

}


// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {

}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}