// 5.1
console.log('Exercício 5.1');

const arr = [1, 2, 3, 4, 5, 6];

const [ x, ...y ] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.2
console.log('Exercício 5.2');

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } };
console.log(usuario);
console.log(usuario2);
console.log(usuario3);
   

// 6
console.log('Exercício 6');

const user = 'Diego';
const age = 23;

console.log(`O usuário ${user} possui ${age} anos`);

// 7
console.log('Exercício 7');

const usuarioShort = {
    user,
    age,
    cidade: 'Rio do Sul',
};

console.log(usuarioShort);

