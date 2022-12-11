import { ReactNode } from 'react';
export interface BaseStyledProps {
  noVisibleScroll?: boolean;
  children?: ReactNode | ReactNode[];
  opacity?: string;

  width?: string | number;
  height?: string | number;

  minHeight?: string;
  maxHeight?: string;
  maxWidth?: string;
  minWidth?: string;

  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;

  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;

  border?: string | boolean;
  borderStyle?: string | false;
  borderTop?: string | false;
  borderRight?: string | false;
  borderBottom?: string | false;
  borderLeft?: string | false;
  borderRadius?: string | false;
  borderColor?: string | false;
  borderWidth?: string | false;
  borderCollapse?: 'collapse' | 'separate';

  outline?: string | false;

  boxSizing?: string | false;
  boxShadow?: string | false;

  display?: string;

  overflow?: string;
  overflowX?: string;
  overflowY?: string;

  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex?: string;

  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: string;
  textOverflow?: string;
  textTransform?: string;
  whiteSpace?: string;
  textDecoration?: string;

  background?: string;
  color?: string;

  cursor?: string;

  transform?: string;

  userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all' | 'inherit' | 'initial' | 'unset';
  writingMode?: 'horizontal-tb' | 'horizontal-bt' | 'vertical-rl' | 'vertical-lr' | 'inherit' | 'initial' | 'unset';
  pointerEvents?: string;
  transition?: string;

  hoverColor?: string;
  hoverOutline?: string;
}

export interface FlexProps {
  gap?: string;

  alignItems?: string;
  justifyContent?: string;
  justifySelf?: 'stretch' | 'center' | 'start' | 'end';
  alignSelf?: string;

  flex?: string;
  flexWrap?: string;
  flexFlow?: string;
  flexGrow?: string;
  flexDirection?: string;
}

export interface GridProps {
  grid?: string;

  gridGap?: string;
  gridRowGap?: string;
  gridColumnGap?: string;

  gridRow?: string;
  gridArea?: string;
  gridColumn?: string;

  gridTemplate?: string;
  gridTemplateRows?: string;
  gridTemplateAreas?: string;
  gridTemplateColumns?: string;

  gridAutoRows?: string;
  gridAutoFlow?: string;
  gridAutoColumns?: string;

  gridRowEnd?: string;
  gridRowStart?: string;
  gridColumnEnd?: string;
  gridColumnStart?: string;

  alignItems?: string;
  alignContent?: string;

  justifyItems?: string;
  justifyContent?: string;

  gap?: string;
}

export interface AdditionalStyledProps {
  focusStyles?: boolean;
  hoverStyles?: boolean;
}

export interface ImgProps {
  objectFit?: string;
}