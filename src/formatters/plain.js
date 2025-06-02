const isObject = (value) => value !== null && typeof value === 'object';

const formatValue = (value) => {
  if (isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (value === null) {
    return 'null';
  }
  return String(value);
};

const iter = (diffTree, path = []) => {
  const lines = diffTree.flatMap((node) => {
    const propertyPath = [...path, node.key].join('.');

    switch (node.type) {
      case 'added':
        return `Property '${propertyPath}' was added with value: ${formatValue(node.value)}`;
      case 'removed':
        return `Property '${propertyPath}' was removed`;
      case 'changed':
        return `Property '${propertyPath}' was updated. From ${formatValue(node.value1)} to ${formatValue(node.value2)}`;
      case 'nested':
        return iter(node.children, [...path, node.key]);
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });
  return lines;
};

const formatPlain = (diffTree) => {
  const lines = iter(diffTree);
  return lines.join('\n');
};

export default formatPlain;