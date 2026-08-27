function getInitials(fullName) {
    return fullName
        .split(" ")
        .map((word) => word[0])
        .join("");
}

function createSlug(stringa) {
    return stringa.toLowerCase();
}

module.exports = { getInitials, createSlug };