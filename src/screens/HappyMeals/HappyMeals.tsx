import React from 'react';
import {
   BgImageContainer,
   ContentContainer,
   FooterContentContainer,
   HappyMealContainer,
   Heading,
   StyledButton,
   SubHeading,
} from './HappyMeals.style';
import { Motion } from '@legendapp/motion';
import { NavigationPropType } from '../../shared/types';

const HappyMeals = ({ navigation }: NavigationPropType) => {
   const statedHandler = function () {
      navigation.navigate('home');
   };

   return (
      <HappyMealContainer>
         <BgImageContainer
            source={{
               uri: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=3110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            resizeMode="cover"
         />
         <FooterContentContainer>
            <ContentContainer>
               <Motion.View initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: 'spring' }}>
                  <Heading>Happy Meals</Heading>
                  <SubHeading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, est.</SubHeading>
                  <StyledButton mode="contained" onPress={statedHandler}>
                     Get Started
                  </StyledButton>
               </Motion.View>
            </ContentContainer>
         </FooterContentContainer>
      </HappyMealContainer>
   );
};

export default HappyMeals;
