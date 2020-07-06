import { tokensToStyleObject, TokenSetType } from '@fluentui/react-theme-provider';

export const useInlineTokens = (props: { style?: React.CSSProperties; tokens?: TokenSetType }) => {
  const { tokens, style } = props;

  if (tokens) {
    // tslint:disable-next-line:no-any
    props.style = tokensToStyleObject(tokens as any, '--button');
  }
};
