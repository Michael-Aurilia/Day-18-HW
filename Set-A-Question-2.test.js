const findDuplicate = require("./Set-A-Question-2");

describe("Test cases", () => {
    test("[1,3,4,2,2] => 2", () => {
      expect(findDuplicate([1,3,4,2,2])).toEqual(2);
    })
    test("[3,1,3,4,2] => 3", () => {
      expect(findDuplicate([3,1,3,4,2])).toEqual(3);
    })
  })







