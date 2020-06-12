// 3.1
const arr = [1, 2, 3, 4, 5];
const arrNew = arr.map(item => item + 10);
console.log(arrNew);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));


// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));


// 3.4
const promise = () => new Promise((resolve, reject) => resolve());
   
console.log(promise());
