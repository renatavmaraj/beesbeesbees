var Grub = function(age,color,food) {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {
  console.log("this is grubs eats method");
};
