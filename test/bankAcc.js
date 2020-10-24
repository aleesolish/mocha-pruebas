const assert = require('assert');
const BankAccount = require('../app/BankAccount')

describe('BankAccount', () => {
    describe('#current', () => {
        it('Should return the balance', () => {
         assert.strictEqual(BankAccount.current(), 1000);
        })
    })

})

