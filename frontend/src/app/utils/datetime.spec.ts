import datetimeUtils from './datetime';

describe('DateTimeUtils', () => {

  it('should get correct time passed', () => {
    const today = new Date();
    const tests = [
      { targetDate: new Date(today.getTime() - 1000 * 0), expectedStr: '0 seconds' },
      { targetDate: new Date(today.getTime() - 1000 * 1), expectedStr: '1 second' },
      { targetDate: new Date(today.getTime() - 1000 * 2), expectedStr: '2 seconds' },
      { targetDate: new Date(today.getTime() - 1000 * 60 * 1), expectedStr: '1 minute' },
      { targetDate: new Date(today.getTime() - 1000 * 60 * 2), expectedStr: '2 minutes' },
      { targetDate: new Date(today.getTime() - 1000 * 60 * 60 * 1), expectedStr: '1 hour' },
      { targetDate: new Date(today.getTime() - 1000 * 60 * 60 * 2), expectedStr: '2 hours' },
      { targetDate: new Date(today.getTime() - 1000 * 60 * 60 * 24 * 10), expectedStr: '10 days' },
    ]
    
    tests.forEach(({ targetDate, expectedStr }) => {
      expect(datetimeUtils.getTimePassed(targetDate)).toBe(expectedStr);
    })
    
  });
});
