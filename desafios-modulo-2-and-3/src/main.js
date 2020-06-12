import axios from 'axios';

// Módulo 2

import { Usuario as ClasseUsuario, Idade, idade as IdadeUsuario } from './functions';

console.log('Ex 2.1');

ClasseUsuario.info();
console.log(IdadeUsuario);

Idade.informaIdade();

// Módulo 3


// Ex 3.1
// Funão delay aciona o .then após 1s
const delay = (valor) => new Promise(resolve => setTimeout(() => { resolve(valor); }, 1000));

async function umPorSegundo() {
    console.log(await delay('Ex 3.1 - 1s'));
    console.log(await delay('Ex 3.1 - 2s'));
    console.log(await delay('Ex 3.1 - 3s'));
}

umPorSegundo();

// Ex 3.2

async function getUserFromGithub(user) {
    try {
        let data = await axios.get(`https://api.github.com/users/${user}`);
        console.log('Ex 3.2');
        console.log(data);
    } catch {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('rafaelsza');
//getUserFromGithub('diego3g124123');

// Ex 3.3


class Github {
    static async getRepositories(repo) {
        try {
            let data = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log('Ex 3.3');
            console.log(data);
        } catch {
            console.log('Repositório não existe');
        }
    }
}

// Ex 3.4


Github.getRepositories('rafaelsza/nlw-react-01');
//Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async (usuario) => {
    try {
        return (await (axios.get(`https://api.github.com/users/${usuario}`))).data;
    } catch {
        console.log('Usuário não existe');
    }
}

async function getUser(){
    console.log(await buscaUsuario('diego3g'));
    console.log('Ex 3.4');
}

getUser();


