/* eslint-disable no-undef */

'use strict';

const Account = require('./account');

let account;

beforeEach(() => {
  jest.useFakeTimers();
  account = new Account();
});
afterEach(() => {
  jest.clearAllTimers();
});

describe('Account', () => {
  it('creates a new account', () => {
    expect(account).toBeDefined();
  });
  it('Have zero balance when created', () => {
    expect(account.balance).toEqual(0);
  });
  it('should have a date and time when created', () => {
    expect(account.date).toEqual(new Date().toLocaleString());
  });
  it('should zero transactions when created', () => {
    expect(account.transactions).length = 0;
  });
});
