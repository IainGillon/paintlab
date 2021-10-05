const Room = function(width, length, painted){
    this.width = width
    this.length = length
    this.painted = false
};

Room.prototype.getAreaSquareMeters = function(){
    return this.width * this.length
}
Room.prototype.paintRoom = function(){
    this.painted = true;
}


module.exports = Room;