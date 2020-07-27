import { TokenSet } from './types';

export const tokensToStyleObject = (
  tokens?: TokenSet,
  prefix?: string,
  style: {
    [key: string]: string | number | undefined;
  } = {},
): React.CSSProperties => {
  for (const name in tokens) {
    if (tokens.hasOwnProperty(name)) {
      const varName = prefix ? `${prefix}${name === 'default' ? '' : '-' + name}` : `--${name}`;
      const varValue = tokens[name];

      if (varValue && typeof varValue === 'object') {
        tokensToStyleObject(varValue as TokenSet, varName, style);
      } else {
        style[varName] = varValue;
      }
    }
  }

  return style;
};
