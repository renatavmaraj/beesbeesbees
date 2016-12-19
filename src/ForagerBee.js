var ForagerBee = function() {

  //call's the Bee superclass
  Bee.call(this)

  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];


};

//Delegates Bee's prototype to Grub's prototype
//IOW Sets the prototype
ForagerBee.prototype = Object.create(Bee.prototype);

//Points to Grub as Bee's constructor
//IOW Sets the constructor
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
};
