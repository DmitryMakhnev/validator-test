var validator = require('validator-test');
var validateLength = require('default-testing').exports.validator.validateLength; 

describe('validator-test spec', function () {

    describe('validationLength', function () {
        it('is define', function () {
            expect(validateLength).toBeDefined();
        });    
        
        it('is function', function () {
            expect(validateLength).toEqual(jasmine.any(Function));
        });
        
        describe('validate', function () {
            
            it('correct length with options', function () {
                expect(validateLength('hello world', {minLength: 8})).toBeTruthy();
            });
            
            it('incorrect correct length with options', function () {
                expect(validateLength('hello world', {minLength: 12})).toBeFalsy();
            });
            
            it('correct length with options without minLength (minLength is 6 by default)', function () {
                expect(validateLength('hello ', {})).toBeTruthy();
            });
            
            it('incorrect length with options without minLength (minLength is 6 by default)', function () {
                expect(validateLength('hello', {})).toBeFalsy();
            });
            
            it('correct length without options (minLength is 6 by default)', function () {
                expect(validateLength('hello ', {})).toBeTruthy();
            });
            
            it('incorrect length without options (minLength is 6 by default)', function () {
                expect(validateLength('hello', {})).toBeFalsy();
            });
            
        });
    });
    
    describe('validator', function () {
        
        it('is define', function () {
            expect(validator).toBeDefined();
        });
        
        it('is function', function () {
            expect(validator).toEqual(jasmine.any(Function));
        });
        
        it('correct value with parameters', function () {
            expect(validator('hello world', {minLength: 8})).toBeTruthy();
        });

        it('incorrect value with parameters', function () {
            expect(validator('hello')).toBeFalsy();
        });
        
    });

});