import {cleanConsole, createAll} from './data';
import{findAllUsers} from "./example-4"
const companies = createAll();

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', userStats(findAllUsers(companies)));

function userStats(users){
    let a = {};
    a.size = users.length;
    a.average = (users.reduce(((total, current) => total += current.age) , 0 ))/a.size;
    a.hasCar = users.filter((a) => a.car == true).length;
    a.averageWithCar = (users.reduce(((total, current) => current.car ? total += current.age: total) , 0 ))/a.hasCar;
    return a;
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear un
// nueva función que toma como parámetro la variable "companies" y devuelve
// un nuevo objeto con los siguientes atributos:
// 'size' => total de "users"
// 'average' => edad promedio de "users"
// 'hasCar' => total de "users" propietarios de un carro
// 'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
// 'size' => number of "users"
// 'average' => average age of "users"
// 'hasCar' => number of "users" owning a car
// 'averageWithCar' => average age of users with a car

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Utiliser la fonction créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivants :
// 'size' => nombre de "users"
// 'average' => moyenne d'âge des "users"
// 'hasCar' => nombre de "users" possédant une voiture
// 'averageWithCar' => moyenne d'âge des "users" possédant une voiture
