module.exports = function Cart(oldCart) {
  //the item is an object
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function(item, id) {
    var storedItem = this.items[id]; //checking if the poduct group alredy exixst
    if (!storedItem) {
      //if not will proceed to this me if statement
      storedItem = this.items[id] = {item: item, qty: 0, price: 0};
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price; //increase the qty
  }; // add the new item to the cart
  this.generateArray = function() {
    //convert the item to an array
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
