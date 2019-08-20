function Person() {
    this._attackVolume = 100;
}

Person.prototype ={
  attack(body){
   body.bloodVolume -= this._attackVolume - body.defenseVolume;
  }
};
