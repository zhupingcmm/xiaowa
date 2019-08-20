function getColor(color) {
    this.color = color;
    console.log(this);
}

console.log(getColor);

function Car(name, color) {
    this.name = name;
    getColor.call(this,color)
}
var car = new Car('BMW','red');


console.log('===========================');
function show() {
    console.log('this',this)
}

var obj = {
    show:show
};

obj.show();


function Person() {
    this.name = 1;
}

Person.prototype = {
  name: 2,
  show: function () {
      console.log('name is :', this.name)
  }
};

Person.prototype.show();
(new Person()).show();
