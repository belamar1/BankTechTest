/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use strict';
const account = new Account();
const transactionsHistory = new TransactionsHistory();
const statement = new Statement();

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.clearAllTimers();
});

describe('integration test', () => {
  it('allows our client to deposit and withdraw money', () => {
    let amount = new TransactionsHistory();
    amount.deposit(10.0);
    amount.deposit(20.0);
    amount.withdraw(5.0);
    amount.withdraw(5.0);
    amount.withdraw(5.0);
    amount.printStatement();
    expect(amount.balance).toEqual(15.0);
    expect(amount.transactions) ===
      [
        {
          time: new Time().toLocaleTimeString('en-GB'),
          date: new Date().toLocaleDateString('en-GB'),
          type: 'deposit',
          sum: 10.0,
          balance: 10.0,
        },
        {
          time: new Time().toLocaleTimeString('en-GB'),
          date: new Date().toLocaleDateString('en-GB'),
          type: 'deposit',
          amount: 20.0,
          balance: 30.0,
        },
        {
          time: new Time().toLocaleTimeString('en-GB'),
          date: new Date().toLocaleDateString('en-GB'),
          type: 'withdrawal',
          amount: 5.0,
          balance: 25.0,
        },
        {
          time: new Time().toLocaleTimeString('en-GB'),
          date: new Date().toLocaleDateString('en-GB'),
          type: 'withdrawal',
          amount: 5.0,
          balance: 20.0,
        },
        {
          time: new Time().toLocaleTimeString('en-GB'),
          date: new Date().toLocaleDateString('en-GB'),
          type: 'withdrawal',
          amount: 5.0,
          balance: 15.0,
        },
      ];
  });

  it('allows our client to print a statement', () => {
    expect(account.printStatement()).toEqual(
      'date || credit || debit || balance\n' +
        '14/01/2023 || || 500.00 || 2500.00\n' +
        '13/01/2023 || 2000.00 || || 3000.00\n' +
        '10/01/2023 || 1000.00 || || 1000.00'
    );
  });
});
