// DOM elements
const itemElement = document.querySelector('#item');
const scoreElement = document.querySelector('#score');
const addElement = document.querySelector('#add');
const clearElement = document.querySelector('#clear');
const dataSetElement = document.querySelector('#data-set');
const removeLastElement = document.querySelector('#remove-last');
const calculateBtnElement = document.querySelector('#calculate-button');
const resultContElement = document.querySelector('#result-container');
const resultMsgElement = document.querySelector('#result-message');

// Testing
let isTestingOn = true;

// Fields
let item = "Exam";
let score = 0;

let scoreItemArr = [];
let scores = [];
let dataSetString = "";

// Get sum
function getSum(scores) {

    let scoresSum = 0;
    for (const score of scores) {
        scoresSum += score;
    }
    return scoresSum;
}

// Get average
function getAverage(scores) {

    let scoresSum = 0;
    for (const score of scores) {
        scoresSum += score;
    }
    return scoresSum / scores.length;
}

// get letter grade
function getLetterGrade(score) {

    let letterGrade = "";
    if (score == 100)
        letterGrade = "A++";
    else if (score >= 97)
        letterGrade = "A+";
    else if (score >= 93)
        letterGrade = "A";
    else if (score >= 90)
        letterGrade = "A-";
    else if (score >= 87)
        letterGrade = "B+";
    else if (score >= 83)
        letterGrade = "B";
    else if (score >= 80)
        letterGrade = "B-";
    else if (score >= 77)
        letterGrade = "C+";
    else if (score >= 73)
        letterGrade = "C";
    else if (score >= 70)
        letterGrade = "C-";
    else if (score >= 67)
        letterGrade = "D+";
    else if (score >= 63)
        letterGrade = "D";
    else if (score >= 60)
        letterGrade = "D-";
    else
        letterGrade = "F";
    return letterGrade;
}

// Did student pass course
function approvedCourse(score) {

    return getLetterGrade(score) == "F" ? false : true;
}

// Message to student
function messageToStudent(scores) {
    
    let average = getAverage(scores);
    let studentMsg = "Your average: " + average.toFixed(2) + ". Your grade: " + getLetterGrade(average);
    if (approvedCourse(average))
        studentMsg += ". You passed the course.";
    else
        studentMsg += ". You failed the course.";
    return studentMsg;
}

// Clear data
function clearData() {

    scoreItemArr.length = 0;
    dataSetString = "";
    itemElement.value = "Exam";
    scoreElement.value = 0;
    dataSetElement.value = "";
    testInput(JSON.stringify(scoreItemArr, null, 2));
}

// Print data
function printData() {

    dataSetString = "";
        for (let i = 0; i < scoreItemArr.length; i++) {
            if (i == 0)
                dataSetString += `${scoreItemArr[i].item}: ${scoreItemArr[i].score}`
            else
                dataSetString += `, ${scoreItemArr[i].item}: ${scoreItemArr[i].score}`
        }
        dataSetElement.value = dataSetString;
}

// Add item to array
function addItem() {
    // Check that score is less than or equal to 100
    if (score <= 100) {

        // Create local scoreItem
        let scoreItem = {
            item : "Exam",
            score : 0
        }

        // Add input elements to scoreItem
        scoreItem.item = item;
        scoreItem.score = score;

        // Push the recently-populated scoreItem to the scoreItemArr array
        scoreItemArr.push(scoreItem);

        // Push the scoreItem.score to the scores array
        scores.push(scoreItem.score);

        // Print the scoreItemArr array to console
        testInput(JSON.stringify(scoreItemArr, null, 2));

        // Print data to Web app UI
        printData();

    } else {
        alert("Score can't be greater than 100");
    }
}

// Remove last item from array
function removeLastItem() {

    // Remove the last element from the scoreItemArr array
    scoreItemArr.pop();
    
    // Print the scoreItemArr to console
    testInput(JSON.stringify(scoreItemArr, null, 2));

    // Print data to Web app UI
    printData();
}

// Execute mean calculation
function executeMeanCalculation() {
    
    if (isTestingOn) {
        scoreItemArr = [
            {
                item : "Exam",
                score : 96.7
            },
            {
                item : "Quiz",
                score : 95.6
            },
            {
                item : "Presentation",
                score : 80
            },
            {
                item : "Exam",
                score : 76.2
            },
            {
                item : "Exam",
                score : 77
            },
            {
                item : "Mid term",
                score : 56.8
            },
            {
                item : "Final project",
                score : 99
            },
            {
                item : "Final exam",
                score : 50
            }
        ]
        
        scores = [96.7, 95.6, 80, 76.2, 77, 56.8, 99, 50];
    }

    if (scoreItemArr.length == 0) {
        alert("There is nothing to calculate");
        return;
    }
    generateResult();
}

// Listeners
itemElement.addEventListener('change', function(e) {

    // Store selected item
    item = e.target.value;
});

scoreElement.addEventListener('change', function(e) {

    // Store selected score
    score = Number(e.target.value);
});

addElement.addEventListener('click', function() {

    // Add item
    addItem();
});

clearElement.addEventListener('click', function() {
    
    // Clear all data
    clearData();
});

removeLastElement.addEventListener('click', function() {

    // Remove last item
    removeLastItem();
});

calculateBtnElement.addEventListener('click', function() {

    // Calculate
    executeMeanCalculation();
});