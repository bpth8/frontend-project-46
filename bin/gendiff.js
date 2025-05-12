#!/usr/bin/env node

// eslint-disable-next-line import/no-extraneous-dependencies
import { Command } from 'commander';
// eslint-disable-next-line no-unused-vars, import/extensions
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

program.parse();
