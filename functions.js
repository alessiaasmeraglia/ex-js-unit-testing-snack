function getInitials(fullName) {
    return fullName
        .split(" ")
        .map((word) => word[0])
        .join("");
}

function createSlug(stringa) {
    return stringa.toLowerCase();
}

function average(numbers) {
    const sum = numbers.reduce((total, number) => {
        return total + number;
    }, 0);

    return sum / numbers.length;
}

module.exports = { getInitials, createSlug, average };