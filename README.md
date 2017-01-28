# n-array

the solution of n dimension array for node env!!!

## Usage

```javascript
// import n-array lib
let NArray = require("./index");

// create 3*4*5 array and defaultValue is undefined
let nArray1 = NArray([3,4,5]);
// P1
console.log('P1' + nArray1.get(0,0,0));

// create 3*4*5 array and defaultValue is 'tai'
let nArray2 = NArray([3,4,5], 'tai');
// P2
console.log('p2' + nArray2.get(2,3,4));

// set value 3 to index of(1,1,1)
nArray2.set(1,1,1, 3);
nArray2.set(1,1,2, 4);

// P3 can print 3
console.log('p4' + nArray2.get(1,1,1));

// P4 can print 4
console.log('p5' + nArray2.get(1,1,2));
```

## Tests

    $ node test.js

## Credits

  - [Bean Li](https://github.com/warfrogsdf)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Bean Li