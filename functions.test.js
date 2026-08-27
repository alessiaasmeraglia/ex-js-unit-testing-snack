const { getInitials, createSlug, average } = require("./functions");

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

describe("average", () => {
    test("calcola la media aritmetica di un array di numeri", () => {
        const result = average([2, 4, 6, 8]);

        expect(result).toBe(5);
    });
});