import {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
  Keypair,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

import * as dotenv from 'dotenv';
import { getKeypairFromEnvironment } from '@solana-developers/node-helpers';

dotenv.config();

const payer = getKeypairFromEnvironment('SECRET_KEY');
const connection = new Connection(clusterApiUrl('devnet'));

const PING_PROGRAM_ADDRESS =
  'ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa';
const PING_PROGRAM_DATA_ADDRESS =
  'Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod';

await connection.requestAirdrop(
  payer.publicKey,
  LAMPORTS_PER_SOL * 1
);

async function sendPingTransaction(
  connection: Connection,
  payer: Keypair
) {
  const transaction = new Transaction();
  const programId = new PublicKey(PING_PROGRAM_ADDRESS);
  const pingProgramDataId = new PublicKey(PING_PROGRAM_DATA_ADDRESS);

  const instruction = new TransactionInstruction({
    keys: [
      {
        pubkey: pingProgramDataId,
        isSigner: false,
        isWritable: true,
      },
    ],
    programId,
  });

  transaction.add(instruction);

  const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
  );

  console.log(
    `You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`
  );
}

sendPingTransaction(connection, payer);
