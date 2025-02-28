import { ScoreProbabilities } from "../model/ScoreProbabilities";

export const getScoreOccurrenceProbability = (scores: number[]): ScoreProbabilities => {

  const scoreCounts: { [key: string]: number } = {};
  for (const score of scores) {
    if (scoreCounts[score]) {
      scoreCounts[score]++;
    } else {
      scoreCounts[score] = 1;
    }
  }

  const numOfSimulations: number = scores.length;
  const scoreProbabilities: ScoreProbabilities = {};

  for (const [score, count] of Object.entries(scoreCounts)) {
    scoreProbabilities[score] = {
      probability: count / numOfSimulations,
      count
    }
  }

  return scoreProbabilities;
}
