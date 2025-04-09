import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

// Your provided secret key in Base58
const privateKeyBase58 =
  "5ZgVA97KHWLzLAmQ3qhC................AzjJwmYV5LgZoDqHxQo";

// Decode the secret key from Base58
const secretKey = bs58.decode(privateKeyBase58);

// Validate the secret key length
if (secretKey.length !== 64) {
  throw new Error("Invalid secret key length: Must be 64 bytes.");
}

// Create a Keypair from the secret key
const keypair = Keypair.fromSecretKey(secretKey);

// Verify the public key matches
if (
  keypair.publicKey.toBase58() !==
  "HybA4RSis1LVMWkYRDbTKTSZBqwUe9LdaykFfbkrG9p6"
) {
  throw new Error(
    "Public key does not match the derived public key from the secret key."
  );
}

// Output the keypair array
const keypairArray = secretKey;
console.log("Keypair Array:", keypairArray);

const buffer = Uint8Array.from(keypairArray); // Example buffer

// Convert the buffer to a numbers array
const numbersArray = Array.from(buffer);

console.log("Numbers Array:", numbersArray);



// ---------------------------------------
// get private key from wallet key pair:

import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

const numbersArray = [
  1,2,3,4,5,6,....
];

// Step 1: Convert to Uint8Array
const secretKey = Uint8Array.from(numbersArray);

// Step 2: Validate length
if (secretKey.length !== 64) {
  throw new Error("Invalid secret key length: must be 64 bytes");
}

// Step 3: Create Keypair
const keypair = Keypair.fromSecretKey(secretKey);

// Step 4: Convert back to Base58
const privateKeyBase58 = bs58.encode(secretKey);

console.log("Private Key (Base58):", privateKeyBase58);
console.log("Public Key:", keypair.publicKey.toBase58());

