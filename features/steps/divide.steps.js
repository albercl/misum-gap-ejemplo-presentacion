const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { divide } = require('../../src/divide-3');

Given('que tengo dos números: {int} y {int}', function queTengo2Numeros(n1, n2) {
  this.n1 = n1;
  this.n2 = n2;
});

When('los divido', function losDivido() {
  try {
    this.result = divide(this.n1, this.n2);
  } catch (error) {
    this.error = error;
  }
});

Then('obtengo como resultado {int}', function obtengoComoResultado(expected) {
  assert.equal(this.result, expected);
});

Then('obtengo un error', function obtengoUnError() {
  assert.ok(this.error);
});
