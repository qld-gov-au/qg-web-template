import normalizeData from '../../src/core/assets/_components/general/testing-example-sample-func';

describe("normalizeData",  () => {
    it("accepts golden path data", () => {
        // Invoke the unit being tested as necessary
        var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        var norm = normalizeData(json);

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(norm.name).toEqual("Maria");
        expect(norm.id).toEqual(2111858);
    });
});