#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import parseFile from '../bin/parseFile.js';
import genDiff from '../src/index.js';

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

const filepath1 = program.args[0];
const filepath2 = program.args[1];

const fullPath1 = path.resolve(process.cwd(), filepath1);
const fullPath2 = path.resolve(process.cwd(), filepath2);

const data1 = parseFile(fullPath1);
const data2 = parseFile(fullPath2);

const diff = genDiff(data1, data2);

console.log(diff);
