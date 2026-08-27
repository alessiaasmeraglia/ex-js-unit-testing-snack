const { getInitials } = require("./functions");

describe("getInitials", () => {
    test("restituisce le iniziali di un nome completo", () => {
        const result = getInitials("Mario Rossi");

        expect(result).toBe("MR");
    });
});