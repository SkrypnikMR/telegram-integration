import { BaseStylesMixin, FlexMixin } from './mixins';
import { BaseStyledProps, FlexProps } from './types';
import styled from 'styled-components';
import { Button as AntdButton } from 'antd';


export const Button = styled(AntdButton) <BaseStyledProps & FlexProps>`
    &&&& {
        ${BaseStylesMixin};
    }

    &&&& {
        ${FlexMixin};
    }
`;