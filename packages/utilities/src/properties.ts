import { filteredAssign } from './object';

/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
export const baseElementEvents = {
  onCopy: 1,
  onCut: 1,
  onPaste: 1,
  onCompositionEnd: 1,
  onCompositionStart: 1,
  onCompositionUpdate: 1,
  onFocus: 1,
  onFocusCapture: 1,
  onBlur: 1,
  onBlurCapture: 1,
  onChange: 1,
  onInput: 1,
  onSubmit: 1,
  onLoad: 1,
  onError: 1,
  onKeyDown: 1,
  onKeyDownCapture: 1,
  onKeyPress: 1,
  onKeyUp: 1,
  onAbort: 1,
  onCanPlay: 1,
  onCanPlayThrough: 1,
  onDurationChange: 1,
  onEmptied: 1,
  onEncrypted: 1,
  onEnded: 1,
  onLoadedData: 1,
  onLoadedMetadata: 1,
  onLoadStart: 1,
  onPause: 1,
  onPlay: 1,
  onPlaying: 1,
  onProgress: 1,
  onRateChange: 1,
  onSeeked: 1,
  onSeeking: 1,
  onStalled: 1,
  onSuspend: 1,
  onTimeUpdate: 1,
  onVolumeChange: 1,
  onWaiting: 1,
  onClick: 1,
  onClickCapture: 1,
  onContextMenu: 1,
  onDoubleClick: 1,
  onDrag: 1,
  onDragEnd: 1,
  onDragEnter: 1,
  onDragExit: 1,
  onDragLeave: 1,
  onDragOver: 1,
  onDragStart: 1,
  onDrop: 1,
  onMouseDown: 1,
  onMouseDownCapture: 1,
  onMouseEnter: 1,
  onMouseLeave: 1,
  onMouseMove: 1,
  onMouseOut: 1,
  onMouseOver: 1,
  onMouseUp: 1,
  onMouseUpCapture: 1,
  onSelect: 1,
  onTouchCancel: 1,
  onTouchEnd: 1,
  onTouchMove: 1,
  onTouchStart: 1,
  onScroll: 1,
  onWheel: 1,
  onPointerCancel: 1,
  onPointerDown: 1,
  onPointerEnter: 1,
  onPointerLeave: 1,
  onPointerMove: 1,
  onPointerOut: 1,
  onPointerOver: 1,
  onPointerUp: 1,
  onGotPointerCapture: 1,
  onLostPointerCapture: 1,
};

/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
export const baseElementProperties = {
  accessKey: 1, // global
  children: 1, // global
  className: 1, // global
  contentEditable: 1, // global
  dir: 1, // global
  draggable: 1, // global
  hidden: 1, // global
  htmlFor: 1, // global
  id: 1, // global
  lang: 1, // global
  role: 1, // global
  style: 1, // global
  tabIndex: 1, // global
  title: 1, // global
  translate: 1, // global
  spellCheck: 1, // global
  name: 1, // global
};

/**
 * An array of HTML element properties and events.
 *
 * @public
 */
export const htmlElementProperties = {
  ...baseElementProperties,
  ...baseElementEvents,
};

/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
export const labelProperties = {
  ...htmlElementProperties,
  form: 1, // button, fieldset, input, label, meter, object, output, select, textarea
};

/**
 * An array of AUDIO tag properties and events.
 *
 * @public
 */
export const audioProperties = {
  ...htmlElementProperties,
  height: 1, // canvas, embed, iframe, img, input, object, video
  loop: 1, // audio, video
  muted: 1, // audio, video
  preload: 1, // audio, video
  src: 1, // audio, embed, iframe, img, input, script, source, track, video
  width: 1, // canvas, embed, iframe, img, input, object, video
};

/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
export const videoProperties = {
  ...audioProperties,
  poster: 1, // video
};

/**
 * An array of OL tag properties and events.
 *
 * @public
 */
export const olProperties = {
  ...htmlElementProperties,
  start: 1, // ol
};

/**
 * An array of LI tag properties and events.
 *
 * @public
 */
export const liProperties = {
  ...htmlElementProperties,
  value: 1, // button, input, li, option, meter, progress, param
};

/**
 * An array of A tag properties and events.
 *
 * @public
 */
export const anchorProperties = {
  ...htmlElementProperties,
  download: 1, // a, area
  href: 1, // a, area, base, link
  hrefLang: 1, // a, area, link
  media: 1, // a, area, link, source, style
  rel: 1, // a, area, link
  target: 1, // a, area, base, form
  type: 1, // a, button, input, link, menu, object, script, source, style
};

/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
export const buttonProperties = {
  ...htmlElementProperties,
  autoFocus: 1, // button, input, select, textarea
  disabled: 1, // button, fieldset, input, optgroup, option, select, textarea
  form: 1, // button, fieldset, input, label, meter, object, output, select, textarea
  formAction: 1, // input, button
  formEncType: 1, // input, button
  formMethod: 1, // input, button
  formNoValidate: 1, // input, button
  formTarget: 1, // input, button
  type: 1, // a, button, input, link, menu, object, script, source, style
  value: 1, // button, input, li, option, meter, progress, param,
};

