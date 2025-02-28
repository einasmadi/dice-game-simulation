import * as readline from "node:readline";
import * as process from "node:process";

export class ReadLineService {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  public askQuestion(message: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(message, resolve);
    })
  }

  public async getNumberFromUser(message: string): Promise<number> {
    while (true) {
      const userInput = await this.askQuestion(message);
      const number = parseFloat(userInput);

      if (!isNaN(number)) {
        return number;
      } else {
        console.log("Invalid number. Please try again.")
      }
    }
  }

  public close(): void {
    this.rl.close();
  }
}
