/* eslint-disable no-undef */

'use strict';

class Account {
  constructor() {
    this.openAccount();
  }
  /**
   * @param {number} amount
   * @param {string} type
   * @param {string} date
   * @param {string} time
   * @param {string} description
   * @param {number} balance
   */
  openAccount() {
    this.balance = 0;
    this.date = new Date().toLocaleString('en-GB');
    this.time = new Date().toLocaleTimeString('en-GB');
    this.transactions = [];
  }
}

module.exports = Account;