/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
export const inputProperties = {
  ...buttonProperties,
  accept: 1, // input
  alt: 1, // area, img, input
  autoCapitalize: 1, // input, textarea
  autoComplete: 1, // form, input
  checked: 1, // input
  dirname: 1, // input, textarea
  form: 1, // button, fieldset, input, label, meter, object, output, select, textarea
  height: 1, // canvas, embed, iframe, img, input, object, video
  inputMode: 1, // input
  list: 1, // input
  max: 1, // input, meter
  maxLength: 1, // input, textarea
  min: 1, // input, meter
  multiple: 1, // input, select
  pattern: 1, // input
  placeholder: 1, // input, textarea
  readOnly: 1, // input, textarea
  required: 1, // input, select, textarea
  src: 1, // audio, embed, iframe, img, input, script, source, track, video
  step: 1, // input
  size: 1, // input
  type: 1, // a, button, input, link, menu, object, script, source, style
  value: 1, // button, input, li, option, meter, progress, param
  width: 1, // canvas, embed, iframe, img, input, object, video
};

/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
export const textAreaProperties = {
  ...buttonProperties,
  autoCapitalize: 1, // input, textarea
  cols: 1, // textarea
  dirname: 1, // input, textarea
  form: 1, // button, fieldset, input, label, meter, object, output, select, textarea
  maxLength: 1, // input, textarea
  placeholder: 1, // input, textarea
  readOnly: 1, // input, textarea
  required: 1, // input, select, textarea
  rows: 1, // textarea
  wrap: 1, // textarea
};

/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
export const selectProperties = {
  ...buttonProperties,
  form: 1, // button, fieldset, input, label, meter, object, output, select, textarea
  multiple: 1, // input, select
  required: 1, // input, select, textarea
};

export const optionProperties = {
  ...htmlElementProperties,
  selected: 1, // option
  value: 1, // button, input, li, option, meter, progress, param
};

/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
export const tableProperties = {
  ...htmlElementProperties,
  cellPadding: 1, // table
  cellSpacing: 1, // table
};

/**
 * An array of TR tag properties and events.
 *
 * @public
 */
export const trProperties = htmlElementProperties;

/**
 * An array of TH tag properties and events.
 *
 * @public
 */
export const thProperties = {
  ...htmlElementProperties,
  rowSpan: 1, // td, th
  scope: 1, // th
};

/**
 * An array of TD tag properties and events.
 *
 * @public
 */
export const tdProperties = {
  ...htmlElementProperties,
  colSpan: 1, // td
  headers: 1, // td
  rowSpan: 1, // td, th
  scope: 1, // th
};

export const colGroupProperties = {
  ...htmlElementProperties,
  span: 1, // col, colgroup
};

export const colProperties = {
  ...htmlElementProperties,
  span: 1, // col, colgroup
};

/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
export const formProperties = {
  ...htmlElementProperties,
  acceptCharset: 1, // form
  action: 1, // form
  encType: 1, // form
  method: 1, // form
  noValidate: 1, // form
  target: 1, // form
};

/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
export const iframeProperties = {
  ...htmlElementProperties,
  allow: 1, // iframe
  allowFullScreen: 1, // iframe
  allowPaymentRequest: 1, // iframe
  allowTransparency: 1, // iframe
  csp: 1, // iframe
  height: 1, // canvas, embed, iframe, img, input, object, video
  importance: 1, // iframe
  referrerPolicy: 1, // iframe
  sandbox: 1, // iframe
  src: 1, // audio, embed, iframe, img, input, script, source, track, video
  srcDoc: 1, // iframe
  width: 1, // canvas, embed, iframe, img, input, object, video,
};

/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
export const imgProperties = {
  ...htmlElementProperties,
  alt: 1, // area, img, input
  crossOrigin: 1, // img
  height: 1, // canvas, embed, iframe, img, input, object, video
  src: 1, // audio, embed, iframe, img, input, script, source, track, video
  srcSet: 1, // img, source
  useMap: 1, // img, object,
  width: 1, // canvas, embed, iframe, img, input, object, video
};

/**
 * @deprecated Use imgProperties for img elements.
 */
export const imageProperties = imgProperties;

/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
export const divProperties = htmlElementProperties;

/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
export function getNativeProps<T>(
  props: {},
  allowedPropNames: Record<string, number>,
  excludedPropNames?: string[],
): T {
  // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
  // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
  // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
  // return native props.
  // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
  return filteredAssign(
    (propName: string) => {
      return (
        (!excludedPropNames || excludedPropNames.indexOf(propName) < 0) &&
        (propName.indexOf('data-') === 0 || propName.indexOf('aria-') === 0 || !!allowedPropNames[propName])
      );
    },
    {},
    props,
  ) as T;
}
