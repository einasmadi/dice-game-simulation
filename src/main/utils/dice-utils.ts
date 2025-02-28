/**
 * Rolls the dice count number of times and returns an array with the result
 * @param count
 */
const rollDice = (count: number): number[] => {
  return Array.from( { length: count }, () => Math.floor(Math.random() * 6) + 1);
}

/**
 * Gets the score of a game played
 * @param diceCount
 */
export const getGameSimulatorScore = (diceCount: number): number => {
  let totalScore = 0;

  while (diceCount > 0) {
    const dice = rollDice(diceCount);

    const numOfThrees = dice.filter(d => d === 3).length;
    // Remove threes from dice count and don't increment the score
    if (numOfThrees > 0) {
      diceCount -= numOfThrees;
    } else {
      // Add the lowest die to the total score and remove one from the dice count
      const lowestDie = Math.min(...dice);
      diceCount -= 1;
      totalScore += lowestDie;
    }
  }
  return totalScore;
}
