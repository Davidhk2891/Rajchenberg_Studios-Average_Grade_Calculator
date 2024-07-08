function generateResultTemplate() {

    resultMsgElement.style.display = "none";
    let dynamicHTML = `
        <div id="result-data-cont">
            <div id="result-avg-cont">
                <p id="result-avg"></p>
            </div>
            <div id="result-count-cont">
                <p id="result-count"></p>
            </div>
            <div id="result-sum-cont">
                <p id="result-sum"></p>
            </div>
        </div>
        <div id="result-main-cont">
            <div id="result-main-table-cont">
                <table
                    style="
                        border: 1px solid black;">
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

            </div>
        </div>
    `;  

    resultContElement.innerHTML = dynamicHTML;
}

function generateResult() {

    generateResultTemplate();
}