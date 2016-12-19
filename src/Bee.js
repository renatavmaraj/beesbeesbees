var Bee = function() {

  //call's this
  Grub.call(this)

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};


//Delegates Bee's prototype to Grub's prototype
//IOW Sets the prototype
Bee.prototype = Object.create(Grub.prototype);

//Points to Grub as Bee's constructor
//IOW Sets the constructor
Bee.prototype.constructor = Bee;