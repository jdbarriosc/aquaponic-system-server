function makeRandomNumber(min: number, max: number, decimalUnits = 0): number {
  if (decimalUnits < 0) {
    throw new Error('decimalUnits can not be less than 0');
  }

  const randomNumber = Math.random() * (max - min) + min;
  const roundingFactor = Math.pow(10, decimalUnits);
  const roundedNumber = Math.round((randomNumber + Number.EPSILON) * roundingFactor) / roundingFactor;

  return roundedNumber;
}

export default makeRandomNumber;