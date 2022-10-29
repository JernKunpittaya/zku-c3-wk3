//[assignment] write your own unit test to show that your Mastermind variation circuit is working as expected
const chai = require("chai");
const path = require("path");

const wasm_tester = require("circom_tester").wasm;

const assert = chai.assert;
let circuit;
let pubSol;

describe("Mastermind test [Bagel]", function () {
  before(async function () {
    circuit = await wasm_tester(
      "contracts/circuits/MastermindVariation.circom"
    );
    await circuit.loadConstraints();

    pubSol =
      16527882590851973909216684423911228253643535796312020993756620037609096758866n;
    //console.log(pubSol);
  });

  it("should return true if result is correct", async function () {
    const INPUT = {
      pubGuessA: 1,
      pubGuessB: 3,
      pubGuessC: 4,
      pubNumHit: 1,
      pubNumBlow: 1,
      pubSolnHash: pubSol,
      privSolnA: 1,
      privSolnB: 2,
      privSolnC: 3,
      privSalt: 36,
    };
    await circuit.calculateWitness(INPUT, true);
  });
  it("should return false if result is incorrect", async function () {
    const INPUT = {
      pubGuessA: 1,
      pubGuessB: 3,
      pubGuessC: 2,
      pubNumHit: 2,
      pubNumBlow: 1,
      pubSolnHash: pubSol,
      privSolnA: 1,
      privSolnB: 2,
      privSolnC: 3,
      privSalt: 36,
    };

    try {
      await circuit.calculateWitness(INPUT, true);
      assert(false);
    } catch (err) {
      assert(err.message.includes("Assert Failed"));
    }
  });
  it("should fail if the inputs are not valid", async function () {
    const INPUT = {
      pubGuessA: 1,
      pubGuessB: 13,
      pubGuessC: 3,
      pubNumHit: 2,
      pubNumBlow: 1,
      pubSolnHash: pubSol,
      privSolnA: 1,
      privSolnB: 2,
      privSolnC: 3,
      privSalt: 36,
    };

    try {
      await circuit.calculateWitness(INPUT, true);
      assert(false);
    } catch (err) {
      assert(err.message.includes("Assert Failed"));
    }
  });
});
