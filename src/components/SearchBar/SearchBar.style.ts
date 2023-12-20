import styled from 'styled-components/native';

export const SearchContainer = styled.View`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-top: ${props => props.theme.sizes.fontSize['text-sm'] + 'px'};
   margin-bottom: ${props => props.theme.sizes.fontSize['text-sm'] + 'px'};
   background-color: ${props => props.theme.colors.bg.secondary};
   padding: ${props => props.theme.sizes.spacing.sm + 'px'};
   border-radius: ${props => props.theme.sizes.spacing.sm + 'px'};
`;

export const IconContainer = styled.View`
   width: 10%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: ${props => props.theme.sizes.spacing.xs + 'px'};
`;

export const SearchInput = styled.TextInput`
   width: 90%;
`;
