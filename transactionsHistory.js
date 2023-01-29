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
    this.withdraw = this.withdraw.bind(this);
    this.deposit = this.deposit.bind(this);
    this.openAccount = this.openAccount.bind(this);
    this.getBalance = this.getBalance.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
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
      type: 'credit',
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

  getBalance() {
    return this.balance;
  }
}

module.exports = TransactionsHistory;
