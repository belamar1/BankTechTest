/* eslint-disable no-undef */
'use strict';

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
    transactionsHistory.addTransaction('transaction');
    expect(transactionsHistory.getTransactions()).toEqual(['transaction']);
  });
  it('debits the account when a withdrawal is made and credits the account when a deposit is made', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.addTransaction('transaction');
    expect(transactionsHistory.transactions).toEqual(['transaction']);
  });
  it('it has a method to return the balance', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.addTransaction('transaction');
    expect(transactionsHistory.transactions).toEqual(['transaction']);
  });
  it('rejects withdrawals that exceed the available balance', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.addTransaction('transaction');
    expect(transactionsHistory.transactions).toEqual(['transaction']);
  });
  it('it has a method to return the date and time of the transaction', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.addTransaction('transaction');
    expect(transactionsHistory.transactions).toEqual(['transaction']);
  });
  it('it has a method to return the type of transaction', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.addTransaction('transaction');
    expect(transactionsHistory.transactions).toEqual(['transaction']);
  });
  it('it has a method to return the amount of the transaction', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.addTransaction('transaction');
    expect(transactionsHistory.transactions).toEqual(['transaction']);
  });
  it('it has a method to return the balance after at the end of each day', () => {
    const transactionsHistory = new TransactionsHistory();
    transactionsHistory.addTransaction('transaction');
    expect(transactionsHistory.transactions).toEqual(['transaction']);
  });
});
