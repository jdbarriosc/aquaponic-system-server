function stringToBoolean(stringValue: string): boolean {
    const lowerCasedStringValue = stringValue.toLocaleLowerCase();
    if (lowerCasedStringValue !== 'true' && lowerCasedStringValue !== 'false') {
        throw new Error(`The provided stringValue could not be converted to boolean. ('${stringValue}' was received)`);
    }

    return lowerCasedStringValue === 'true';
}
  
export {
    stringToBoolean,
};