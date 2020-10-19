// function imposterFormula(i, p) {
//     return Math.round(100 * (i / p)).toString() + "%"
// }
const imposterFormula = (i, p) => `${Math.round(100 * (i / p))}%`
module.exports = imposterFormula;