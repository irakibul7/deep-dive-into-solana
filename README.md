# Solana Programs
### **SOL**

SOL is Solana's native token - SOL is used to pay transaction fees, pay rent for accounts, and more. SOL is sometimes shown with the ◎ symbol.
Each SOL is made from 1 billion **Lamports**. In the same way that finance apps typically do math in cents (for USD), pence (for GBP),
Solana apps typically use do math using Lamports and only convert to SOL to display data.

## Install Dependencies
```sh
npm install
```

## Compilation
To compile the TypeScript files to JavaScript, run the following command:

```sh
npx tsc
```
This command will transpile all .ts files in the src directory and output the JavaScript files into the dist directory, preserving the directory structure.

## Running the Program
After compilation, run the compiled JavaScript files using Node.js. For example, to run example.js from the dist/scripts directory:

```sh
node dist/scripts/example.js
```

## Running TypeScript Files Directly
To run TypeScript files directly, use ts-node. For example, to run example.ts from the src/scripts directory:

```sh
npx ts-node src/scripts/example.ts
```