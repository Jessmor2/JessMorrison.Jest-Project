const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Dollar should be 106.58 Yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const Yen = fromDollarToYen(3.5)

    // if 1 dollar are 106.58 yen, then 3.5 dollars should be (3.5 * 106.58)
    const expected = 3.5 * 106.58; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.03); //1 dollar are 106.58 yen, then 3.5 dollars should be = (3.5 * 106.58)
})

test("One Yen should be 0.0063 Pound", function(){
    const { fromYenToPound } = require('./app.js')

    const Yen = fromYenToPound(3.5)

    // if 1 Yen are 0.0063 Pound, then 3.5 Yen should be (3.5 * 0.0063)
    const expected = 3.5 * 0.0063; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.02205); //1 Yen are 0.0063 Pound, then 3.5 yen should be = (3.5 * 0.0063)
})