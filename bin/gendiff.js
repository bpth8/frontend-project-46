#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import parseFile from '../src/parseFile.js';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>', 'path to the first configuration file')
  .argument('<filepath2>', 'path to the second configuration file')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const fullPath1 = path.resolve(process.cwd(), filepath1);
    const fullPath2 = path.resolve(process.cwd(), filepath2);

    const data1 = parseFile(fullPath1);
    const data2 = parseFile(fullPath2);

    const diff = genDiff(data1, data2, options.format);
    console.log(diff);
  });

program.parse();
