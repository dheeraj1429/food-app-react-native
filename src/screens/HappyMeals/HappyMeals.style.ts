import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { Motion } from '@legendapp/motion';

export const HappyMealContainer = styled.View`
   flex: 1;
`;

export const BgImageContainer = styled.ImageBackground`
   flex: 1;
   position: absolute;
   width: ${props => props.theme.sizes.width['w-full']};
   height: ${props => props.theme.sizes.height['h-full']}%;
`;

export const FooterContentContainer = styled.View`
   flex: 1;
   width: ${props => props.theme.sizes.width['w-full']};
   display: flex;
   justify-content: flex-end;
`;

export const ContentContainer = styled.View`
   background-color: ${props => props.theme.colors.bg.secondary};
   width: ${props => props.theme.sizes.width['w-full']};
   height: ${props => props.theme.sizes.height['h-1/4']};
   border-top-left-radius: ${props => `${props.theme.sizes.spacing.md}px`};
   border-top-right-radius: ${props => `${props.theme.sizes.spacing.md}px`};
   padding: ${props => props.theme.sizes.spacing.lg + 'px'};
`;

export const Heading = styled.Text`
   font-size: ${props => props.theme.sizes.fontSize['text-6xl'] + 'px'};
   font-weight: 600;
   color: ${props => props.theme.colors.text.primary};
`;

export const SubHeading = styled.Text`
   font-size: ${props => props.theme.sizes.fontSize['text-lg'] + 'px'};
   color: ${props => props.theme.colors.text.secondary};
   margin-top: ${props => props.theme.sizes.spacing.lg + 'px'};
   margin-bottom: ${props => props.theme.sizes.spacing.lg + 'px'};
   width: ${props => props.theme.sizes.width['w-8/9']};
`;

export const StyledButton = styled(Button)`
   background-color: ${props => props.theme.colors.ui.success};
   margin-top: ${props => props.theme.sizes.spacing.md + 'px'};
`;
