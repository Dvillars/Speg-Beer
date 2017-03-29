"use strict";
var Keg = (function () {
    function Keg(name, brand, price, spegContent) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.spegContent = spegContent;
        this.pints = 12;
    }
    ;
    return Keg;
}());
exports.Keg = Keg;
//# sourceMappingURL=keg.js.map