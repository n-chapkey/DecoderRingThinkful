// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution tests written by Nicholas Chapkey", () => { 
    it("should return false if the given alphabet isn't exactly 26 characters long",() => {
        const actual = substitution("translate", "plm");
        expect(actual).to.equal(false);
    });
    it("should encode the given phrase correctly based on alphabet given",() => {
        const actual = substitution("translate", "zyxwvutsrqponmlkjihgfedcba");
        expect(actual).to.equal("gizmhozgv");
    });
    it("should return false if there are any duplicate characters in the alphabet", () => {
        const actual = substitution("translate", "zzxwvutsrqponmlkjihgfedcba");
        expect(actual).to.equal(false);
    })
    it("should maintain spaces while encoding", () => {
        const actual = substitution("translate translate", "zyxwvutsrqponmlkjihgfedcba");
        expect(actual).to.equal("gizmhozgv gizmhozgv");
    })
    it("should maintain spaces while decoding", () => {
        const actual = substitution("gizmhozgv gizmhozgv", "zyxwvutsrqponmlkjihgfedcba",false);
        expect(actual).to.equal("translate translate");
    })
    it("should ignore capital letters", () => {
        const upper = substitution("ZebraMagazine","zyxwvutsrqponmlkjihgfedcba");
        const lower = substitution("zebramagazine","zyxwvutsrqponmlkjihgfedcba");
        expect(upper).to.equal(lower);
    })
    
    
});