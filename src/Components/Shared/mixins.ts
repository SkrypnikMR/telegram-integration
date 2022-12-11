import { css } from 'styled-components';
import { BaseStyledProps, FlexProps, GridProps } from './types';

export const BaseStylesMixin = css<BaseStyledProps>`
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : 'auto'};
  
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}
  
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`}
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`}
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`}

  ${({ boxSizing }) => boxSizing && `box-sizing: ${boxSizing};`}
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`}
  
  ${({ border }) => border && `border: ${border};`}
  ${({ outline }) => outline && `outline: ${outline};`}
  ${({ borderTop }) => borderTop && `border-top: ${borderTop};`}
  ${({ borderRight }) => borderRight && `border-right: ${borderRight};`}
  ${({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom};`}
  ${({ borderLeft }) => borderLeft && `border-left: ${borderLeft};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`}
  ${({ borderStyle }) => borderStyle && `border-style: ${borderStyle};`}
  ${({ borderCollapse }) => borderCollapse && `border-collapse: ${borderCollapse};`}
  
  ${({ display }) => display && `display: ${display};`}
  
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ overflowX }) => overflowX && `overflow-x: ${overflowX};`}
  ${({ overflowY }) => overflowY && `overflow-y: ${overflowY};`}

  ${({ position }) => position && `position: ${position};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}

  ${({ textOverflow }) => textOverflow && `text-overflow: ${textOverflow};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`}
  ${({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration};`}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  
  ${({ background }) => background && `background: ${background};`}
  ${({ color }) => color && `color: ${color};`}

  ${({ cursor }) => cursor && `cursor: ${cursor};`}

  ${({ transform }) => transform && `transform: ${transform};`}

  ${({ userSelect }) => userSelect && `user-select: ${userSelect};`}


  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ writingMode }) => writingMode && `writing-mode: ${writingMode};`}
  ${({ pointerEvents }) => pointerEvents && `pointer-events: ${pointerEvents};`}
  ${({ transition }) => transition && `transition: ${transition};`}

  ${({ hoverColor }) => hoverColor && css`
    :hover {
      color: ${hoverColor};
      fill: ${hoverColor};
    }
  `}

  ${({ hoverOutline }) => hoverOutline && css`
    :hover {
      outline: ${hoverOutline};
    }
  `}
`;

export const FocusMixin = css<BaseStyledProps>`
  :focus{
    &&&&{
      ${BaseStylesMixin}
    }
  }
`;

export const FlexMixin = css<FlexProps>`
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
  ${({ justifySelf }) => justifySelf && `justify-self: ${justifySelf};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}

  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}

  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ flexFlow }) => flexFlow && `flex-flow: ${flexFlow};`}
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
`;

export const GridMixin = css<GridProps>`
  ${({ grid }) => grid && `grid: ${grid};`}
  ${({ gap }) => gap && `gap: ${gap};`}

  ${({ gridGap }) => gridGap && `grid-gap: ${gridGap};`}
  ${({ gridRowGap }) => gridRowGap && `grid-row-gap: ${gridRowGap};`}
  ${({ gridColumnGap }) => gridColumnGap && `grid-column-gap: ${gridColumnGap};`}

  ${({ gridRow }) => gridRow && `grid-row: ${gridRow};`}
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
  ${({ gridColumn }) => gridColumn && `grid-column: ${gridColumn};`}

  ${({ gridTemplate }) => gridTemplate && `grid-template: ${gridTemplate};`}
  ${({ gridTemplateRows }) => gridTemplateRows && `grid-template-rows: ${gridTemplateRows};`}
  ${({ gridTemplateAreas }) => gridTemplateAreas && `grid-template-areas: ${gridTemplateAreas};`}
  ${({ gridTemplateColumns }) => gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns};`}

  ${({ gridAutoRows }) => gridAutoRows && `grid-auto-rows: ${gridAutoRows};`}
  ${({ gridAutoFlow }) => gridAutoFlow && `grid-auto-flow: ${gridAutoFlow};`}
  ${({ gridAutoColumns }) => gridAutoColumns && `grid-auto-columns: ${gridAutoColumns};`}

  ${({ gridRowEnd }) => gridRowEnd && `grid-row-end: ${gridRowEnd};`}
  ${({ gridRowStart }) => gridRowStart && `grid-row-start: ${gridRowStart};`}
  ${({ gridColumnEnd }) => gridColumnEnd && `grid-column-end: ${gridColumnEnd};`}
  ${({ gridColumnStart }) => gridColumnStart && `grid-column-start: ${gridColumnStart};`}

  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}

  ${({ justifyItems }) => justifyItems && `justify-items: ${justifyItems};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
`;