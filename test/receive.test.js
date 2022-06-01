const assert = require('assert');
const response = require('../services/response');

describe('Testing Recieve Function', () => {
 it('handleTextMessage should return response', () => {
        const res = response.handleTextMessage()
        assert.equal(string, typeof res)
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});