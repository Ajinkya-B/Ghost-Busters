import * as helper from "./analyseProjectHelpers.js";

describe("Has Duplicates", () => {
    it('should return true if passed an array that contains duplicates', function () {
        const result = helper.hasDuplicates(["abcd", "xyz", "abcd", "1234"]);
        expect(result).toBe(true);

    });

    it('should return false if passed an array that does not contain duplicates', function () {
        const result = helper.hasDuplicates(["abcd", "xyz", "1234"]);
        expect(result).toBe(false);

    });
})