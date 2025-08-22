// tokenizer.js
import { Tiktoken } from "js-tiktoken/lite";

// Build a simple vocab: letters + digits + specials
const chars = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
const specialTokens = {
  "<PAD>": 0,
  "<UNK>": 1,
  "<EOS>": 2,
  "<BOS>": 3,
};

// assign ids after specials
let id = Object.keys(specialTokens).length;
let tokenMap = {};

for (const c of chars) {
  tokenMap[c] = id++;
}

// Now create tokenizer with custom vocab
const enc = new Tiktoken(tokenMap, specialTokens);

export function encode(text) {
  return enc.encode(text, { allowedSpecial: Object.keys(specialTokens) });
}

export function decode(tokens) {
  return enc.decode(tokens);
}
