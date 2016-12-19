var HoneyMakerBee = function() {

  //call's the Bee superclass
  Bee.call(this)

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};

//Delegates Bee's prototype to Grub's prototype
//IOW Sets the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);

//Points to Grub as Bee's constructor
//IOW Sets the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
