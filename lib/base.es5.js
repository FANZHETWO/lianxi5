function Base() {

}

Base.extend = function () {
    let tempA = Array.prototype.slice.apply(arguments, [0, arguments.length]);
    tempA.forEach((element, index) => {
        if (element) {
            for (let key in element) {
                this.prototype[key] = element[key];
                this[key] = element[key];
            }
        }
    });
    this.on = function (val) {
        if (val === 'test') {
            return val
        }
    }
    this.trigger = function (val) {
        if (val === 'test') {
            return val
        }
    }
    return this;
}

Object.defineProperty(Base.prototype, "constructor", {
    enumerable: false,
    value: Base
});

var View = Base.extend()
var A = Base.extend({
    say: function (word) {
        return word
    }
})
var B = A.extend()
var b = new B

module.exports = Base