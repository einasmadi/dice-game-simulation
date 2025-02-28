/**
 * Parses a given number to a default of 2 decimal numbers unless otherwise listed
 * @param number
 * @param fractionDigits
 */
export const parseNumber = (number: number, fractionDigits: number = 2) => {
  return parseFloat(number.toFixed(fractionDigits));
}
