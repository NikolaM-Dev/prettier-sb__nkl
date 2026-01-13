import fs from "node:fs";
import path from "node:path";

import * as prettier from 'prettier';

import config from './prettier.config'
import Prettier from "../../../dist/prettier/index.cjs";

export async function formatFile(
  testDir: string,
  options: prettier.Options = {}
): Promise<string> {
  const inputPath = path.join(testDir, "input.md");
  const input = fs.readFileSync(inputPath, "utf8");

  return Prettier.format(input, {
    parser: "markdown",
    ...config,
    ...options,
  });
}
