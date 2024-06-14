//votre code ici
function pairNumbers(a, b) {
    let pairNumbers = []
    for(let i = a; i <=b; i++) {
        if (i%2 === 0) {
            pairNumbers.push(i)
        }
    }
    console.log(pairNumbers)
}
export default pairNumbers
