import React from 'react';
import {
   FoodCardContainer,
   FoodCardImageContainer,
   FoodContentContainer,
   FoodDescriptionText,
   FoodHeading,
   FoodImage,
   FoodStoreText,
   FoodSubHeadingContainer,
} from './FoodCard.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../infrastructure/theme';

export interface FoodCardInterface {
   heading: string;
   image: string;
   place: string;
   price: string;
   star: React.ReactNode;
   rating: number;
   styleType?: 'full-bleed-image' | 'two-column-layout';
   imageStyle?: any;
   description?: string;
}

const FoodCard = ({ heading, image, place, price, star, rating, styleType, imageStyle, description }: FoodCardInterface) => {
   return (
      <FoodCardContainer
         display={styleType === 'two-column-layout' ? 'flex' : 'block'}
         flexDirection={styleType === 'two-column-layout' ? 'row' : 'column'}
         gap={styleType === 'two-column-layout' ? 10 : 0}>
         <FoodCardImageContainer style={imageStyle}>
            <FoodImage resizeMode="cover" source={{ uri: image }} />
         </FoodCardImageContainer>
         <FoodContentContainer width={styleType === 'two-column-layout' ? '70%' : '100%'}>
            <FoodHeading>{heading}</FoodHeading>
            <FoodSubHeadingContainer>
               <FoodStoreText>{place}</FoodStoreText>
               <FoodSubHeadingContainer gap={2}>
                  <MaterialIcons name="arrow-right" />
                  <FoodStoreText>{price}</FoodStoreText>
               </FoodSubHeadingContainer>
               <FoodSubHeadingContainer gap={2}>
                  {star}
                  <FoodStoreText fontWeight={600} color={theme.colors.ui.error}>
                     {rating}
                  </FoodStoreText>
               </FoodSubHeadingContainer>
            </FoodSubHeadingContainer>
            {description ? <FoodDescriptionText>{description}</FoodDescriptionText> : null}
         </FoodContentContainer>
      </FoodCardContainer>
   );
};

export default FoodCard;
