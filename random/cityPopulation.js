// // count number of people in a city
// // 1. create a function that takes in a city name
// // 2. create a variable that holds the population of the city
// // 3. return the population of the city
// // 4. call the function and pass in a city name
// // 5. print the population of the city to the console

// function cityPopulation(city) {
//     let population = 0;
//     switch (city) {
//         case "New York":
//         population = 8550405;
//         break;
//         case "Los Angeles":
//         population = 3971883;
//         break;
//         case "Chicago":
//         population = 2720546;
//         break;
//         case "Houston":
//         population = 2296224;
//         break;
//         case "Philadelphia":
//         population = 1567442;
//         break;
//         case "Phoenix":
//         population = 1563025;
//         break;
//         case "San Antonio":
//         population = 1469845;
//         break;
//         case "San Diego":
//         population = 1394928;
//         break;
//         case "Dallas":
//         population = 1300092;
//         break;
//         case "San Jose":
//         population = 1026908;
//         break;
//         default:
//         population = 0;
//     }
//     return population;
//     }
//     console.log(cityPopulation("New York"));

// Language: javascript
// calculate cities total population by state


/**
 * 
 * @param {JSON} state - Object containing state's population per city
 */

let state = {
    "CA": {
        "population": 0,
        "cities": [
            {
                "name": "Los Angeles",
                "population": 3971883
            },
            {
                "name": "San Diego",
                "population": 1394928
            },
            {
                "name": "San Jose",
                "population": 1026908
            }
        ]
    },
    "NY": {
        "population": 0,
        "cities": [
            {
                "name": "New York",
                "population": 8550405
            },
            {
                "name": "Buffalo",
                "population": 258959
            },
            {
                "name": "Rochester",
                "population": 210565
            }
        ]
    },
    "TX": {
        "population": 0,
        "cities": [
            {
                "name": "Houston",
                "population": 2296224
            },
            {
                "name": "San Antonio",
                "population": 1469845
            },
            {
                "name": "Dallas",
                "population": 1300092
            }
        ]
    }
}

// actual response

function calculatePopulationByStatesCities(state) {
    for (let key in state) {
        let population = 0;
        for (let i = 0; i < state[key].cities.length; i++) {
            population += state[key].cities[i].population;
        }
        state[key].population = population;
    }
    return state;
}
console.log(calculatePopulationByStatesCities(state));

// trying second way

// function calculateCitiesTotalPopulationByState(state) {
//     let totalPopulation = 0;
//     for (let i = 0; i < cities.length; i++) {
//         if (cities[i].state === state) {
//             totalPopulation += cities[i].population;
//         }
//     }
//     return totalPopulation;
// }
// console.log(calculateCitiesTotalPopulationByState("CA"));

// function calculateCitiesTotalPopulationByState(state) {
//     let totalPopulation = 0;
//     for (let i = 0; i < state.cities.length; i++) {
//         totalPopulation += state.cities[i].population;
//     }
//     return totalPopulation;
// }
// console.log(calculateCitiesTotalPopulationByState(state.CA));

// // Language: javascript
// // calculate cities total population by state

// function calculateCitiesTotalPopulationByState(state) {
//     let totalPopulation = 0;
//     for (let i = 0; i < cities.length; i++) {
//         if (cities[i].state === state) {
//             totalPopulation += cities[i].population;
//         }
//     }
//     return totalPopulation;
// }
// console.log(calculateCitiesTotalPopulationByState("CA"));

// // // Language: javascript
// // // calculate cities total population by state

// // function calculateCitiesTotalPopulationByState(state) {
// //     let totalPopulation = 0;
// //     for (let i = 0; i < cities.length; i++) {
// //         if (cities[i].state === state) {
// //             totalPopulation += cities[i].population;
// //         }
// //     }
// //     return totalPopulation;
// // }
// // console.log(calculateCitiesTotalPopulationByState
// // ("CA"));
