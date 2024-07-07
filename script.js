// DOM elements
const itemElement = document.querySelector('#item');
const scoreElement = document.querySelector('#score');
const addElement = document.querySelector('#add');
const clearElement = document.querySelector('#clear');
const dataSetElement = document.querySelector('#data-set');

// Fields
let item = "Exam";
let score = 0;

let scoreItemArr = [];
let dataSet = "";

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
    let studentMsg = "Your average: " + average + ". Your grade: " + getLetterGrade(average);
    if (approvedCourse(average))
        studentMsg += ". You passed the course.";
    else
        studentMsg += ". You failed the course.";
    return studentMsg;
}

// Clear data
function clearData() {

    scoreItemArr.length = 0;
    dataSet = "";
    itemElement.value = "Exam";
    scoreElement.value = 0;
    dataSetElement.value = "";
    testInput(JSON.stringify(scoreItemArr, null, 2));
}

// Listeners
itemElement.addEventListener('change', function(e) {

    item = e.target.value;
});

scoreElement.addEventListener('change', function(e) {

    score = Number(e.target.value);
});

addElement.addEventListener('click', function() {

    if (score <= 100) {
        let scoreItem = {
            item : "Exam",
            score : 0
        }
        scoreItem.item = item;
        scoreItem.score = score;
        scoreItemArr.push(scoreItem);
        dataSet += `${scoreItem.item}: ${scoreItem.score}, `;
        dataSetElement.value = dataSet;
        testInput(JSON.stringify(scoreItemArr, null, 2));
    } else {
        alert("Score can't be greater than 100");
    }
});

clearElement.addEventListener('click', function() {
    
    clearData();
});