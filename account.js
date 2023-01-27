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
   * @param {string} description
   * @param {number} balance
   */
  openAccount() {
    this.balance = 0;
    this.date = new Date().toLocaleString();
    this.transactions = [];
  }
}

module.exports = Account;
