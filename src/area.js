import assert from 'assert'

function acircle(r) {
    // Calcula el área de un círculo a partir de su radio
    return Math.PI * r * r
}

function circleArea(radius) {
    return Math.PI * radius * radius
}

console.log(acircle(5))
console.log(circleArea(5))

assert.equal(acircle(5), circleArea(5))