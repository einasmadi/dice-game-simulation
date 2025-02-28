import { ReadLineService } from "./service/ReadLineService";
import { getGameSimulatorScore } from "./utils/dice-utils";
import { ScoreProbabilities } from "./model/ScoreProbabilities";
import { getScoreOccurrenceProbability } from "./utils/probability-utils";
import { parseNumber } from "./utils/number-utils";

/**
 * Print the number of occurrence and probability of each score
 * @param scores
 */
const printScoreProbabilities = (scores: number[]) => {
  const scoresProbabilities: ScoreProbabilities = getScoreOccurrenceProbability(scores);
  for (const [score, { probability, count}] of Object.entries(scoresProbabilities)) {
    console.log(`Total ${score} occurs ${parseNumber(probability)} occurred ${count} times.`);
  }
}

/**
 * Prints the total time the simulation took
 * @param startTime
 * @param endTime
 */
const printTimeTaken = (startTime: number, endTime: number) => {
  const elapsedTime = endTime - startTime;
  console.log(`Total simulation took ${parseNumber(elapsedTime / 1000, 5)} seconds.`);
}

/**
 * Plays the dice game by asking the user how many simulations they would like and how many dices they have
 */
const playDiceGameSimulation = async () => {
  const rlService = new ReadLineService();
  const scores: number[] = [];

  try {
    const numOfSimulations: number = await rlService.getNumberFromUser("Number of simulations? ");
    const numOfDice: number = await rlService.getNumberFromUser("Number of dice? ");

    console.log(`Number of simulations was ${numOfSimulations} using ${numOfDice} dice.`)

    const startTime = performance.now();
    for (let i = 0; i < numOfSimulations; i++) {
      scores.push(getGameSimulatorScore(numOfDice));
    }
    const endTime = performance.now();

    printScoreProbabilities(scores);
    printTimeTaken(startTime, endTime);

  } finally {
    rlService.close();
  }
}

playDiceGameSimulation();
