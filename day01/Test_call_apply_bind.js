Function.prototype.myCall = function(context) {

    context.fn = this;
    let arg = [...arguments].slice(1);
    let result = context.fn(...arg)
    delete context.fn;
    return result
};

function getColor(color) {
    this.color = color;
    console.log(this);
}

function Car(name, color) {
    this.name = name;
    getColor.myCall(this,color)
}
var car = new Car('BMW','red');
