// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius tests written by Nicholas Chapkey", () => { 
    it("should encode i and j to 42", () => {
        const actual = polybius("jill");
        expect(actual).to.equal("42421313");
    })

    it("should decode 42 to (i/j)", () => { 
        const actual = polybius("421231231231", false)
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    })
    it("should ignore capital letters", () => {
        const upper = polybius("ZebraMagazine");
        const lower = polybius("zebramagazine");
        expect(upper).to.equal(lower);
    })

    it("should maintain spaces during encoding", () => {
        const actual = polybius("Zebra Magazine");
        const expected = "5551212411 2311221155423351";
        expect(actual).to.equal(expected);
    })

    it("should maintain spaces during decoding", () => {
        const actual = polybius("5515124211 32", false);
        const expected = "zvfija h";
        expect(actual).to.equal(expected);
    })

})