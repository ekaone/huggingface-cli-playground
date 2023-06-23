import chalk from "chalk";

// Models
export const modelsTextGeneration = [
  {
    title: "gpt2",
    value: "gpt2",
    description: chalk.yellow(
      "GPT-2 is a transformers model pretrained on a very large corpus of English data in a self-supervised fashion"
    ),
  },
  {
    title: "bigscience/bloom-560m",
    value: "bigscience/bloom-560m",
    description: chalk.yellow(
      "BigScience Large Open-science Open-access Multilingual Language Model"
    ),
  },
];

export const modelsSummarization = [
  {
    title: "facebook/bart-large-cnn",
    value: "facebook/bart-large-cnn",
    description: chalk.yellow("This is facebook/bart-large-cnn"),
  },
  {
    title: "philschmid/bart-large-cnn-samsum",
    value: "philschmid/bart-large-cnn-samsum",
    description: chalk.yellow("This is philschmid/bart-large-cnn-samsum"),
  },
];

// Tasks
export const tasks = [
  {
    title: "Text Generation",
    value: "text-generation",
    description: chalk.yellow("Generate text from a prompt"),
  },
  {
    title: "Summarization",
    value: "text-summarization",
    description: chalk.yellow("Summarize text"),
    disabled: true,
  },
];
