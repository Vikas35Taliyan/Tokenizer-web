import { loadVocab, encode, decode } from "./tokenizer.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Fetch vocab.json as text
  const response = await fetch("./vocab.json");
  const vocabText = await response.text();
  await loadVocab(vocabText);

  // Encode button
  document.getElementById("encodeBtn").addEventListener("click", () => {
    const input = document.getElementById("inputText").value;
    const encoded = encode(input);
    document.getElementById("output").textContent =
      "Encoded: " + JSON.stringify(encoded);
  });

  // Decode button
  // document.getElementById("decodeBtn").addEventListener("click", () => {
  //   const input = document.getElementById("inputText").value;
  //   try {
  //     const tokenIds = JSON.parse(input);
  //     const decoded = decode(tokenIds);
  //     document.getElementById("output").textContent = "Decoded: " + decoded;
  //   } catch (err) {
  //     document.getElementById("output").textContent =
  //       "❌ Enter valid token ID array (e.g. [1,2,3])";
  //   }
  // });
  document.getElementById("decodeBtn").addEventListener("click", () => {
    let input = document.getElementById("decodeInput").value.trim();

    try {
      // Ensure valid JSON array
      if (!input.startsWith("[")) {
        throw new Error("Not a valid array");
      }

      const tokenIds = JSON.parse(input);
      const decoded = decode(tokenIds);
      document.getElementById("decodeOutput").textContent = decoded;
    } catch (err) {
      document.getElementById("decodeOutput").textContent =
        "❌ Enter valid token ID array (e.g. [1,2,3])";
    }
  });
});
