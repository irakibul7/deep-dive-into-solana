import dontenv from 'dotenv';
import {
  PublicKey,
  Connection,
  clusterApiUrl,
} from '@solana/web3.js';
import { loadOrGenerateKeypair } from './helpers';
// load the .env file
dontenv.config();

/*
Load the 'payer' keypair from the local file system, or generate
a new one and storing it within the local directory.
*/

export const payer = loadOrGenerateKeypair('payer');

export const CLUSTER_URL = clusterApiUrl('devnet');

export const connection = new Connection(CLUSTER_URL);

// counter program address
export const COUNTER_PROGRAM_ADDRESS = new PublicKey(
  'ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa'
);

// counter program data address
export const COUNTER_PROGRAM_DATA_ADDRESS = new PublicKey(
  'Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod'
);
