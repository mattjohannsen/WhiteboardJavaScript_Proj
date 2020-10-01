function addUp(num) {
    var sum = 0;
    for (let i = 1; i <= num; i++) {
        sum+= i;
    }
    return sum;
}
module.exports = addUp;