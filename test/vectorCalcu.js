const assert = require('assert');
const vectorCal = require('../app/vectorCal');

describe('vectorCalcultor', () =>{
    describe( '#suma', () =>{
        let v1 = {x: 1 , y: 2}
        let v2 = {x: 2 , y: 1}

        it('Should be the sum', () =>{
            assert.deepStrictEqual ({x:3, y:3}, vectorCal.suma(v1,v2))
        })

    } )

    describe( '#sub', () =>{
        let v1 = {x: 1 , y: 2}
        let v2 = {x: 2 , y: 1}

        it('Should be the substraction', () =>{
            assert.deepStrictEqual ({x:-1, y:1}, vectorCal.sub(v1,v2))
        })

    } )

    describe( '#scale', () =>{
        let v1 = {x: 1 , y: 2}
        let c = 2

        it('Should be the scale a', () =>{
            assert.deepStrictEqual ({x:2, y:4}, vectorCal.scale(v1,c))
        })

    } )

    describe( '#dot', () =>{
        let v1 = {x: 1 , y: 2}
        let v2 = {x: 2 , y: 1}

        it('Should be the dot product', () =>{
            assert.deepStrictEqual ({d:4}, vectorCal.dot(v1,v2))
        })

    } )
})


