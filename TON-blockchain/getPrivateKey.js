const TonWeb = require("tonweb");
const bip39 = require("bip39");
const nacl = require("tweetnacl");

// Your 24-word mnemonic phrase
// const mnemonic = "YOUR 24-WORD PHRASE HERE";
const mnemonic =
  "door grape ready more velvet sunset ..... all 24 words in a single string";

(async () => {
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const seedBuffer = seed.slice(0, 32); // Use first 32 bytes
  const keyPair = nacl.sign.keyPair.fromSeed(seedBuffer);

  console.log("Public Key:", Buffer.from(keyPair.publicKey).toString("hex"));
  console.log("Secret Key:", Buffer.from(keyPair.secretKey).toString("hex"));
})();
