/* eslint-disable no-undef */
'use strict';
const Statement = require('./statement');

describe('Statement', () => {
  it('has a method to print a statement', () => {
    const statement = new Statement();
    expect(statement.printStatement()).toEqual(
      'date || credit || debit || balance'
    );
  });
});
