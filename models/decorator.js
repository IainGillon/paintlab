const Paint = require("./paint");

const Decorator = function(stock, enoughStock){
    this.stock = stock
    this.enoughStock = false
}

Decorator.prototype.addPaintToStock = function(num){
    return this.stock += num
}

Decorator.prototype.calculateLitres = function(){
    return this.stock * 12
}

Decorator.prototype.enoughToPaint = function(width, legnth){
    if (this.stock * 12 * width * legnth >= 0) {
        return true
    } else{
        return false
    }

}

module.exports = Decorator;






