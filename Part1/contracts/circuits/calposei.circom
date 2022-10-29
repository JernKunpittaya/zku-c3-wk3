pragma circom 2.0.0;
// [assignment] implement a variation of mastermind from https://en.wikipedia.org/wiki/Mastermind_(board_game)#Variation as a circuit
//Bagel Implementation
include "../../node_modules/circomlib/circuits/poseidon.circom";
template calposei(n){
    assert(n <= 252);
    signal input in[n]; 
    signal output out;

    component poseidon = Poseidon(n);
    for (var i =0;i<n;i++){
    poseidon.inputs[i] <== in[i];
    }
    out <== poseidon.out;
}
component main = calposei(4);