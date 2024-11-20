// Creating a new keypair for transaction
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

// Function to create a new keypair
function generateKeyPair() {
  const keypair = solanaWeb3.Keypair.generate();
  console.log("New Wallet Address: ", keypair.publicKey.toString());
  return keypair;
}

// Function to airdrop 1 SOL
async function airdrop(connection, publicKey) {
  console.log("Requesting airdrop...");
  const airdropSignature = await connection.requestAirdrop(
    publicKey,
    solanaWeb3.LAMPORTS_PER_SOL
  );
  await connection.confirmTransaction(airdropSignature);
  console.log("Airdrop Complete. Wallet Balance Updated!");
}

// Function to transfer SOL to another wallet
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

  // Create a new keypair (sender)
  const senderKeypair = generateKeyPair();

  // Airdrop 1 SOL to the sender wallet
  await airdrop(connection, senderKeypair.publicKey);

  // Define the recipient's public key (replace with an actual recipient's key)
  const recipientPublicKeyString =
    "WwghVQ2o5EKTa6rwiVchNYeGairznNvvbeCtJiB5azH";

  // Transfer 0.01 SOL from sender to recipient
  await transferSol(connection, senderKeypair, recipientPublicKeyString, 0.01);
})();
