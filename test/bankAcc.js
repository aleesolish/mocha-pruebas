const assert = require('assert');
const BankAccount = require('../app/BankAccount')

describe('BankAccount', () => {

    describe('#getbalance', () => {
        it('Should return the balance', () => {
          let account = new BankAccount(0)
          account.append(100)
          assert.equal(100, account.getbalance())
        })
    })

    describe('#getbalance', () => {
        it('Should return the balance', () => {
          let account = new BankAccount(0)
          account.append(100)
          account.substract(50)
          assert.equal(50, account.getbalance())
        })
    })

    describe('#merge', () =>{
        it ('Should merge', () =>{
            let original = new BankAccount(100)
            let other = new BankAccount(200)
            assert.strictEqual(300, original.merge(other))
        })
    })

    describe('#getMergeHistorial', () =>{
        it ('Should get the history merged', () =>{
            let original = new BankAccount(100)
            let other = new BankAccount(200)
            original.append (100)
            other.substract(30)
            assert.strictEqual(370, original.merge(other))
            assert.deepStrictEqual([100, 30], original.historial_file() )
        })
    })


    describe('#historial', () => {
        it('Should be the history', () => {
          let account = new BankAccount(0)
          account.append(100)
          account.substract(50)
          assert.deepEqual([100, 50], account.historial_file() )
        })
    })
    

})


