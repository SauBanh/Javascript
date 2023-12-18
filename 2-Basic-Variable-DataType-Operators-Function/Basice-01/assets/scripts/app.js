const defaultResult = 0;

let currentResult = defaultResult;

let result;

let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIndentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIndentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };

    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    // const enteredNumber = parseInt(userInput.value);
    const enteredNumber = getUserNumberInput();
    // const calcDescription = `${currentResult} + ${enteredNumber}`;
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput("+", initialResult, enteredNumber);

    // logEntries.push(enteredNumber);
    writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

// currentResult = add(1, 2);

// // let calculationDescription = "(0 + 10) * 3 / 2 - 1";
// let calculationDescription = `( ${currentResult} + 10) * 3 / 2 - 1`;

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput("x", initialResult, enteredNumber);
    writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput(":", initialResult, enteredNumber);
    writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
