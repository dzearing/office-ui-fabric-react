/**
 * A baseline set of color plates.
 */
export type ColorTokens = {
  background: string;
  contentColor: string;
  subTextColor: string;
  linkColor: string;
  iconColor: string;
  borderColor: string;
  dividerColor: string;
  focusColor: string;
  focusInnerColor: string;
};

/**
 * A set of states for each color plate to use.
 *
 * Note:
 *
 * State names here align to a consistent naming convention:
 *
 * The component is _____
 *
 * Bad: "hover", Good: "hovered"
 *
 * Additional considerations:
 *
 * The term "active" in css means that the keyboard or mouse button
 * which activates the component is pressed down. It is however ambiguous
 * with a focused state, as the HTML object model refers to the focused
 * element as the "activeElement". To resolve ambiguity and to be more
 * compatible with other platforms reusing token names, we have decided to snap
 * to "pressed".
 */
export type ColorTokenStates = {
  hovered: ColorTokens;
  pressed: ColorTokens;
  disabled: ColorTokens;
  checked: ColorTokens;
  checkedHovered: ColorTokens;
  checkedPressed: ColorTokens;
};

export type ColorTokenSet = ColorTokens & ColorTokenStates;

export type FontTokens = Partial<{
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
}>;

export type TokenSetInternal = string | TokenSet | undefined;

/**
 * A token set can provide a single string or object, mapping additional sub-parts of a token set.
 */
export interface TokenSet extends Record<string, TokenSetInternal> {}

/**
 * Recursive partial type.
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

/**
 * A prepared (fully expanded) theme object.
 */
export interface Theme {
  tokens: {
    color: {
      body: ColorTokenSet;
      // brand: ColorTokenSet;
      // neutral: ColorTokenSet;
      // danger: ColorTokenSet;
      // info: ColorTokenSet;
      // warning: ColorTokenSet;

      [key: string]: ColorTokenSet;
    };

    // font: {
    //   body: FontTokens;
    // }
  };

  stylesheets: string[];

  components: Record<string, any>;
}

/**
 * A partial theme, provided by the customer. The internal `createTheme` helper will fill in the rest.
 */
export interface PartialTheme extends RecursivePartial<Theme> {}
