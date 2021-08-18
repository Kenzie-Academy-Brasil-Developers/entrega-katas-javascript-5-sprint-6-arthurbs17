// KATA 1:

const reverseString = (str) => {
    let strArr = str.split('');
    strArr.reverse();
    return strArr.join('')
}

const testReverseString1 = () => {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }

 const testReverseString2 = () => {
    let result = reverseString("Hello World");
    let expected = "dlroW olleH";
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }

//  KATA 2:

const reverseSentence = (sentence) => {
    let sentenceArr = sentence.split(' ');
    sentenceArr.reverse();
    return sentenceArr.join(' ')
}

const testReverseSentence1 = () => {
    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }

 const testReverseSentence2 = () => {
    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }

//  KATA 3:

const minimumValue = (arr) =>{
    arr.sort( (a,b) => a - b )
    let minValue = arr[0];
    return minValue
}

const testMinimumValue1 = () => {
    let result = minimumValue([7, 8, 2, 3, 4, 15, 12, 1444, 18]);
    let expected = 2;
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }

 const testMinimumValue2 = () => {
    let result = minimumValue([-10, -3, -8, 5, 20, 0, -44]);
    let expected = -44;
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }

//  KATA 4:

const maximumValue = (arr) =>{
    arr.sort( (a,b) => a - b )
    let maxValue = arr[arr.length-1];
    return maxValue
}

const testMaximumValue1 = () => {
    let result = maximumValue([7, 8, 2, 3, 4, 15, 12, 1444, 18]);
    let expected = 1444;
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }

 const testMaximumValue2 = () => {
    let result = maximumValue([-10, -3, -8, 5, 20, 0, -44]);
    let expected = 20;
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }

//  KATA 5:

const calculateRemainder = (a,b) =>{
    return a % b;
}

const testCalculateRemainder1 = () =>{
    let result = calculateRemainder(93, 2);
    let expected = 1;

    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
}

const testCalculateRemainder2 = () =>{
    let result = calculateRemainder(77, 9);
    let expected = 5;

    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
}

// KATA 6:

const distinctValues = (list) =>{
    let listArr = list.split(' ');
    let arrDistinct = [];
    listArr.forEach(element => {
        if (!arrDistinct.includes(element)){
            arrDistinct.push(element)
        }
    })
    return arrDistinct.join(' ')
}

const testDistinctValues1 = () => {
    let result = distinctValues("1 3 5 3 7 3 1 1 5")
    let expected = "1 3 5 7"

    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
}

const testDistinctValues2 = () => {
    let result = distinctValues("11 12 15 3 45 13 11 12 15 3 45 13 11 12 15 3 45 13")
    let expected = "11 12 15 3 45 13"

    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
}

// KATA 7:

const isKeyExists = (obj,key) =>{
    return key in obj;
}

const countValues = (list) =>{
    let listArr = list.split(' ');
    let countValues = {};
    let strCountArr = [];
    
    listArr.forEach(element => {
        if (!isKeyExists(countValues, element)){
            countValues[element] = 0;
        }
        if (isKeyExists(countValues, element)){
            countValues[element] += 1;
        }
    });

    for (let key in countValues){
        strCountArr.push(`${key}(${countValues[key]})`)
    }

    return strCountArr.join(' ')
}

const testCountValues1 = () =>{
    let result = countValues("1 3 5 3 7 3 1 1 5");
    let expected = "1(3) 3(3) 5(2) 7(1)";

    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`);
}

const testCountValues2 = () =>{
    let result = countValues("11 12 15 3 45 13 11 12 15 3 45 13 11 12 15 3 45 13");
    let expected = "3(3) 11(3) 12(3) 13(3) 15(3) 45(3)";

    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`);
}

// KATA 8:

const evaluateExpression = (str, obj) =>{
    let objKeys = Object.keys(obj);
    let strArr = str.split(' ');
    let newStr;

    for (let i = 0; i < strArr.length; i++){
        if (objKeys.includes(strArr[i])){
            strArr[i] = obj[strArr[i]];
        }
    }

    newStr = strArr.join(' ')

    return eval(newStr)
}


const testEvaluateExpression1 = () =>{
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3;
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }

 const testEvaluateExpression2 = () =>{
    let result = evaluateExpression("a + b + c - d", {a: 7, b: 2, c: 13, d: 3});
    let expected = 19;
    console.assert(result === expected, `Esperado: ${expected}, Obtido: ${result}`)
 }