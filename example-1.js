import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', solution(companies));



function solution(companies){
    companies = clearUndefined(companies);
    companies = sortCompaniesByUsersLength(companies);
    companies = sortUsersByName(companies);
    return companies;
}



function clearUndefined(companies){
    companies.forEach(element => {
        element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1)
        element['users'].forEach(element => {
            if( typeof element['firstName'] == 'undefined'){
                element['firstName'] = " ";
            }
            if( typeof element['lastName'] == 'undefined'){
                element['lastName'] = "";
            }
            element.firstName = element.firstName.charAt(0).toUpperCase() + element.firstName.slice(1)
            element.firstName = element.lastName.charAt(0).toUpperCase() + element.lastName.slice(1)
        });
    });

    return companies;
}


function sortCompaniesByUsersLength(companies){
    companies.sort((a, b) => {
        return b.usersLength - a.usersLength;
    });
    return companies;
}


function sortUsersByName(companies){
    companies.forEach(element => {
        element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1)
            element['users'].sort((a, b) => {
                return a.firstName.localeCompare(b.firstName);
            });
    });
    return companies;
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
