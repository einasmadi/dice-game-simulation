import { getGameSimulatorScore } from "../../main/utils/dice-utils";

describe("getGameSimulatorScore", () => {
  it("should return an empty object for an empty array", () => {
    const result = getGameSimulatorScore(0);
    expect(result).toEqual(0);
  });

  // How can this be tested better?
});
