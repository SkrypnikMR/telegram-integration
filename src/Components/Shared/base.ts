import styled from 'styled-components';

import { BaseStyledProps, FlexProps, ImgProps } from './types';
import { BaseStylesMixin, FlexMixin } from './mixins';

export const Span = styled.span<BaseStyledProps & FlexProps>`
  &&&& {
    ${BaseStylesMixin};
  }
  &&&& {
    ${FlexMixin};
  }
`;

export const Header = styled.header<BaseStyledProps & FlexProps>`
  &&&& {
    ${BaseStylesMixin};
  }
  &&&& {
    ${FlexMixin};
  }
`;

export const StyledLink = styled.a<BaseStyledProps & FlexProps>`
  &&&& {
    ${BaseStylesMixin};
  }
  &&&& {
    ${FlexMixin};
  }
`;

export const Img = styled.img<BaseStyledProps & FlexProps & ImgProps>`
  &&&& {
    ${BaseStylesMixin};
  }
  &&&& {
    ${FlexMixin};
  }

  ${({ objectFit }) => objectFit && `object-fit: ${objectFit};`}
`;

export const Video = styled.video<BaseStyledProps & FlexProps>`
  &&&& {
    ${BaseStylesMixin};
  }
  &&&& {
    ${FlexMixin};
  }
`;
