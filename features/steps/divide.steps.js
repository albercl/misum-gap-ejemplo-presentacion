const assert = require('assert');
const { divide } = require('../../src/divide-3')
const { Given, When, Then } = require('@cucumber/cucumber');

Given('que tengo dos números: {int} y {int}', function (n1, n2) {
  this.n1 = n1;
  this.n2 = n2;
});

When('los divido', function () {
  try {
    this.result = divide(this.n1, this.n2);
  } catch (error) {
    this.error = error;
  }
});

Then('obtengo como resultado {int}', function (expected) {
  assert.equal(this.result, expected);
});

Then('obtengo un error', function () {
  assert.ok(this.error);
});