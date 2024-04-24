const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((element) => {
    return Math.pow(element, 2);
});
console.log("squares:", squares);

const cubes = numbers.map((element) => {
    return Math.pow(element, 3);
});
console.log("cubes:", cubes);

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map((element) => {
    return element.toUpperCase();
});
const studentsLower = students.map((element) => {
    return element.toLowerCase();
});

console.log("studentsUpper:" ,studentsUpper);
console.log("studentsLower:" ,studentsLower);

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];
const formatteDates = dates.map((element) => {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
});
console.log("formattedDates:" ,formatteDates);