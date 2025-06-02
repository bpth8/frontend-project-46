// __tests__/gendiffPlain.test.js

import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff plain format', () => {
  const file1 = getFixturePath('nested1.json');
  const file2 = getFixturePath('nested2.json');
  const expected = readFile('expectedPlain.txt');

  const result = genDiff(file1, file2, 'plain');
  expect(result).toBe(expected.trim());
});
