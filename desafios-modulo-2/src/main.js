// Módulo 2

import { Usuario as ClasseUsuario, Idade, idade as IdadeUsuario } from './functions';

ClasseUsuario.info();
console.log(IdadeUsuario);

Idade.informaIdade();

// Módulo 3

// Funão delay aciona o .then após 1s
const delay = (valor) => new Promise(resolve => setTimeout(function() { resolve(valor); }, 1000));

async function umPorSegundo() {
    console.log(await delay('1s'));
    console.log(await delay('2s'));
    console.log(await delay('3s'));
}

umPorSegundo();
