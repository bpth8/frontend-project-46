#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

program
  .argument('<filepath1>', 'path to the first configuration file')
  .argument('<filepath2>', 'path to the second configuration file');

program
  .option('-f, --format <type>', 'output format', 'stylish');

program.parse();

const options = program.opts();
const filepath1 = program.args[0];
const filepath2 = program.args[1];

console.log('Filepath 1:', filepath1);
console.log('Filepath 2:', filepath2);
console.log('Format:', options.format);
