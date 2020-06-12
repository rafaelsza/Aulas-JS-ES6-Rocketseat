"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var ageUsers = usuarios.map(function (user) {
  return user.idade;
});
console.log(ageUsers);
var bigger18 = usuarios.filter(function (user) {
  return user.empresa === 'Rocketseat' && user.idade >= 18;
});
console.log(bigger18);
var companyGoogle = usuarios.find(function (user) {
  return user.empresa === 'Google';
});
console.log(companyGoogle);
var maxAge50 = usuarios.filter(function (user) {
  return (user.idade = user.idade * 2) <= 50;
});
console.log(maxAge50);
