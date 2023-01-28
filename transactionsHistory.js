/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use strict';

class TransactionsHistory {
  constructor(time, date, type, balance, amount, transactions) {
    this.balance = 0;
    this.transactions = [];
    time = new Date().toLocaleTimeString('en-GB');
    date = new Date().toLocaleDateString('en-GB');
    type = 'deposit';
    balance = 0;
    amount = 0;
    transactions = [];
  }
  getTransactions() {
    return this.transactions;
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      time: new Date().toLocaleTimeString('en-GB'),
      date: new Date().toLocaleDateString('en-GB'),
      type: 'deposit',
      amount: amount,
      balance: this.balance,
    });
  }
  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push({
      time: new Date().toLocaleTimeString('en-GB'),
      date: new Date().toLocaleDateString('en-GB'),
      type: 'withdrawal',
      amount: amount,
      balance: this.balance,
    });
  }

  openAccount() {
    this.balance = 0;
    this.transactions.length = 0;
    this.date = new Date().toLocaleDateString('en-GB');
    this.time = new Date().toLocaleTimeString('en-GB');
  }
}

module.exports = TransactionsHistory;
