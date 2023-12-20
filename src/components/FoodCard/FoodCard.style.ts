import { Image } from 'react-native';
import styled from 'styled-components/native';

export const FoodCardContainer = styled.View<{ display?: string; flexDirection?: string; gap?: number }>`
   padding-top: ${props => props.theme.sizes.spacing.sm + 'px'};
   padding-bottom: ${props => props.theme.sizes.spacing.sm + 'px'};
   display: ${props => (props.display ? props.display : 'block')};
   flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'column')};
   gap: ${props => (props.gap ? `${props.gap}px` : 0)};
`;

export const FoodCardImageContainer = styled.View`
   width: 100%;
   height: 170px;
`;

export const FoodImage = styled(Image)`
   width: 100%;
   height: 100%;
   border-radius: ${props => props.theme.sizes.spacing.md + 'px'};
`;

export const FoodContentContainer = styled.View<{ width?: string }>`
   width: ${props => (props.width ? props.width : '100%')};
`;

export const FoodHeading = styled.Text`
   font-size: ${props => props.theme.sizes.fontSize['text-3xl'] + 'px'};
   margin-top: ${props => props.theme.sizes.spacing.md + 'px'};
   margin-bottom: ${props => props.theme.sizes.spacing.sm + 'px'};
   font-weight: 600;
   color: ${props => props.theme.colors.ui.primary};
`;

export const FoodSubHeadingContainer = styled.View<{ gap?: number }>`
   display: flex;
   flex-direction: row;
   gap: ${props => (props.gap ? `${props.gap}px` : '8px')};
   align-items: center;
`;

export const FoodStoreText = styled.Text<{ color?: string; fontWeight?: number }>`
   font-size: ${props => props.theme.sizes.fontSize['text-xl'] + 'px'};
   color: ${props => (props.color ? props.color : props.theme.colors.ui.secondary)};
   font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
`;

export const FoodDescriptionText = styled.Text`
   color: ${props => props.theme.colors.ui.secondary};
   font-size: ${props => props.theme.sizes.fontSize['text-lg'] + 'px'};
   margin-top: ${props => props.theme.sizes.spacing.sm + 'px'};
`;
