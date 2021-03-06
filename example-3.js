import {cleanConsole, createAll} from './data';
import {solution} from './example-1';

const companies = createAll();

cleanConsole(3, solution(companies));
console.log('---- EXAMPLE 3 --- ', validateCapNames(solution(companies)));


function validateCapNames(companies){
    companies.forEach(com => {
        com.name = com.name.charAt(0).toUpperCase() + com.name.slice(1);
        if(com.name.substring(0) != com.name.substring(0).toUpperCase()){
            return false;
        }
        com['users'].forEach((user) => {
            if( user.firstName.chartAt(0) != user.firstName.chartAt(0).toUpperCase()
                || user.lastName.chartAt(0) != user.lastName.chartAt(0).toUpperCase()){
                return false;
            }
        });
    });
    return true;
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos "firstName"
// y el "lastName" de "users" están en mayúsculas. Debes probar la operación
// de esta función importando la función creada en el ejemplo 1.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for example 1.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour l'exemple 1.
