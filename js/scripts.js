function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
};

Pizza.prototype.totalCost = function(myPizza) {
  let cost = 0;
  if (this.size === 'small') {
    cost += 8;
  } else if (this.size === 'medium') {
    cost += 10;
  } else if (this.size === 'large') {
    cost += 13;
  } else {
    cost += 15;
  };

  if (this.topping === 'pepperoni') {
    cost += 2;
  } else if (this.topping === 'italianSausage') {
    cost += 3;
  } else if (this.topping === 'greenPepper') {
    cost += 4;
  } else if (this.topping === 'pineapple') {
    cost += 1;
  } else {
    cost += 0;
  };
  return cost;
};

$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    let topping = $('#pizzaTopping').val();
    let size = $('#pizzaSize').val();
    if (size === null || topping === null) {
      alert('Please select a valid option!');
      return;
    };
    let myPizza = new Pizza(topping, size);
    let myPizzaCost = myPizza.totalCost();
    $('#results').show();
    $('#thanks').show();
    $('#toppingChoice').text($('select#pizzaTopping option:selected').text());
    $('#sizeChoice').text($('select#pizzaSize option:selected').text());
    $('#pizzaPrice').text(myPizzaCost);
  });
});
