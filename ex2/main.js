const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
   
const ageUsers = usuarios.map(user => user.idade);
console.log(ageUsers);

const bigger18 = usuarios.filter(user => user.empresa === 'Rocketseat' && user.idade >= 18);
console.log(bigger18);

const companyGoogle = usuarios.find(user => user.empresa === 'Google');
console.log(companyGoogle);

const maxAge50 = usuarios.filter(user => user.idade*2 <= 50);
console.log(maxAge50);