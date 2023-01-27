# Bank-Tech-Test aims to practice TDD and OOP

\_My approach is to use a REPL like IRB or Node to interact with the code
\_This challenge is a mini bank-account application of an account, statement and transaction
\_The client can deposit, withdraw and print a statement
\_The client can interact with the code via a REPL like IRB or Node
\_The client can also see the date of the transaction
\_The client can also see the balance of the account
\_The client can also see the credit and debit of the account

## Acceptance criteria set by Makers Academy:

\_A client should be able to interact with your code via a REPL like IRB or Node.
\_You don't need to implement a command line interface that takes input from STDIN Deposits, withdrawal.
\_Account statement (date, amount, balance) printing.
\_Data can be kept in memory (it doesn't need to be stored to a database or anything).

\_a client makes a deposit of 1000 on 10-01-2023
\_and a deposit of 2000 on 13-01-2023
\_and a withdrawal of 500 on 14-01-2023
\_when she prints her bank statement
\_then she would see

```js
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## My approach to the challenge:

### Design Story:

\_As a user
\_So that I can manage my money
\_I want to be able to deposit money into my account

\_As a user
\_So that I can spend money
\_I want to be able to withdraw money from my account

\_As a user
\_So that I can see when I made a transaction
\_I want to be able to see the date of the transaction

\_As a user
\_So that I can see how much money I have
\_I want to be able to see my balance

\_As a user
\_So that I can see my transactions
\_I want to be able to print a statement

\_As a user
\_So that I can see my transactions
\_I want to be able to interact with the code via a REPL like IRB or Node
