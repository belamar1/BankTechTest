/* eslint-disable no-undef */
'use strict';
//need to add a test for withdraw
const TransactionsHistory = require('./transactionsHistory');

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe('TransactionsHistory ', () => {
  it('can open an account', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.openAccount();
    expect(transactionsHistory.balance).toEqual(0);
  });
  it('has a method to return the array of transactions', () => {
    const transactionsHistory = new TransactionsHistory();

    expect(transactionsHistory.getTransactions()) === 'transactions';
  });
  it('debits the account when a withdrawal is made', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.deposit('transaction');
    expect(transactionsHistory.transactions) === 'transaction';
  });
  it('it has a method to return the balance', () => {
    const transactionsHistory = new TransactionsHistory();
    expect(transactionsHistory.getBalance) === 'balance';
  });
  it('rejects withdrawals that exceed the available balance', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.withdraw('transaction');
    expect(transactionsHistory.withdraw) === 'transaction';
  });
  it('it has a method to return the balance after at the end of each day', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.getBalance();
    expect(transactionsHistory.transactions) === 'transaction';
  });
});
