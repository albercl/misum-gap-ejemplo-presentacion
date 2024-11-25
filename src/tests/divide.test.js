// Modificar import para ver resultados de los pasos
// Para el primer paso comentar import, divide será undefined y se resuelve con divide-1
// const { divide } = require('../divide-1')
// Para el segundo paso divide será función y se resuelve con divide-2
// const { divide } = require('../divide-2')
// Para el tercer paso divide lanzará el error y se resuelve con divide-3
const { divide } = require('../divide-3')

// Paso 1
test('divide is a function', () => {
    expect(typeof divide).toBe('function')
})

// Paso 2
test('divide 4 by 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2)
})

test('divide 10 by 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5)
})

test('divide 15 by 3 to equal 5', () => {
    expect(divide(15, 3)).toBe(5)
})

// Paso 3
test('divide 10 by 0 to throw an error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero')
})