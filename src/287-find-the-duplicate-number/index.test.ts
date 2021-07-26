import { findDuplicate, findDuplicateBinarySearch } from './index';

describe('Find the duplicate number', function () {
  it('shoud find the duplicate number', function () {
    const result = findDuplicate([1, 3, 4, 2, 2]);
    expect(result).toEqual(2);
  });

  it('shoud find the duplicate number', function () {
    const result = findDuplicate([3, 1, 3, 4, 2]);
    expect(result).toEqual(3);
  });

  it('shoud find the duplicate number', function () {
    const result = findDuplicate([1, 1]);
    expect(result).toEqual(1);
  });

  it('shoud find the duplicate number', function () {
    const result = findDuplicateBinarySearch([1, 3, 4, 2, 2]);
    expect(result).toEqual(2);
  });

  it('shoud find the duplicate number', function () {
    const result = findDuplicateBinarySearch([3, 1, 3, 4, 2]);
    expect(result).toEqual(3);
  });

  it('shoud find the duplicate number', function () {
    const result = findDuplicateBinarySearch([1, 1]);
    expect(result).toEqual(1);
  });
});
