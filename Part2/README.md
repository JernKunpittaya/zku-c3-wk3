# zku-c3-week2-part2

1. MACI keeps encrypted addresses of voters, then the voters can either submit a vote or change their key, hence resistanct to bribery. Note that all txs are encrypted and proved via zk, so no one without salt value can know the submitted value. However, the coordinator still gets to decrypt the whole vote.
2. Done
3. Since VDF is calculated sequentially. The input of the next step depends on the previous step, hence cannot compute in parallel

Part3

1. Smart contract to handle the submit of the sealed bit auction and verify the proof that that sealed bit is currently higher than the previous submit one. The contract must also allow the winner to claim their prize. The contract can also work as escrow to have bidder deposit money beforehand to make sure they won't just bid a lot and throw the game. Framework includes hardhat, react.
