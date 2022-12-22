const bottle = {
    color : 'yellow',
    hold : 'water',
    price : 50,
    isCleaned : true
};
// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

// get all values

const values = object.values(bottle);
// console.log(values);

const pairs = object.entries(bottle);
// console.log(pairs);
// object.seal(bottle);
object.freeze(bottle);
bottle.price = 100;
bottle.height = 16;
delete bottle.isCleaned;
console.log(bottle);
