function getInitials(fullName) {
    return fullName
        .split(" ")
        .map((word) => word[0])
        .join("");
}

function createSlug(stringa) {
    if (typeof stringa !== "string" || stringa.trim() === "") {
        throw new Error("Titolo non valido");
    }

    return stringa
        .toLowerCase()
        .replaceAll(" ", "-");
}

function average(numbers) {
    const sum = numbers.reduce((total, number) => {
        return total + number;
    }, 0);

    return sum / numbers.length;
}

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}

function findPostById(posts, id) {
    const hasInvalidPost = posts.some((post) => {
        return (
            typeof post.id !== "number" ||
            typeof post.title !== "string" ||
            typeof post.slug !== "string"
        );
    });

    if (hasInvalidPost) {
        throw new Error("Struttura dei post non valida");
    }

    if (typeof id !== "number") {
        throw new Error("L'id deve essere numerico");
    }
    return posts.find((post) => post.id === id);
}

module.exports = { getInitials, createSlug, average, isPalindrome, findPostById };