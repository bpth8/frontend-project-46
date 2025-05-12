import fs from 'fs';

// eslint-disable-next-line consistent-return
const parseFile = (filepath) => {
  const fileContent = fs.readFileSync(filepath, 'utf-8');

  try {
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Ошибка при парсинге файла ${filepath}: ${error.message}`);
    process.exit(1);
  }
};

export default parseFile;
