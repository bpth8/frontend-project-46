import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import parseFile from '../src/parseFile.js';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff nested JSON', () => {
  const file1 = getFixturePath('nested1.json');
  const file2 = getFixturePath('nested2.json');
  const expected = readFile('expectedNested.txt').trim();
  const parsed1 = parseFile(file1);
  const parsed2 = parseFile(file2);
  expect(genDiff(parsed1, parsed2)).toBe(expected);
});
