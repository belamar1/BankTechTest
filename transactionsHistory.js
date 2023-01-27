/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use strict';

class TransactionsHistory {
  constructor(time, date, type, balance, amount, transactions) {
    this.balance = 0;
    this.transactions = [];
    time = new Date().toLocaleString();
    date = new Date().toLocaleString();
    type = 'deposit' || 'withdrawal';
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
    if (transaction.type === 'deposit') {
      this.balance += transaction.amount;
    }
    if (transaction.type === 'withdrawal') {
      this.balance -= transaction.amount;
      if (this.balance < 0) {
        throw new Error('Insufficient funds');
      }
      return this.balance;
    }
    return this.balance;
  }

  openAccount() {
    this.balance = 0;
    this.transactions.length = 0;
    this.date = new Date().toLocaleString();
  }
  getEntries() {
    return this.transactions;
  }
  getTransactions() {
    return this.transactions;
  }
}

module.exports = TransactionsHistory;
