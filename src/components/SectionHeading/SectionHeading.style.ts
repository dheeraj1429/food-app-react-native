import styled from 'styled-components/native';

export const SectionHeadingContainer = styled.View`
   display: flex;
   flex-direction: row;
   width: 100%;
   margin-top: ${props => props.theme.sizes.spacing.md + 'px'};
   margin-bottom: ${props => props.theme.sizes.spacing.md + 'px'};
   align-items: center;
   justify-content: space-between;
`;

export const Heading = styled.Text`
   font-size: ${props => props.theme.sizes.fontSize['text-3xl'] + 'px'};
   font-weight: 600;
   color: ${props => props.theme.colors.text.success};
`;

export const ShowAllText = styled.Text`
   font-size: ${props => props.theme.sizes.fontSize['text-lg'] + 'px'};
   color: ${props => props.theme.colors.ui.success};
`;
