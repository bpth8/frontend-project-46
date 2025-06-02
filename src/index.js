import buildDiffTree from './buildDiffTree.js';
import formatStylish from './formatters/stylish.js';

const genDiff = (obj1, obj2, format = 'stylish') => {
  const tree = buildDiffTree(obj1, obj2);
  return formatStylish(tree);
};

export default genDiff;
