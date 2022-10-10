// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar tests written by Nicholas Chapkey", () => {
    it("should return 'false' if shift value is 0", () => {
        const actual = caesar("Zebra Magazine", 0);
        expect(actual).to.equal(false);
    })

    it("should return 'false' if shift value is greater than 25", () => {
        const actual = caesar("Zebra Magazine", 26);
        expect(actual).to.equal(false);
    })

    it("should return 'false' if shift value is less than -25", () => {
        const actual = caesar("Zebra Magazine", -26);
        expect(actual).to.equal(false);
    })
    it("should ignore capital letters", () => {
        const upper = caesar("ZebraMagazine", 5);
        const lower = caesar("zebramagazine", 5);
        expect(upper).to.equal(lower);
    })
    it("should handle shifts that go past the end of the alphabet", () => {
        const actual = caesar("z", 3);
        const expected = "c";
        expect(actual).to.equal(expected);
    })
    it("should handle shifts that go past the beginning of the alphabet", () => {
        const actual = caesar("c", -3);
        const expected = "z";
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces and nonalphabetic symbols", () => {
        const actual = caesar("M3ssage 1s here tod@y", 3);
        const expected = "p3vvdjh 1v khuh wrg@b";
        expect(actual).to.equal(expected);
    })
})