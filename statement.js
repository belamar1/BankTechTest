'use strict';
class Statement {
  constructor() {
    this.transactions = [];
  }
  printStatement() {
    return 'date || credit || debit || balance';
  }
}
module.exports = Statement;
