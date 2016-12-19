var RetiredRetiredForagerBee = function() {

  //call's the Bee superclass
  ForagerBee.call(this)

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

};

//Delegates Bee's prototype to Grub's prototype
//IOW Sets the prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

//Points to Grub as Bee's constructor
//IOW Sets the constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(){
  return "I am too old, let me play cards instead";
};

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}
