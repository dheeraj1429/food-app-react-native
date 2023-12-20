import styled from 'styled-components/native';

export const TopHeading = styled.Text`
   font-size: ${props => props.theme.sizes.fontSize['text-xl'] + 'px'};
   color: ${props => props.theme.colors.text.secondary};
`;

export const LocationHeadingContainer = styled.View`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const LocationHeading = styled.Text`
   font-size: ${props => props.theme.sizes.fontSize['text-2xl'] + 'px'};
   color: ${props => props.theme.colors.text.primary};
   font-weight: 500;
   margin-top: ${props => props.theme.sizes.spacing.sm + 'px'};
`;
