// Business Logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.cost = function() {
  var cost = 8;

  if (this.size === "Medium") {
    cost += 4;
  }

  else if (this.size === "Large") {
    cost += 8;
  }

  else {
    cost += 0;
  }

  if (this.toppings.length === 0) {
    cost *= 1;
  }

  else {
    cost += (this.toppings.length * 1.25) ;
  }

  return cost;
};

// $('#baba').prop('selectedIndex',0);
function resetFields() {
  $("#size").val($("#size option:first").val());
  $('input[type="checkbox"]:checked').prop('checked',false);
}

// User Interface Logic
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    var sizeSelected = $("select#size").val();
    var newPizza = new Pizza(sizeSelected);

    $.each($("input[name='topping']:checked"), function() {
      newPizza.toppings.push($(this).val());
    });

    $("ul#pizzas").append("<li><span class='order'>" + newPizza.size + " Pizza" + "</span></li>");

    resetFields();

    $(".order").last().click(function() {
      $("#pizza-details").show();
      $(".size").text(newPizza.size);
      $(".toppings").text(newPizza.toppings);
      $(".cost").text(newPizza.cost());

    });
  });
});
