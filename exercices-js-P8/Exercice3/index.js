// Créez votre fonction ici
function calculateAverage(array) {
    let number = 0;
    for(let i=0; i<array.length; i++) {
        number += array[i] 
    }
    const average = number/array.length
    console.log(average)
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
