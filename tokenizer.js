let vocab = {};
let idToToken = {};

// Load vocab from JSON string
export async function loadVocab(vocabText) {
  const parsed = JSON.parse(vocabText);
  vocab = parsed;
  idToToken = Object.fromEntries(
    Object.entries(parsed).map(([t, id]) => [id, t])
  );
  return vocab;
}

export function encode(text) {
  const tokens = text.split(""); // character-level tokenizer
  return tokens.map((t) => vocab[t] ?? vocab["<unk>"]);
}

export function decode(tokenIds) {
  return tokenIds.map((id) => idToToken[id] ?? "<unk>").join("");
}
