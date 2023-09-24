import {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
  Keypair,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
  SystemProgram,
} from '@solana/web3.js';

import * as dotenv from 'dotenv';
import { getKeypairFromEnvironment } from '@solana-developers/node-helpers';

dotenv.config();

const payer = getKeypairFromEnvironment('SECRET_KEY');
const connection = new Connection(clusterApiUrl('devnet'));

const transaction = new Transaction();

const sender = new PublicKey(payer.publicKey.toBase58());

const recipient = new PublicKey(
  'Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod'
);

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: sender,
  toPubkey: recipient,
  lamports: LAMPORTS_PER_SOL * 1,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(
  connection,
  transaction,
  [payer]
);

console.log(
  `You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`
);
console.log(`✅ Finished!`);
