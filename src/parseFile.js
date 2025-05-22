import path from 'path';
import fs from 'fs';
import parse from './parsers.js'; // подключаем твой универсальный парсер

const parseFile = (filepath) => {
  const ext = path.extname(filepath);
  const fileContent = fs.readFileSync(filepath, 'utf-8');

  try {
    return parse(fileContent, ext); // вызываем парсинг по расширению
  } catch (error) {
    console.error(`Ошибка при обработке файла ${filepath}: ${error.message}`);
    process.exit(1);
  }
};

export default parseFile;
