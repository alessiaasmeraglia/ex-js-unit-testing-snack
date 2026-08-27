const { getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require("./functions");

const posts = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        slug: "introduzione-a-javascript",
    },
    {
        id: 2,
        title: "Imparare Jest",
        slug: "imparare-jest",
    },
    {
        id: 3,
        title: "Unit Testing",
        slug: "unit-testing",
    },
];

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
    test("sostituisce gli spazi con un trattino", () => {
        const result = createSlug("Questo è un test");

        expect(result).toBe("questo-è-un-test");
    });
    test("lancia un errore se il titolo è vuoto", () => {
        expect(() => createSlug("")).toThrow("Titolo non valido");
    });

    test("lancia un errore se il titolo non è una stringa", () => {
        expect(() => createSlug(null)).toThrow("Titolo non valido");
    });
});

describe("average", () => {
    test("calcola la media aritmetica di un array di numeri", () => {
        const result = average([2, 4, 6, 8]);

        expect(result).toBe(5);
    });
});

describe("isPalindrome", () => {
    test("restituisce true se la stringa è un palindromo", () => {
        const result = isPalindrome("A man, a plan, a canal: Panama");

        expect(result).toBe(true);
    });
    test("restituisce false se la stringa non è un palindromo", () => {
        const result = isPalindrome("Hello, world!");

        expect(result).toBe(false);
    });
});

describe("findPostById", () => {
    test("restituisce il post corretto dato l'array di post e l'id", () => {
        const result = findPostById(posts, 2);

        expect(result).toEqual({
            id: 2,
            title: "Imparare Jest",
            slug: "imparare-jest",
        });
    });
});