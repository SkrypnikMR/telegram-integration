import styled, { css } from 'styled-components';

import { BaseStyledProps, FlexProps, GridProps } from './types';
import { BaseStylesMixin, FlexMixin, GridMixin } from './mixins';
import { DefaultColors } from 'consts';


export const Container = styled.div<BaseStyledProps>`
  &&&& {
    ${BaseStylesMixin};
  }

  & .hover-show {
    display: none;
  }

  :hover {
   & > .hover-show {
      display: block;
    }
  }

  .ant-input-number-group-addon {
    padding: 0 10px;
  }

  ${({ noVisibleScroll }) => noVisibleScroll && css`
      ::-webkit-scrollbar {
      width: 0;
      height: 0;
  }`
  }
`;


export const FlexRow = styled(Container) <FlexProps>`
  display: flex;
  &&&& {
    ${FlexMixin};
  }
`;

export const FlexCol = styled(FlexRow)`
  flex-direction: column;

  & .icon-wrapper:hover {
    border: 1px solid ${DefaultColors.BLUE} !important;
  }

  & .form-item-wrapper {
    transition: 3s;
    .ant-col {
      flex-direction: row;
    }
    .ant-form-item-control {
      width: 81% !important;
      flex-wrap: wrap;
    }
  }
`;

export const Grid = styled(Container) <GridProps> `
  display: grid;
  &&&&{
    ${GridMixin};
  }
`;