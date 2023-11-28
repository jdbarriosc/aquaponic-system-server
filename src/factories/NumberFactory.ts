function stringToNumber(stringValue: string): number {
    const numberValue = Number(stringValue);

    if (isNaN(numberValue)) {
        throw new Error(`The provided stringValue could not be converted to a number. ('${stringValue}' was received)`);
    }

    return numberValue;
}

function makeRandomNumber(min: number, max: number, decimalUnits = 0): number {
    if (decimalUnits < 0) {
      throw new Error('decimalUnits can not be less than 0');
    }
  
    const randomNumber = Math.random() * (max - min) + min;
    const roundingFactor = Math.pow(10, decimalUnits);
    const roundedNumber = Math.round((randomNumber + Number.EPSILON) * roundingFactor) / roundingFactor;
  
    return roundedNumber;
}
  
function makeNumberRandomPositiveOrNegative(value: number): number {
    const multiplier = Math.random() < 0.5 ? 1 : -1;
    return value * multiplier;
}
  
export {
    stringToNumber,
    makeRandomNumber,
    makeNumberRandomPositiveOrNegative,
};