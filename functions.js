function getInitials(fullName) {
    return fullName
        .split(" ")
        .map((word) => word[0])
        .join("");
}

function createSlug(stringa) {
    return stringa.toLowerCase().replaceAll(" ", "-");
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

module.exports = { getInitials, createSlug, average, isPalindrome };