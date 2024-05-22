import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import { payer, connection } from '../lib/vars';

const main = async () => {
  const balance = await connection.getBalance(payer.publicKey);
  const balanceInSol = balance / LAMPORTS_PER_SOL;

  console.log(
    `💰 The balance of the account at ${payer.publicKey} is ${balanceInSol} SOL`
  );
};

main().then(() => process.exit());
