import { tokensToStyleObject, TokenSet } from '@fluentui/react-theme-provider';

export const useInlineTokens = (props: { style?: React.CSSProperties; tokens?: TokenSet }) => {
  const { tokens } = props;

  if (tokens) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props.style = tokensToStyleObject(tokens as any, '--button');
  }
};
