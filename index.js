console.log("Virker det?")

//Create an array that holds 8 grades (integers between 0 and 100) representing the scores of different students:
let studentGrades = [25, 40, 60, 85, 95, 35, 10, 90];

// Log out how many grades there are - level 1
console.log(studentGrades.length)

// Classify each grade into one of the following categories - level 2
// Laver et "else if" output:
let bogstavGrades = studentGrades.map(grade => {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80 && grade < 90) {
        return 'B';
    } else if (grade >= 70 && grade < 80) {
        return 'C';
    } else if (grade >= 60 && grade < 70) {
        return 'D';
    } else {
        return 'F';
    }
});
console.log(bogstavGrades)

// Evaluate overall class performance - level 2
// Finder summen af de 8 grades:
let sum = 0;
for (let i = 0; i < studentGrades.length; i++) {
    sum += studentGrades[i]; // Add each grade to the sum
}

// Dividerer summen med antal grades:
let averageGrade = sum / studentGrades.length;

// Laver et "else if" output:
let classPerformance;
if (averageGrade >= 90) {
    classPerformance = 'Excellent';
} else if (averageGrade >= 80 && averageGrade < 90) {
    classPerformance = 'Good';
} else if (averageGrade >= 70 && averageGrade < 80) {
    classPerformance = 'Satisfactory';
} else {
    classPerformance = 'Needs Improvement';
}
console.log(classPerformance);

// Optional - Determine - level 3, highest, lowest, average grade in the array
let highest = Math.max(...studentGrades);
let lowest = Math.min(...studentGrades);

console.log("Højeste grade:", highest);
console.log("Laveste grade:", lowest);
console.log("Gennemsnitlige grade:", averageGrade);

// Treasure Hunter
const island = ['-', '-', '-', 'T', '-'];
let treasureCount = 0;

console.log(`There are ${island.length} moves in the island`);

for (let move = 0; move < island.length; move++) {
    if (island[move] === 'T') {
        console.log(`Treasure found at move ${move + 1} :)`);
        treasureCount++;
    } else {
        console.log(`No treasure found :(`);
    }
}

console.log(`There were ${treasureCount} treasures in the island`);

// Startup name generator
function getStartupName() {
    // Array 1: First part of the startup name
    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
    // Array 2: Second part of the startup name
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

    const randomFirstIndex = Math.floor(Math.random() * firstWords.length);
    const randomSecondIndex = Math.floor(Math.random() * secondWords.length);

    const randomFirstWord = firstWords[randomFirstIndex];
    const randomSecondWord = secondWords[randomSecondIndex];

    const startupName = randomFirstWord + " " + randomSecondWord;

    return startupName;
}
console.log(getStartupName());