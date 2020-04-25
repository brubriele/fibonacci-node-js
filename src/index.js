'use strict'

const f = [];

const fibonacci = (num) => {
    for (let i = 0; i < 15; ++i) {
        f.push((i < 2) ? i : f[i - 1] + f[i - 2]);
    }
    return f
}

const isFibonnaci = (num) => {
    return f.includes(num);

}
module.exports = {
    fibonacci,
    isFibonnaci
}