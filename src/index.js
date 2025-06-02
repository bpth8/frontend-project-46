import buildDiffTree from './buildDiffTree.js';
import format from './formatters/index.js';

const genDiff = (obj1, obj2, formatName = 'stylish') => {
  const tree = buildDiffTree(obj1, obj2);
  return format(tree, formatName);
};

export default genDiff;