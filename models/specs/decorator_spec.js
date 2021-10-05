const assert = require('assert');
const { isTypedArray } = require('util/types');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');

describe('Decorator', function(){

    let decorator;

    beforeEach(function(){
        decorator = new Decorator(1)
    })
    xit('should start with empty paint', function(){
        const actual = decorator.stock;
        assert.deepEqual(actual, 0)
    })
    it('should be able to add paint to stock', function(){
        decorator.addPaintToStock(1)
        const actual = decorator.stock;
        assert.deepEqual(actual, 2)
    })
    it('should be able to calculate litres in stock', function(){
        decorator.calculateLitres()
        const actual = decorator.stock * 12;
        assert.deepEqual(actual, 12)

    })
    it('should be able to calculate if enough to paint a room', function(){
        decorator.enoughToPaint(12, 12);
        const actual = decorator.stock * 12 * 12 *12;
        assert.deepEqual(actual, false)
    })

})

