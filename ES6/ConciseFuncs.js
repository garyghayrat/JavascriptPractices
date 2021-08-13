const bicycle = {
    gear: 2,
    setGear(newGear) {
//line above, instead of setGear : function(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);