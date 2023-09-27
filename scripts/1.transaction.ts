import {
  PublicKey,
  LAMPORTS_PER_SOL,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

import {
  payer,
  connection,
  COUNTER_PROGRAM_ADDRESS,
  COUNTER_PROGRAM_DATA_ADDRESS,
} from '../lib/vars';
import { exploreURL, printConsoleSeparator } from '../lib/helpers';

async function sendTransaction() {
  // get the current balance of the `payer` account on chain
  const currentBalance = await connection.getBalance(payer.publicKey);

  console.log(
    "Current balance of 'payer' (in lamports):",
    currentBalance
  );
  console.log(
    "Current balance of 'payer' (in SOL):",
    currentBalance / LAMPORTS_PER_SOL
  );

  // if balance is low (< 1 SOL), request an airdrop
  if (currentBalance <= LAMPORTS_PER_SOL) {
    console.log(`Requesting a SOL airdrop for payer...`);
    await connection.requestAirdrop(
      payer.publicKey,
      LAMPORTS_PER_SOL * 1
    );
  }

  const transaction = new Transaction();

  const instruction = new TransactionInstruction({
    keys: [
      {
        pubkey: COUNTER_PROGRAM_DATA_ADDRESS,
        isSigner: false,
        isWritable: true,
      },
    ],
    programId: COUNTER_PROGRAM_ADDRESS,
  });

  transaction.add(instruction);

  try {
    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [payer]
    );

    console.log('Transaction completed ✅ ');
    printConsoleSeparator(exploreURL({ txSignature: signature }));
  } catch (error) {
    console.log('error: ', error);
  }
}

sendTransaction();
