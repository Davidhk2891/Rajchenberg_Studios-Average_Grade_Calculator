function generateResultTemplate() {

    resultMsgElement.style.display = "none";
    let dynamicHTML = `
        <div id="result-data-cont">
            <p id="result-avg">Average: x = ${getAverage(scores).toFixed(2)}</p>
            <p> | </p>
            <p id="result-count">Count: n = ${scores.length}</p>
            <p> | </p>
            <p id="result-sum">Sum: sum = ${getSum(scores).toFixed(2)}</p>
        </div>
        <hr id="result-data-divider">
        <div id="result-main-cont">
            <div id="result-main-table-cont">
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Score</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    for (let i = 0; i < scoreItemArr.length; i++) {
        dynamicHTML += `
            <tr>
                <td>${scoreItemArr[i].item}</td>
                <td>${scoreItemArr[i].score}</td>
                <td>${getLetterGrade(scoreItemArr[i].score)}</td>
            </tr>
        `;
    }    
    dynamicHTML += `
                </tbody>
            </table>
        </div>
    `;  
    dynamicHTML += `
            <div id="result-main-summary-cont">
                <p id="result-main-final-score">Your average score: 
                    ${getAverage(scores).toFixed(2)}</p>
                <p id="result-main-final-grade">Final grade: 
                    ${getLetterGrade(getAverage(scores).toFixed(2))}</p>
            </div>
        </div>
    `;  

    dynamicHTML += `
        <p id="result-final-student-msg">${messageToStudent(scores)}</p>
    `;

    resultContElement.innerHTML = dynamicHTML;
}

function generateResult() {
    generateResultTemplate();
}