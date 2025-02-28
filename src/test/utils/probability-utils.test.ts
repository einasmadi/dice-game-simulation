import { getScoreOccurrenceProbability } from "../../main/utils/probability-utils";

describe("getOccurrenceProbability", () => {

  it("should return an empty object for an empty array", () => {
    const scores: number[] = [];
    const result = getScoreOccurrenceProbability(scores);

    expect(result).toEqual({});
  });

  it("should handle a single score correctly", () => {
    const scores = [5];
    const result = getScoreOccurrenceProbability(scores);

    expect(result).toEqual({
      "5": { probability: 1, count: 1 },
    });
  });

  it("should return correct probabilities and counts", () => {
    const scores = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
    const result = getScoreOccurrenceProbability(scores);

    expect(result).toEqual({
      "1": { probability: 0.1, count: 1 },
      "2": { probability: 0.2, count: 2 },
      "3": { probability: 0.3, count: 3 },
      "4": { probability: 0.4, count: 4 },
    });
  });
});
