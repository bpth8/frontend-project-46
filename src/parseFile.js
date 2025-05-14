import path from 'path';
import fs from 'fs';

const parseFile = (filepath) => {
  const ext = path.extname(filepath);

  if (ext !== '.json') {
    console.error(`Неподдерживаемый формат файла: ${ext}`);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(filepath, 'utf-8');

  try {
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Ошибка при парсинге файла ${filepath}: ${error.message}`);
    process.exit(1);
  }
};

export default parseFile;
