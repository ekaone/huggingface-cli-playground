import prompts from "prompts";
import { HfInference } from "@huggingface/inference";
import chalk from "chalk";
import "dotenv/config";

// local import
import { modelsTextGeneration, tasks } from "./constant/shared.js";

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
    message: (values) => `Select model for ${JSON.stringify(values.task)}`,
    choices: modelsTextGeneration,
  },
  {
    type: "text",
    name: "question",
    message: "What is your question?",
  },
];

(async () => {
  const output = await prompts(questions);
  await hf
    .textGeneration({
      model: output.model,
      inputs: output.question,
    })
    .then((response) => {
      log(chalk.green(response.generated_text));
    })
    .catch((error) => {
      log(error);
    });
})();
