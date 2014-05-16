'use strict';

var command = require('../lib/commands').tag;
var Test = require('./_common');

describe('tag', function () {
    it('should create tag', function (done) {
        var options = {
            tag: '0.0.1'
        };

        new Test(command, options)
            .expect(['tag', '0.0.1'])
            .run(done);
    });

    it('should create tag with function', function (done) {
        var options = {
            tag: function () { return '0.0.2'; }
        };

        new Test(command, options)
            .expect(['tag', '0.0.2'])
            .run(done);
    });

    it('should tag with message', function (done) {
        var options = {
            tag: '0.0.1',
            message: 'Test'
        };

        new Test(command, options)
            .expect(['tag', '-m', 'Test', '0.0.1'])
            .run(done);
    });
});
