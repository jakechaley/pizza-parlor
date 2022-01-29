function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.cost = 0;
};

Pizza.prototype.totalCost = function(myPizza) {
  if (this.size === 'small') {
    this.cost += 8;
  } else if (this.size === 'medium') {
    this.cost += 10;
  } else if (this.size === 'large') {
    this.cost += 13;
  } else {
    this.cost += 15;
  };

  if (this.topping === 'pepperoni') {
    this.cost += 2;
  } else if (this.topping === 'italianSausage') {
    this.cost += 3;
  } else if (this.topping === 'greenPepper') {
    this.cost += 4;
  } else if (this.topping === 'pineapple') {
    this.cost += 1;
  } else {
    this.cost += 0;
  };
};

Pizza.prototype.displayPizza = function () {
  $('#results').show();
  $('#thanks').show();
  $('#toppingChoice').text($('select#pizzaTopping option:selected').text());
  $('#sizeChoice').text($('select#pizzaSize option:selected').text());
  $('#pizzaPrice').text(this.cost)
};


$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    let topping = $('#pizzaTopping').val();
    let size = $('#pizzaSize').val();
    let myPizza = new Pizza(topping, size);
    myPizza.totalCost();
    myPizza.displayPizza();
    
    

  });
});
