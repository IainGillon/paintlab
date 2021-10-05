const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){

    let room;

    beforeEach(function(){
        room = new Room(15, 15, false);
    });
    it('room has length in meters', function(){
        const actual = room.length;
        assert.deepStrictEqual(actual, 15)

    })
    it('room has width in meters', function(){
        const actual = room.width;
        assert.deepStrictEqual(actual, 15)

    })
    it('room has area in square meters', function(){
        room.getAreaSquareMeters(15, 15)
        const actual = room.width * room.length
        assert.deepEqual(actual, 225)
    })
    it('room starts not painted', function(){
        const actual = room.painted
        assert.deepEqual(actual, false)
    })
    it('room gets painted', function(){
        room.paintRoom()
        const actual = room.painted
        assert.deepEqual(actual, true)
    })


})