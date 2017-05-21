/**
 * Created by Fabio on 21/05/2017.
 */
const assert = require('assert');
const cryptor = require('../index');

describe('encode and decode', function () {

    it('should be equal', function () {
        let origin = 'myExampleString';
        let myCryptor = new cryptor('ah293nc780ew');
        let encoded = myCryptor.encode(origin);
        let decoded = myCryptor.decode(encoded);

        console.log(origin, encoded, decoded);

        assert.equal(origin, decoded);
    });

    it('should be error', function (done) {
        try{
            new cryptor()
        }catch (error) {
            done();
        }
    });

});