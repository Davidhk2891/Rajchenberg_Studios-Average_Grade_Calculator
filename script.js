// Get average
function getAverage(scores) {

    let scoresSum = 0;
    for (const score of scores) {
        scoresSum += score;
    }
    return scoresSum;
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
    return getLetterGrade(score) == "F" ? true : false;
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