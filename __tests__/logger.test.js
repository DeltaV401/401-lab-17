'use strict';

require('../__mocks__/logger');
const hub = require('../hub');

describe('Logger testing', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
    jest.spyOn(hub, 'emit');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('On save', () => {
    it('logs and emits the new payload', () => {
      // Arrange
      let payload = { name: 'Jon' };

      // Act
      hub.emit('save', payload);

      // Assert
      expect(console.log).toHaveBeenCalledWith('Record Jon has been saved');
      expect(hub.emit).toHaveBeenCalledWith('cache-invalidate', payload);
    });
  });

  describe('On update', () => {
    it('logs the updated payload', () => {
      // Arrange
      let payload = {};

      // Act
      hub.emit('update', payload);

      // Assert
      expect(console.log).toHaveBeenCalledWith('update', payload);
    });
  });
});
