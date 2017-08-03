let mocha = require('mocha');
const chai = require('chai');
// const { describe, setup, it} = mocha;


console.log('CARALHO !!! Estou no TT');


// describe('my thing', () => {
//     // tdd-style
//     setup(() => {
//         // do setup
//     });
//
//     it('should do stuff', () => {
//         chai.expect(3).to.equal(3);
//     });
// });

mocha.describe('Array', function () {
    mocha.describe('#indexOf()', function () {
        mocha.it('Should return -1 when the value is not present', function () {
            chai.expect(3).to.equal(2);
            // [1, 2, 3].indexOf(5).should.equal(-1);
        });
    });
});