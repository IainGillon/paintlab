const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){

    let paint;

    beforeEach(function(){
        paint = new Paint(12)
    })
    it('paint has numbers of litres', function(){
        const actual = paint.litres;
        assert.deepStrictEqual(actual, 12)
    });
    it('check paint is empty', function(){
        paint.checkPaintStock()
        const actual = paint.litres
        assert.equal(actual, false)
    })
    it('empty all paint', function(){
        paint.emptyPaint()
        const actual = paint.litres
        assert(actual, 0)
    })
})


