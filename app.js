import { HfInference } from "@huggingface/inference";
import prompts from "prompts";
import chalk from "chalk";
import "dotenv/config";

import {
  modelsTextGeneration,
  modelsSummarization,
  tasks,
} from "./constant/shared.js";

const { log } = console;
const hf = new HfInference(process.env.HUGGINGFACE_API_TOKEN);

const questions = [
  {
    type: "select",
    name: "task",
    message: "Select tasks",
    choices: tasks,
  },
  {
    type: "select",
    name: "model",
    message: (values) => `Select model for ${JSON.stringify(values)}`,
    choices: (values) => {
      if (values === "text-generation") {
        return modelsTextGeneration;
      } else {
        return modelsSummarization;
      }
    },
  },
  {
    type: "text",
    name: "question",
    message: "What is your question?",
  },
];

const onSubmit = async (prompt, answer, answers) => {
  // {"task":"text-generation","model":"gpt2"}

  if (
    answers.task === "text-generation" &&
    answers.model === "gpt2" &&
    answers.question
  ) {
    await hf
      .textGeneration({
        model: answers.model,
        inputs: answers.question,
      })
      .then((response) => {
        log(chalk.green(response.generated_text));
      })
      .catch((error) => {
        log(error);
      });
  } else if (
    answers.task === "text-generation" &&
    answers.model === "bigscience/bloom-560m" &&
    answers.question
  ) {
    await hf
      .textGeneration({
        model: answers.model,
        inputs: answers.question,
      })
      .then((response) => {
        log(chalk.green(response.generated_text));
      })
      .catch((error) => {
        log(error);
      });
  } else {
    return;
  }
};

(async () => {
  await prompts(questions, { onSubmit });
})();
