import path from 'path';
import fs from 'fs';
import parse from './parsers.js';

const parseFile = (filepath) => {
  const ext = path.extname(filepath);
  const fileContent = fs.readFileSync(filepath, 'utf-8');

  try {
    return parse(fileContent, ext);
  } catch (error) {
    console.error(`Ошибка при обработке файла ${filepath}: ${error.message}`);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default parseFile;
