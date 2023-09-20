#!/usr/bin/env node

import chalk from "chalk";
import stripAnsi from "strip-ansi";
// const chalk = require("chalk");

const warning = chalk.hex("#FFA500");
function logLines(lines) {
    const longestLineLength = lines.reduce(
      (biggest, line) => Math.max(biggest, stripAnsi(line).length),
      0
    );
  
    console.log("-".repeat(longestLineLength + 4));
    for (const line of lines) {
      console.log(`| ${line} ${" ".repeat(longestLineLength - stripAnsi(line).length)}|`);
    }
    console.log("-".repeat(longestLineLength + 4));
  }
  
  logLines([
chalk.blue("hello world!"),
warning("this is a warning"),
chalk.red("Hi, I'm BekahHW, DevEx Lead at OpenSauced 🍕")
  ])