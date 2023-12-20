import styled from 'styled-components/native';

export const SpacerContainer = styled.View<{ padding?: string }>`
   padding: ${props => (props?.padding ? props?.padding : props.theme.sizes.spacing.xs + 'px')};
`;
