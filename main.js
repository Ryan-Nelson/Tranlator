const german = {
    "merry": "fröhlich",
    "christmas": "Weihnachten",
    "and": "und",
    "happy": "glücklich",
    "new": "Neu",
    "year": "Jahr",
};

const russian = {
    "merry": "veselyy",
    "christmas": "rozhdestvo",
    "and": "a takzhe",
    "happy": "schastlivyy",
    "new": "novyy",
    "year": "god",
};
const japanese = {
    "merry": "Merī",
    "christmas": "Kurisumasu",
    "and": "Soshite",
    "happy": "Happī",
    "new": "Atarashī",
    "year": "Toshi",
};
let inputText = "";
let inputObj = [];
let germanKeys = Object.keys(german);
let germanWords = Object.values(german);
let germanButton = document.getElementById('german-btn');
let russianButton = document.getElementById('russian-btn');
let japaneseButton = document.getElementById('japanese-btn');

const getInput = () => {
    let inputText = document.getElementById('word-input').value;
    inputObj = inputText.toLowerCase().split(" ");
    console.log(inputObj);
    return inputObj;
}
const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}
const getGerman = () => {
    let output= "";
    let objToTranslate = getInput();
    for (let i = 0; i < objToTranslate.length; i++) {
        output += german[objToTranslate[i]] + " ";
    }
    return output;
}
const getRussian = () => {
    let output= "";
    let objToTranslate = getInput();
    for (let i = 0; i < objToTranslate.length; i++) {
        output += russian[objToTranslate[i]] + " ";
    }
    return output;
}
const getJapanese = () => {
    let output= "";
    let objToTranslate = getInput();
    for (let i = 0; i < objToTranslate.length; i++) {
            output += japanese[objToTranslate[i]] + " ";
    }
    return output;
}
const germanOutput = () => {
    let outputString = "";
    let germanString = getGerman();
    for (let i = 0; i < germanString.length; i++) {
        if (germanString === "undefined ") {
            outputString = `This is not the word your locking for`;

        } else {
            outputString = `Your word is ${germanString}`;
        }
    }
    printToDom(outputString, 'word-output');
    event.preventDefault();
}
const russianOutput = () => {
    let outputString = "";
    let russianString = getRussian();
    for (let i = 0; i < russianString.length; i++) {
        if (russianString === "undefined ") {
            outputString = `This is not the word your locking for`;

        } else {
            outputString = `Your word is ${russianString}`;
        }
    }
    printToDom(outputString, 'word-output');
    event.preventDefault();
}
const japaneseOutput = () => {
    let outputString = "";
    let japaneseString = getJapanese();
    for (let i = 0; i < japaneseString.length; i++) {
        if (japaneseString === "undefined ") {
            outputString = `This is not the word your locking for`;

        } else {
            outputString = `Your word is ${japaneseString}`;
        }
    }
    printToDom(outputString, 'word-output');
    event.preventDefault();
}
germanButton.addEventListener("click", germanOutput);
russianButton.addEventListener("click", russianOutput);
japaneseButton.addEventListener("click", japaneseOutput);