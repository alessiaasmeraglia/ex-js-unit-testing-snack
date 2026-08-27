const { getInitials, createSlug } = require("./functions");

describe("getInitials", () => {
    test("restituisce le iniziali di un nome completo", () => {
        const result = getInitials("Mario Rossi");

        expect(result).toBe("MR");
    });
});

describe("createSlug", () => {
    test("restituisce una stringa in lowercase", () => {
        const result = createSlug("JAVASCRIPT");

        expect(result).toBe("javascript");
    });
});