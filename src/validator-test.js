/*@DTesting.exports*/

var getObjectSafely = require('default-lib').getObjectSafely;
var defaultTestingExports = require('default-testing').exports;
var validatorExports = getObjectSafely(defaultTestingExports, 'validator');

/*@/DTesting.exports*/

/**
 *
 * @param {String} value
 * @param {Object} [options]
 *     @param {Number} [options.minLength]
 * @return {boolean}
 */
function validateLength (value, options) {
    var minLength;
    //parse options
    if (options && (typeof options.minLength === 'number')) {
        minLength = options.minLength;
    } else {
        minLength = 6;
    }

    return value.length >= minLength;

}

/*@DTesting.exports*/

validatorExports.validateLength = validateLength;

/*@/DTesting.exports*/

/**
 *
 * @param {String} value
 * @param {Object} [options]
 *     @param {Number} [options.minLength]
 * @return {boolean}
 */
function validator (value, options) {
    return validateLength(value, options);
}

module.exports = validator;