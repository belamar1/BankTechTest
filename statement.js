/* eslint-disable no-undef */
'use strict';
class Statement {
  constructor() {
    this.transactions = [];
    this.time = new Date().toLocaleTimeString('en-GB');
    this.date = new Date().toLocaleDateString('en-GB');
  }

  printStatement() {
    return 'date || credit || debit || balance'.concat(
      this.transactions
        .map((transaction) => {
          return `
            ${transaction.date} || ${
            transaction.type === 'deposit' ? transaction.amount : ''
          } || ${transaction.type === 'credit' ? transaction.amount : ''} || ${
            transaction.balance
          }`;
        })
        .reverse()
        .join('')
    );
  }
}
module.exports = Statement;
