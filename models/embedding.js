import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config({ path: ".env" });

const hf = new HfInference(process.env.HF_TOKEN);

function dotProduct(a, b) {
  if (a.length !== b.length) {
    throw new Error("Both arguments must have the same length");
  }

  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}

const output1 = await hf.featureExtraction({
  model: "sentence-transformers/all-MiniLM-L6-v2",
  inputs: "That is a happy person",
});

const output2 = await hf.featureExtraction({
  model: "sentence-transformers/all-MiniLM-L6-v2",
  inputs: "That is a joyful women",
});

if (is1DArray(output1) && is1DArray(output2)) {
  const similarity = dotProduct(output1, output2);

  console.log(similarity);
}

function is1DArray(value) {
  return !Array.isArray(value[0]);
}
