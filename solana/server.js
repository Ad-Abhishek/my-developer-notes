// Using previously available wallets for transactions
const solanaWeb3 = require("@solana/web3.js");

// Function to connect to the Solana devnet
async function connectToSolana() {
  const connection = new solanaWeb3.Connection(
    solanaWeb3.clusterApiUrl("devnet"),
    "confirmed"
  );
  console.log("Connected to the Solana devnet");
  return connection;
}

// Function to airdrop SOL
async function airdrop(connection, publicKey, amountSol) {
  console.log(`Airdropping ${amountSol} SOL to ${publicKey.toString()}...`);
  const airdropSignature = await connection.requestAirdrop(
    publicKey,
    solanaWeb3.LAMPORTS_PER_SOL * amountSol
  );
  await connection.confirmTransaction(airdropSignature);
  console.log("Airdrop successful!");
}

// Function to send SOL
async function transferSol(
  connection,
  fromKeypair,
  recipientPublicKeyString,
  amountSol
) {
  const recipientPublicKey = new solanaWeb3.PublicKey(recipientPublicKeyString);

  // Create the transaction
  const transaction = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
      fromPubkey: fromKeypair.publicKey,
      toPubkey: recipientPublicKey,
      lamports: solanaWeb3.LAMPORTS_PER_SOL * amountSol,
    })
  );

  // Sign and send the transaction
  const signature = await solanaWeb3.sendAndConfirmTransaction(
    connection,
    transaction,
    [fromKeypair]
  );

  console.log("Transaction Successful with signature: ", signature);
}

// Main function
(async () => {
  const connection = await connectToSolana();

  // Replace this with your secret key array
  const secretKey = Uint8Array.from([
    /* Paste your secret key array here */
    228, 64, 43, 84, 206, 50, 237, 5, 191, 47, 109, 60, 110, 74, 142, 14, 206,
    34, 72, 169, 77, 46, 4, 134, 235, 115, 50, 94, 246, 223, 5, 119, 252, 58,
    34, 251, 234, 67, 65, 75, 49, 135, 199, 131, 187, 111, 247, 40, 21, 42, 218,
    108, 239, 5, 249, 71, 25, 216, 230, 9, 109, 90, 149, 147,
  ]);

  // Load your existing wallet
  const senderKeypair = solanaWeb3.Keypair.fromSecretKey(secretKey);
  console.log("Loaded Wallet Address: ", senderKeypair.publicKey.toString());

  // Airdrop SOL if necessary (e.g., for testing purposes)
  const balance = await connection.getBalance(senderKeypair.publicKey);
  if (balance < solanaWeb3.LAMPORTS_PER_SOL) {
    console.log("Not enough SOL. Requesting an airdrop...");
    await airdrop(connection, senderKeypair.publicKey, 1);
  } else {
    console.log(
      "Sufficient SOL balance: ",
      balance / solanaWeb3.LAMPORTS_PER_SOL,
      " SOL"
    );
  }

  // Define the recipient's public key
  const recipientPublicKeyString =
    "WwghVQ2o5EKTa6rwiVchNYeGairznNvvbeCtJiB5azH";

  // Transfer 1 SOL from sender to recipient
  await transferSol(connection, senderKeypair, recipientPublicKeyString, 0.9);
})();
