const indent = (depth, replacer = ' ', spacesCount = 4) =>
  replacer.repeat(Math.max(depth * spacesCount - 2, 0));

const stringify = (value, depth) => {
  if (typeof value === 'string') {
    return value === '' ? '""' : value;
  }

  if (value === null) {
    return 'null';
  }

  if (typeof value !== 'object') {
    return String(value);
  }

  const indentObj = indent(depth + 1);
  const bracketIndent = indent(depth);

  const entries = Object.entries(value);
  const lines = entries.map(
    ([key, val]) => `${indentObj}  ${key}: ${stringify(val, depth + 1)}`
  );

  return `{\n${lines.join('\n')}\n${bracketIndent}  }`;
};

const formatStylish = (tree, depth = 1) => {
  const lines = tree.map((node) => {
    const {
      key, type, value, oldValue, newValue, children,
    } = node;

    switch (type) {
      case 'added':
        return `${indent(depth)}+ ${key}: ${stringify(value, depth)} # Добавлена`;
      case 'removed':
        return `${indent(depth)}- ${key}: ${stringify(value, depth)} # Удалена`;
      case 'unchanged':
        return `${indent(depth)}  ${key}: ${stringify(value, depth)}`;
      case 'updated':
        return [
          `${indent(depth)}- ${key}: ${stringify(oldValue, depth)} # Старое значение`,
          `${indent(depth)}+ ${key}: ${stringify(newValue, depth)} # Новое значение`
        ].join('\n');
      case 'nested':
        return `${indent(depth)}  ${key}: ${formatStylish(children, depth + 1)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return `{\n${lines.join('\n')}\n${indent(depth - 1)}}`;
};

export default formatStylish;
